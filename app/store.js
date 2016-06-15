'use strict';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import Auth from './reducers/auth.reducer';
import Message from './reducers/message.reducer';
import Accounts from './reducers/accounts.reducer';

const loggerMiddleware = createLogger();

let Store = createStore(
  combineReducers({
    Auth,
    Message,
    Accounts,
    routing: routerReducer
  }),
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware  //must be last
  )
);

export default Store;
