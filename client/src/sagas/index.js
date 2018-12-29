import { all, put, fork, take, call } from 'redux-saga/effects'
import { REQUEST, fetchReports } from '../actions';
import * as api from '../services/api';

export default function* root() {
  yield all([
    fork(onFetchReports),
    fork(onStartup)
  ]);
};

function* onStartup () {
  yield put(fetchReports.request({ requester: 'table' }));
}

function* onFetchReports() {
  while (true) {
    const { payload } = yield take(fetchReports[REQUEST]);
    const { requester } = payload;
    try {
      const data = yield call(api.fetchReports, {
        columns: [
          'advertiser_id',
          'advertiser_name',
          'campaign_id',
          'campaign_name',
          'cost_model',
          'date',
          'impressions',
          'clicks',
          'installs',
          'cost'
        ]
      });
      yield put(fetchReports.success({ requester, data }));
    } catch (data) {
      yield put(fetchReports.failure({ requester, data }));
    }
  }
}
