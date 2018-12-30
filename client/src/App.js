import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import ReportTableContainer from './containers/TableViewContainer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <ReportTableContainer />
      </React.Fragment>
    );
  }
}

export default App;
