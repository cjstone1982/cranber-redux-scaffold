'use strict';

import { createStore, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { login } from './reducers/auth';


let Store = createStore(
  combineReducers({
    login,
    routing: routerReducer
  })
);

export default Store;
