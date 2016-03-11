'use strict';

import { createStore, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import Reducer from './reducers/reducer';

let Store = createStore(
  combineReducers({
    ...Reducer,
    routing: routerReducer
  })
);

export default Store;
