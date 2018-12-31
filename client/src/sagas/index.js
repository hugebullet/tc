import { all, put, fork, take, call, select } from 'redux-saga/effects'
import {
  REQUEST,
  fetchReports,
  fetchReportsCount,
  SET_TABLE_VIEW_PAGE,
  SET_TABLE_VIEW_PER_PAGE,
  SET_TABLE_VIEW_ORDER,
  SET_TABLE_VIEW_COLUMNS,
  fetchAdvertisers,
  fetchCampaigns,
  SET_FILTERS
} from '../actions';
import * as api from '../services/api';

export default function* root() {
  yield all([
    fork(onReportsRequest(fetchReports, api.fetchReports)),
    fork(onReportsRequest(fetchReportsCount, api.fetchReportsCount)),
    fork(onOtherApiRequest(fetchAdvertisers, api.fetchAdvertisers)),
    fork(onOtherApiRequest(fetchCampaigns, api.fetchCampaigns)),
    fork(onTableViewColumnsChange),
    fork(onTableViewChange),
    fork(onFilterChange),
    fork(onStartup)
  ]);
};

function* onStartup () {
  yield put(fetchReports.request({ target: 'tableView' }));
  yield put(fetchReportsCount.request({ target: 'tableView' }));
  yield put(fetchAdvertisers.request());
  yield put(fetchCampaigns.request());
}

function onReportsRequest(actionCreators, apiCall) {
  return function* () {
    while (true) {
      const { payload } = yield take(actionCreators[REQUEST]);
      const { target } = payload;
      const state = yield select();
      try {
        const data = yield call(apiCall, { ...state[target], filter: state.filters });
        yield put(actionCreators.success({ target, data }));
      } catch (data) {
        yield put(actionCreators.failure({ target, data }));
      }
    }
  }
}

function onOtherApiRequest(actionCreators, apiCall) {
  return function* () {
    while (true) {
      const { payload } = yield take(actionCreators[REQUEST]);
      try {
        const data = yield call(apiCall, payload);
        yield put(actionCreators.success({ data }));
      } catch (data) {
        yield put(actionCreators.failure({ data }));
      }
    }
  }
}

function* onTableViewChange() {
  while (true) {
    yield take([SET_TABLE_VIEW_PAGE, SET_TABLE_VIEW_PER_PAGE, SET_TABLE_VIEW_ORDER, SET_TABLE_VIEW_COLUMNS]);
    yield put(fetchReports.request({ target: 'tableView' }));
  }
}

function* onTableViewColumnsChange() {
  while (true) {
    yield take(SET_TABLE_VIEW_COLUMNS);
    yield put(fetchReportsCount.request({ target: 'tableView' }));
  }
}

function* onFilterChange() {
  while (true) {
    yield take(SET_FILTERS);
    yield put(fetchReports.request({ target: 'tableView' }));
    yield put(fetchReportsCount.request({ target: 'tableView' }));
  }
}
