import * as ActionTypes from '../actions/ActionTypes';
import { put, takeEvery, all, call, takeLatest, fork } from 'redux-saga/effects';
import * as actions from '../actions/counter';


const takeEveryCountClick = function* (action) {
  yield put(actions.countClick(action.payload));
};

const processes = function* () {
  yield all([
    fork(takeEvery, ActionTypes.TAKE_EVERY_COUNT_CLICK, takeEveryCountClick)
  ])
};

export default processes;
