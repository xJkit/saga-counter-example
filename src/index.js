import 'whatwg-fetch';
import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import './index.css';

import App from './App';

// reducers;
import countReducer from './reducers/count';
import usersReducer from './reducers/users';

import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';

const loggerMiddleware = createLogger({ collapsed: true });

const reducer = combineReducers({
  count: countReducer,
  users: usersReducer,
});
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducer,
    compose(
        applyMiddleware(sagaMiddleware, loggerMiddleware)
    ),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
