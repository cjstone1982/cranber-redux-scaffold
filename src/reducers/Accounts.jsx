"use strict";

import * as constants from '../constants';

let switchMap = [];

let initialState = {
  data: []
};

switchMap[constants.GETACCOUNTSSCUUESS] = (state, action) => {
  return Object.assign({}, state, {
    data: action.payload.data
  });
};

export default function Accounts(state = initialState, action) {
  if (switchMap[action.type]) {
    return switchMap[action.type](state, action);
  } else{
    return state;
  }
}
