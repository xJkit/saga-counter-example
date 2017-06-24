import { fork, all } from 'redux-saga/effects';
import counter from './counter';
import users from './users';

export default function* sagas() {
  // 其他的 saga 可以放在在這裡
  // 一個 combineReducers 的概念
  // 想像每一個 Saga 都是獨立的執行緒
  yield all([
    fork(counter),
    fork(users),
  ]);
}
