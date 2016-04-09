"use strict";

import * as constants from '../constants';

let switchMap = [];

let initialState = {
  data: []
};

switchMap[constants.GETORDERSSUCCESS] = (state, action) => {
  return Object.assign({}, state, {
    data: action.payload.data
  });
};

export default function Orders(state = initialState, action) {
  if (switchMap[action.type]) {
    return switchMap[action.type](state, action);
  } else{
    return state;
  }
}
