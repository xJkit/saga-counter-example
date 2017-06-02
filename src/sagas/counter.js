import * as Types from '../actions/ActionTypes';
import { put, takeEvery } from 'redux-saga/effects';
import { delay } from 'redux-saga';

const incrementSaga = function* (action) {
    yield delay(action.delay);
    yield put({ type: Types.INCREMENT_COUNT});
};

const decrementSaga = function* (action) {
    yield delay(action.delay);
    yield put({ type: Types.DECREMENT_COUNT});
};

const watchCounterSaga = function* () {
    // takeEvery 是 concurrent, 在此的 yield 為無順序執行
    // takeEvery 會把 action 自動丟到後面的 generatir 裡面當 input
    yield takeEvery(Types.INCREMENT_COUNT_ASYNC, incrementSaga);
    yield takeEvery(Types.DECREMENT_COUNT_ASYNC, decrementSaga);
};

export default watchCounterSaga;