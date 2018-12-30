import TableView from '../components/TableView';
import { connect } from 'react-redux';
import { setTableViewState } from '../actions';

export default connect(
  state => ({ ...state.tableView }),
  { setTableViewState }
)(TableView);
