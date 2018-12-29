import { fetchReports, SUCCESS } from '../actions';
import { combineReducers } from 'redux';

export default combineReducers({
  reports
});

function reports(state = {}, { type, payload }) {
  switch(type) {
    case fetchReports[SUCCESS]:
      return {
        ...state,
        [payload.requester]: payload.data
      };
    default:
      return state;
  }
}
