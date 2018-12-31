import TableView from '../components/TableView';
import { connect } from 'react-redux';
import {
  setTableViewPage,
  setTableViewPerPage,
  setTableViewOrder,
  setTableViewColumns
} from '../actions';

export default connect(
  state => ({ ...state.tableView }),
  {
    setTableViewPage,
    setTableViewPerPage,
    setTableViewOrder,
    setTableViewColumns
  }
)(TableView);
