import * as Types from '../actions/ActionTypes';
import { takeEvery, put } from 'redux-saga/effects';

const fetchUsers = function* (action) {
  try {
    const users = yield fetch(action.endpoint).then(response => response.json());
    const userNames = users.map(user => user.name);
    yield put({
      type: Types.GET_USERS.SUCCESS,
      payload: userNames,
    });
  } catch(err) {
    yield put({
      type: Types.GET_USERS.FAILURE,
      error: err.message,
    });
  }
}

const watchFetchUsers = function* () {
  yield takeEvery(Types.GET_USERS.REQUEST, fetchUsers);
}

export default watchFetchUsers;