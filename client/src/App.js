import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import './App.css';
import ReportTableContainer from './containers/TableViewContainer';
import FiltersContainer from './containers/FiltersContainer';
import DatesContainer from './containers/DatesContainer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <DatesContainer />
          <FiltersContainer />
          <ReportTableContainer />
        </MuiPickersUtilsProvider>
      </React.Fragment>
    );
  }
}

export default App;
