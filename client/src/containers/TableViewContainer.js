import TableView from '../components/TableView';
import { connect } from 'react-redux';
import { setTableViewPage, setTableViewPerPage, setTableViewOrder } from '../actions';

export default connect(
  state => ({ ...state.tableView }),
  { setTableViewPage, setTableViewPerPage, setTableViewOrder }
)(TableView);
