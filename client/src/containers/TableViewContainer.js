import TableView from '../components/TableView';
import { connect } from 'react-redux';
import { setTableViewPage, setTableViewPerPage } from '../actions';

export default connect(
  state => ({ ...state.tableView }),
  { setTableViewPage, setTableViewPerPage }
)(TableView);
