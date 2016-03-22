'use strict';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { AuthReducer } from './reducers/AuthReducer';

const loggerMiddleware = createLogger();

let Store = createStore(
  combineReducers({
    AuthReducer,
    routing: routerReducer
  }),
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware  //must be last
  )
);

export default Store;
