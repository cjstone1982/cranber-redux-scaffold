'use strict';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import Login from './reducers/Login';
import User from './reducers/User';

const loggerMiddleware = createLogger();

let Store = createStore(
  combineReducers({
    Login,
    User,
    routing: routerReducer
  }),
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware  //must be last
  )
);

export default Store;
