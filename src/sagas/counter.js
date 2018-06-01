import * as ActionTypes from '../actions/ActionTypes';
import { put, takeEvery, takeLatest, all, call, fork } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as actions from '../actions/counter';


const takeEveryCountClick = function* (action) {
  yield delay(500);
  yield put(actions.countClick(action.payload));
};

const takeLatestCountClick = function* (action) {
  yield delay(500);
  yield put(actions.countClick(action.payload));
};

const processes = function* () {
  yield all([
    fork(takeEvery, ActionTypes.TAKE_EVERY_COUNT_CLICK, takeEveryCountClick),
    fork(takeLatest, ActionTypes.TAKE_LATEST_COUNT_CLICK, takeLatestCountClick),
  ])
};

export default processes;
