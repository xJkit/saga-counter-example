import * as ActionTypes from '../actions/ActionTypes';
import {
  put,
  takeEvery,
  takeLatest,
  all,
  call,
  fork,
  take,
  actionChannel,
} from 'redux-saga/effects';
import { delay, buffers } from 'redux-saga';
import * as actions from '../actions/counter';

const watchClickChan = function* (click$) {
  while (true) {
    const action = yield take(click$);
    yield delay(500);
    yield put(actions.countClick(action.payload));
  }
}

const takeEveryCountClick = function* (action) {
  yield delay(500);
  yield put(actions.countClick(action.payload));
};

const takeLatestCountClick = function* (action) {
  yield delay(500);
  yield put(actions.countClick(action.payload));
};




export default function* () {
  /** need to define buffer side, otherwise this saga will throw error. Default buffer size equals 10 */
  /**
   * buffers.sliding(5): when buffer overflow, drop the oldest action and take the new one
   * buffers.dropping(5): when buffer overflow, drop the newest action silently
   */
  const click$ = yield actionChannel(ActionTypes.ACTION_CHANNEL_COUNT_CLICK, buffers.sliding(5));

  yield all([
    fork(takeEvery, ActionTypes.TAKE_EVERY_COUNT_CLICK, takeEveryCountClick),
    fork(takeLatest, ActionTypes.TAKE_LATEST_COUNT_CLICK, takeLatestCountClick),
    fork(watchClickChan, click$),
  ])
};
