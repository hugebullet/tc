const mysql = require('mysql');
const express = require('express');
const moment = require('moment');
const cors = require('cors');

const connection = mysql.createConnection(process.env.DATABASE_URL);

const app = express();

app.use(cors({
  origin: 'http://localhost:3000'
}));

app.get('/api/advertisers', (req, res) => {
  connection.query('SELECT * FROM advertisers', (err, results) => {
    if (err) {
      console.error(err);
      return res.sendStatus(500);
    }
    res.send(JSON.stringify(results));
  });
});

app.get('/api/campaigns', (req, res) => {
  connection.query('SELECT * FROM campaigns', (err, results) => {
    if (err) {
      console.error(err);
      return res.sendStatus(500);
    }
    res.send(JSON.stringify(results));
  });
});

app.get('/api/advertisers/:id/campaigns', (req, res) => {
  const advertiserId = parseInt(req.params.id, 10);
  if (!validId(advertiserId)) {
    return res.status(400).send('Invalid advertiser ID');
  }
  connection.query(`SELECT * FROM campaigns WHERE advertiser_id = ${advertiserId}`, (err, results) => {
    if (err) {
      console.error(err);
      return res.sendStatus(500);
    }
    res.send(JSON.stringify(results));
  });
});

app.get('/api/reports', (req, res) => {
  try {
    let joinAdvertisers = false;
    let joinCampaigns = false;

    /**
     *  WHERE
     */
    // not gonna support campaign_name and advertiser_name filters for now
    // frontend will send IDs
    const { campaign_id, advertiser_id, cost_model } = JSON.parse(req.query.filter || '{}');
    if (cost_model) {
      joinCampaigns = true;
    }
    let where = [
      costModelClause(cost_model),
      idFilterClause('campaign_id', campaign_id),
      idFilterClause('advertiser_id', advertiser_id),
      dateClause('>=', req.query.start_date),
      dateClause('<=', req.query.end_date)
    ]
      .filter(Boolean)
      .join(' AND ');
    if (where) {
      where = ` WHERE ${where}`;
    }

    /**
     *  GROUP BY
     */
    const columns = groupByColumns(req.query.columns);
    if (!joinCampaigns && columns.some(c => c.indexOf('campaigns.') === 0)) {
      joinCampaigns = true;
    }
    if (!joinAdvertisers && columns.some(c => c.indexOf('advertisers.') === 0)) {
      joinAdvertisers = true;
    }
    const groupBy = columns.length ? ` GROUP BY ${columns.join(',')}` : '';

    /**
     *  SELECT
     */
    const select = `SELECT ${selectColumns(req.query.columns).join(',')} FROM reports`;

    /**
     *  JOIN
     */
    const joins = [
      joinCampaigns && ' LEFT JOIN campaigns ON reports.campaign_id = campaigns.id',
      joinAdvertisers && ' LEFT JOIN advertisers ON reports.advertiser_id = advertisers.id',
    ]
      .filter(Boolean)
      .join('');

    /**
     *  FINAL QUERY
     */
    const query = `${select}${joins}${where}${groupBy}`;
    console.log(query);

    connection.query(query, (err, results) => {
      if (err) {
        throw err;
      }
      res.send(JSON.stringify(results));
    });
  } catch (e) {
    const clientError = e instanceof SyntaxError || e instanceof TypeError;
    if (clientError) {
      res.status(400).send(e.message);
    } else {
      console.error(e);
      res.sendStatus(500);
    }
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});

function costModelClause(values) {
  if (!values) {
    return '';
  }
  if (values.some(v => !validCostModel(v))) {
    throw new SyntaxError('cost_model is invalid');
  }
  return `cost_model IN ('${values.join('\',\'')}')`;
}

function idFilterClause(columnName, values) {
  if (!values) {
    return '';
  }
  if (values.some(id => !validId(id))) {
    throw new SyntaxError('id must be positive integer');
  }
  return `${columnName} IN (${values.join(',')})`;
}

function dateClause(operator, date) {
  if (!date) {
    return '';
  }
  if (!validDate(date)) {
    throw new SyntaxError('date is invalid');
  }
  return `\`date\` ${operator} ${date}`;
}

function groupByColumns(values) {
  if (!values) {
    throw new SyntaxError('columns are required');
  }
  return values.map(c => groupByMap(c)).filter(Boolean);
}

function selectColumns(values) {
  if (!values) {
    throw new SyntaxError('columns are required');
  }
  if (!values.some(c => metricsMap(c))) {
    throw new SyntaxError('at least one metric column is required');
  }
  const selectColumns = values.map(v => {
    if (groupByMap(v)) {
      return `${groupByMap(v)} AS ${v}`;
    }
    if (metricsMap(v)) {
      return `${metricsMap(v)} AS ${v}`;
    }
    return '';
  });
  if (selectColumns.some(v => !v)) {
    throw new SyntaxError('columns are invalid');
  }
  return selectColumns;
}

const VALID_COST_MODELS = ['per_impression', 'per_click', 'per_install'];
function validCostModel(costModel) {
  return VALID_COST_MODELS.includes(costModel);
}

function validDate(date) {
  return moment(date, 'YYYY-MM-DD', true).isValid();
}

function validId(i) {
  return i === parseInt(i, 10) && i >= 0;
}

const METRICS_MAP = {
  impressions: 'SUM(reports.impressions)',
  clicks: 'SUM(reports.clicks)',
  installs: 'SUM(reports.installs)',
  cost: 'SUM(reports.cost_micros) / 1000000'
}
function metricsMap(k) {
  return METRICS_MAP[k];
}

const GROUP_BY_MAP = {
  campaign_id: 'reports.campaign_id',
  advertiser_id: 'reports.advertiser_id',
  campaign_name: 'campaigns.name',
  advertiser_name: 'advertisers.name',
  cost_model: 'campaigns.cost_model',
  date: 'reports.date'
};
function groupByMap(k) {
  return GROUP_BY_MAP[k];
}
