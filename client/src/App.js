import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import './App.css';
import ReportTableContainer from './containers/TableViewContainer';
import FiltersContainer from './containers/FiltersContainer';
import DatesContainer from './containers/DatesContainer';
import ChartViewContainer from './containers/ChartViewContainer';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  datesAndFilters: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  }
});

class App extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <div className={this.props.classes.datesAndFilters}>
            <DatesContainer />
            <FiltersContainer />
          </div>
          <ChartViewContainer />
          <ReportTableContainer />
        </MuiPickersUtilsProvider>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
