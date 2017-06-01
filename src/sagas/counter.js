import * as Types from '../actions/ActionTypes';
import { put, call, takeEvery } from 'redux-saga/effects';
import { delay } from 'redux-saga';


export default function* counterSaga() {
    yield takeEvery(Types.INCREMENT_COUNT_ASYNC, () => console.log('catch increment async'));
    yield takeEvery(Types.DECREMENT_COUNT_ASYNC, () => console.log('catch decrement async'));
}