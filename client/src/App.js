import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import ReportTableContainer from './containers/TableViewContainer';
import FiltersContainer from './containers/FiltersContainer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <FiltersContainer />
        <ReportTableContainer />
      </React.Fragment>
    );
  }
}

export default App;
