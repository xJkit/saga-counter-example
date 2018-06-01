import { ASYNC_COUNT_CLICK, COUNT_CLICK } from '../actions/counter';
import { put, takeEvery, all, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';

const incrementAsync = function* (action) {
  try {
    yield delay(2000);
    yield put({ type: COUNT_CLICK, payload: action.payload });
    // yield put({ type: ASYNC_COUNT_CLICK.SUCCESS });
  } catch(error) {
    yield put({ type: ASYNC_COUNT_CLICK.FAILURE, error });
  }
};

const watchCounterSaga = function* () {
  yield takeEvery(ASYNC_COUNT_CLICK.REQUEST, incrementAsync);
};

export default watchCounterSaga;
