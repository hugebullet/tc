import Table from '../components/Table';
import { connect } from 'react-redux';

export default connect(
  state => ({
    data: state.reports.table
  })
)(Table);
