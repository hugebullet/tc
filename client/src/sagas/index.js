import { all, put, fork, take, call, select } from 'redux-saga/effects'
import { REQUEST, fetchReports, fetchReportsCount, SET_TABLE_VIEW_STATE } from '../actions';
import * as api from '../services/api';

export default function* root() {
  yield all([
    fork(onApiRequest(fetchReports, api.fetchReports)),
    fork(onApiRequest(fetchReportsCount, api.fetchReportsCount)),
    fork(onTableViewStateChange),
    fork(onStartup)
  ]);
};

function* onStartup () {
  yield put(fetchReports.request({ target: 'tableView' }));
  yield put(fetchReportsCount.request({ target: 'tableView' }));
}

function onApiRequest(actionCreators, apiCall) {
  return function* () {
    while (true) {
      const { payload } = yield take(actionCreators[REQUEST]);
      const { target } = payload;
      const state = yield select();
      try {
        const data = yield call(apiCall, state[target]);
        yield put(actionCreators.success({ target, data }));
      } catch (data) {
        yield put(actionCreators.failure({ target, data }));
      }
    }
  }
}

function* onTableViewStateChange() {
  while (true) {
    yield take(SET_TABLE_VIEW_STATE);
    yield put(fetchReports.request({ target: 'tableView' }));
    yield put(fetchReportsCount.request({ target: 'tableView' }));
  }
}
