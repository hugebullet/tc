const mysql = require('mysql');
const express = require('express');
const moment = require('moment');
const cors = require('cors');
const { camelizeKeys } = require('humps');

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
    res.send(camelizeKeys(results));
  });
});

app.get('/api/campaigns', (req, res) => {
  connection.query('SELECT * FROM campaigns', (err, results) => {
    if (err) {
      console.error(err);
      return res.sendStatus(500);
    }
    res.send(camelizeKeys(results));
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
    res.send(camelizeKeys(results));
  });
});

app.get('/api/reports', (req, res) => {
  try {
    const query = `${select(req)}${join(req)}${where(req)}${groupBy(req)}${orderBy(req)}${limit(req)}`;
    console.log(query);

    connection.query(query, (err, results) => {
      if (err) {
        throw err;
      }
      res.send(results.map(row => {
        if (row.date) {
          row.date = moment(row.date).format('YYYY-MM-DD');
        }
        return row;
      }));
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

app.get('/api/reports/count', (req, res) => {
  try {
    const query = `SELECT COUNT(*) AS count FROM (${select(req)}${join(req)}${where(req)}${groupBy(req)}) AS innerQuery`;
    console.log(query);

    connection.query(query, (err, results) => {
      if (err) {
        throw err;
      }
      res.send(results);
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

function select({ query }) {
  if (!query.columns) {
    throw new SyntaxError('columns are required');
  }
  const selectColumns = query.columns.map(c => {
    if (groupByMap(c)) {
      return `${groupByMap(c)} AS ${c}`;
    }
    if (metricsMap(c)) {
      return `${metricsMap(c)} AS ${c}`;
    }
    return '';
  });
  if (selectColumns.some(c => !c)) {
    throw new SyntaxError('columns are invalid');
  }
  return `SELECT ${selectColumns.join(',')} FROM reports`;
}

function join({ query }) {
  const filterColumns = Object.keys(JSON.parse(query.filter || '{}'));
  const requiredColumns = [...query.columns, ...filterColumns];
  const joinCampaigns = requiredColumns.some(c => groupByMap(c) && groupByMap(c).indexOf('campaigns.') === 0);
  const joinAdvertisers = requiredColumns.some(c => groupByMap(c) && groupByMap(c).indexOf('advertisers.') === 0);
  return [
    joinCampaigns && ' LEFT JOIN campaigns ON reports.campaign_id = campaigns.id',
    joinAdvertisers && ' LEFT JOIN advertisers ON reports.advertiser_id = advertisers.id',
  ]
    .filter(Boolean)
    .join('');
}

function where({ query }) {
  const { campaignId, advertiserId, costModel } = JSON.parse(query.filter || '{}');
  const where = [
    costModelClause(costModel),
    idFilterClause('reports.campaign_id', campaignId),
    idFilterClause('reports.advertiser_id', advertiserId),
    dateClause('>=', query.startDate),
    dateClause('<=', query.endDate)
  ]
    .filter(Boolean)
    .join(' AND ');
  return where ? ` WHERE ${where}` : '';
}

function groupBy({ query }) {
  if (!query.columns || !query.columns.length) {
    throw new SyntaxError('columns are required');
  }
  const groupByColumns = query.columns.map(c => groupByMap(c)).filter(Boolean);
  return groupByColumns.length ? ` GROUP BY ${groupByColumns.join(',')}` : '';
}

function orderBy({ query }) {
  const orderByColumn = query.orderBy || query.columns[0];
  if (!query.columns.includes(orderByColumn)) {
    throw new SyntaxError('orderBy value must be present in columns');
  }
  const orderDir = (query.orderDir || 'ASC').toUpperCase();
  if (orderDir !== 'ASC' && orderDir !== 'DESC') {
    throw new SyntaxError('orderDir must be either ASC or DESC');
  }
  return ` ORDER BY ${orderByColumn} ${orderDir}`;
}

function limit({ query }) {
  const page = parseInt(query.page, 10) || 0;
  if (page < 0) {
    throw new SyntaxError('page must not be negative')
  }
  const perPage = parseInt(query.perPage, 10) || 50;
  if (perPage <= 0) {
    throw new SyntaxError('perPage must be greater than 0');
  }
  return ` LIMIT ${page * perPage}, ${perPage}`;
}

function costModelClause(values) {
  if (!values || !values.length) {
    return '';
  }
  if (values.some(v => !validCostModel(v))) {
    throw new SyntaxError('costModel is invalid');
  }
  return `campaigns.cost_model IN ('${values.join('\',\'')}')`;
}

function idFilterClause(columnName, values) {
  if (!values || !values.length) {
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
  campaignId: 'reports.campaign_id',
  advertiserId: 'reports.advertiser_id',
  campaignName: 'campaigns.name',
  advertiserName: 'advertisers.name',
  costModel: 'campaigns.cost_model',
  date: 'reports.date'
};
function groupByMap(k) {
  return GROUP_BY_MAP[k];
}
