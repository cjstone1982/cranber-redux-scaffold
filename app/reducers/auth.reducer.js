"use strict";

import * as constants from '../constants';

const initialState = {
  isLogin: false,
  isLoading: false,
  session: {
    token: null
  }
};

let switchMap = {};

switchMap[constants.LOGINSUCCESS] = (state, action) => {
    return Object.assign({}, state, {
    isLogin: true,
    isLoading: false,
    session: {
      token: action.payload.token
    }
  });
};

switchMap[constants.LOGINFAIL] = (state) => {
  return Object.assign({}, state, {
    isLogin: false,
    isLoading: false
  });
};

switchMap[constants.LOGOUT] = (state) => {
  return Object.assign({}, state, {
    isLogin: false
  });
};

export default function Auth(state = initialState, action) {
  if (switchMap[action.type]) {
    return switchMap[action.type](state, action);
  } else{
    return state;
  }
}
