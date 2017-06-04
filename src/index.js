import 'whatwg-fetch';
import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

import App from './App';

// reducers;
import countReducer from './reducers/count';
import usersReducer from './reducers/users';

import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';

const reducer = combineReducers({
  count: countReducer,
  users: usersReducer,
});
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducer,
    compose(
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
