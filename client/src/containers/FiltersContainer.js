import Filters from '../components/Filters';
import { connect } from 'react-redux';
import { setFilters } from '../actions';

export default connect(
  state => ({
    ...state.filters,
    advertisers: state.advertisers,
    campaigns: state.campaigns
  }),
  { setFilters }
)(Filters);
