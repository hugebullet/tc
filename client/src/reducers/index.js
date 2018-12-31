import {
  fetchReports,
  fetchReportsCount,
  REQUEST,
  SUCCESS,
  SET_TABLE_VIEW_PER_PAGE,
  SET_TABLE_VIEW_PAGE,
  SET_TABLE_VIEW_ORDER,
  SET_TABLE_VIEW_COLUMNS
} from '../actions';
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
  orderDir: 'desc',
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
      return payload.target !== 'tableView' ? state : {
        ...state,
        rows: payload.data,
        loadingRows: false
      };
    case fetchReportsCount[SUCCESS]:
      return payload.target !== 'tableView' ? state : {
        ...state,
        count: payload.data[0].count,
        loadingCount: false
      };
    case SET_TABLE_VIEW_PAGE:
      return { ...state, page: payload };
    case SET_TABLE_VIEW_PER_PAGE:
      return { ...state, perPage: payload };
    case SET_TABLE_VIEW_ORDER:
      return { ...state, ...payload };
    case SET_TABLE_VIEW_COLUMNS:
      if (payload.length < 1) {
        return state;
      }
      const orderBy = payload.includes(state.orderBy) ? state.orderBy : payload[0];
      const orderDir = orderBy !== state.orderBy ? 'desc' : state.orderDir;
      return { ...state, columns: payload, page: 0, orderBy, orderDir };
    default:
      return state;
  }
}
