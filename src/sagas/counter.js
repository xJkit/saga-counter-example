import * as Types from '../actions/ActionTypes';
import { put, takeEvery } from 'redux-saga/effects';
import { delay } from 'redux-saga';

function* incrementSaga(action) {
    yield delay(action.delay);
    yield put({ type: Types.INCREMENT_COUNT});
}

function* decrementSaga(action) {
    yield delay(action.delay);
    yield put({ type: Types.DECREMENT_COUNT});
}

export default function* watchCounterSaga() {
    yield takeEvery(Types.INCREMENT_COUNT_ASYNC, incrementSaga);
    yield takeEvery(Types.DECREMENT_COUNT_ASYNC, decrementSaga);
}