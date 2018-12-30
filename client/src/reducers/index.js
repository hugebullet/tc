import { fetchReports, fetchReportsCount, REQUEST, SUCCESS, SET_TABLE_VIEW_STATE } from '../actions';
import { combineReducers } from 'redux';

export default combineReducers({
  tableView
});

function tableView(state = {
  loadingRows: true,
  loadingCount: true,
  rows: [],
  count: 0,
  orderBy: 'cost',
  orderDir: 'DESC',
  page: 0,
  perPage: 10,
  columns: ['campaignId', 'campaignName', 'impressions', 'clicks', 'installs', 'cost']
}, { type, payload }) {
  switch (type) {
    case fetchReports[REQUEST]:
      return { ...state, loadingRows: true };
    case fetchReportsCount[REQUEST]:
      return { ...state, loadingCount: true };
    case fetchReports[SUCCESS]:
      return payload.target === 'tableView' ? { ...state, rows: payload.data } : state;
    case fetchReportsCount[SUCCESS]:
      return payload.target === 'tableView' ? { ...state, count: payload.data[0].count } : state;
    case SET_TABLE_VIEW_STATE:
      return { ...state, ...payload };
    default:
      return state;
  }
}
