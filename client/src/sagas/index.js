import { all, put, fork, take, call, select, takeEvery } from 'redux-saga/effects'
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
  SET_FILTERS,
  SET_DATES,
  SET_CHART_VIEW_SECOND_COLUMN
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
    fork(onChartViewSecondColumnChange),
    fork(onFiltersOrDatesChange),
    fork(onStartup)
  ]);
};

function* onStartup () {
  yield put(fetchAdvertisers.request());
  yield put(fetchCampaigns.request());
  yield put(fetchReports.request({ target: 'chartView' }));
  yield put(fetchReports.request({ target: 'tableView' }));
  yield put(fetchReportsCount.request({ target: 'tableView' }));
}

function onReportsRequest(actionCreators, apiCall) {
  return function* () {
    yield takeEvery(actionCreators[REQUEST], function* ({ payload }) {
      const { target } = payload;
      const state = yield select();
      try {
        const data = yield call(apiCall, { ...state[target], filter: state.filters, ...state.dates });
        yield put(actionCreators.success({ target, data }));
      } catch (data) {
        yield put(actionCreators.failure({ target, data }));
      }
    });
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

function* onChartViewSecondColumnChange() {
  while (true) {
    yield take(SET_CHART_VIEW_SECOND_COLUMN);
    yield put(fetchReports.request({ target: 'chartView' }));
  }
}

function* onFiltersOrDatesChange() {
  while (true) {
    yield take([SET_FILTERS, SET_DATES]);
    yield put(fetchReports.request({ target: 'chartView' }));
    yield put(fetchReports.request({ target: 'tableView' }));
    yield put(fetchReportsCount.request({ target: 'tableView' }));
  }
}
