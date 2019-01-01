import moment from 'moment';
import {
  fetchReports,
  fetchReportsCount,
  fetchAdvertisers,
  fetchCampaigns,
  REQUEST,
  SUCCESS,
  SET_TABLE_VIEW_PER_PAGE,
  SET_TABLE_VIEW_PAGE,
  SET_TABLE_VIEW_ORDER,
  SET_TABLE_VIEW_COLUMNS,
  SET_FILTERS,
  SET_DATES,
  SET_CHART_VIEW_SECOND_COLUMN
} from '../actions';
import { combineReducers } from 'redux';

export default combineReducers({
  tableView,
  chartView,
  advertisers,
  campaigns,
  filters,
  dates
});

function tableView(state = {
  loadingRows: true,
  loadingCount: true,
  rows: [],
  count: 0,
  orderBy: 'date',
  orderDir: 'desc',
  page: 0,
  perPage: 5,
  columns: ['date', 'cost']
}, { type, payload }) {
  switch (type) {
    case fetchReports[REQUEST]:
      return payload.target !== 'tableView' ? state : { ...state, loadingRows: true };
    case fetchReportsCount[REQUEST]:
      return payload.target !== 'tableView' ? state : { ...state, loadingCount: true };
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

function chartView(state = {
  loading: true,
  columns: ['date', 'cost'],
  orderBy: 'date',
  orderDir: 'asc',
  perPage: 9999,
  rows: []
}, { type, payload }) {
  switch (type) {
    case fetchReports[REQUEST]:
      return payload.target !== 'chartView' ? state : { ...state, loadingRows: true };
    case fetchReports[SUCCESS]:
      return payload.target !== 'chartView' ? state : {
        ...state,
        rows: payload.data,
        loading: false
      };
    case SET_CHART_VIEW_SECOND_COLUMN:
      return {
        ...state,
        columns: ['date', payload]
      }
    default:
      return state;
  }
}

function advertisers(state = [], { type, payload }) {
  switch (type) {
    case fetchAdvertisers[SUCCESS]:
      return payload.data;
    default:
      return state;
  }
}

function campaigns(state = [], { type, payload }) {
  switch (type) {
    case fetchCampaigns[SUCCESS]:
      return payload.data;
    default:
      return state;
  }
}

function filters(state = {
  advertiserId: [],
  campaignId: [],
  costModel: []
}, { type, payload }) {
  switch (type) {
    case SET_FILTERS:
      return { ...state, ...payload };
    default:
    return state;
  }
}

function dates(state = {
  startDate: moment('2018-01-01').toDate(),
  endDate: moment('2018-12-31').toDate()
}, { type, payload }) {
  switch (type) {
    case SET_DATES:
      return { ...state, ...payload };
    default:
      return state;
  }
}
