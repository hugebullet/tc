import Dates from '../components/Dates';
import { connect } from 'react-redux';
import { setDates } from '../actions';

export default connect(
  state => ({
    ...state.dates
  }),
  { setDates }
)(Dates);
