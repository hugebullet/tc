import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Chart } from "react-google-charts";
import { withStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { prettifyColumnName } from '../util';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap-reverse',
    justifyContent: 'center',
    marginTop: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 3,
    width: '100%'
  },
  formControl: {
    margin: theme.spacing.unit,
    marginLeft: theme.spacing.unit * 3,
    minWidth: 120
  }
});

const ALL_METRICS = ['impressions', 'clicks', 'installs', 'cost'];
class ChartView extends PureComponent {
  render() {
    const { classes, columns, rows, setChartViewSecondColumn } = this.props
    return (
      <Paper className={classes.root}>
        <Chart
          width={'600px'}
          height={'250px'}
          chartType="Line"
          options={{
            legend: {
              position: 'none'
            },
            hAxis: {
              textPosition: 'in'
            }
          }}
          data={[
            columns.map(prettifyColumnName),
            ...rows.map(row => columns.map(c => row[c]))
          ]}
        />
        <FormControl className={classes.formControl}>
          <FormLabel component="legend">Metric</FormLabel>
          <RadioGroup
            aria-label="Metric"
            value={columns[1]}
            onChange={e => setChartViewSecondColumn(e.target.value)}
          >
            {ALL_METRICS.map(metric =>
              <FormControlLabel value={metric} control={<Radio />} label={prettifyColumnName(metric)} />
            )}
          </RadioGroup>
        </FormControl>
      </Paper>
    );
  }
}

ChartView.propTypes = {
  classes: PropTypes.object.isRequired,
  columns: PropTypes.arrayOf(String).isRequired,
  rows: PropTypes.array.isRequired,
  setChartViewSecondColumn: PropTypes.func.isRequired
}

export default withStyles(styles)(ChartView);
