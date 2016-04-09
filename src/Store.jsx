'use strict';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import Auth from './reducers/Auth';
import Message from './reducers/Message';
import Accounts from './reducers/Accounts';
import Orders from './reducers/Orders';

const loggerMiddleware = createLogger();

let Store = createStore(
  combineReducers({
    //core state
    Auth,
    Message,
    Accounts,
    Orders,
    routing: routerReducer
    //service state
  }),
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware  //must be last
  )
);

export default Store;
