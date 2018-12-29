import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import TableContainer from './containers/TableContainer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <TableContainer />
      </React.Fragment>
    );
  }
}

export default App;
