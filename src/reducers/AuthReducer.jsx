"use strict";

import * as constants from '../constants';
import {loginSuccessAction, loginFailAction} from '../actions/authActions';

const initialState = {
  isLogin: true,
  isLoading: false
};

let switchMap = {};

switchMap[constants.LOGINSTART] = (state) => {

};

switchMap[constants.LOGINSUCCESS] = (state) => {
  return Object.assign({}, state, {
    isLogin: true,
    isLoading: false
  });

};

switchMap[constants.LOGINFAIL] = (state) => {
  return Object.assign({}, state, {
    isLogin: true,
    isLoading: false
  });
};

switchMap[constants.LOGOUT] = (state) => {
  return Object.assign({}, state, {
    isLogin: false
  });
};

export function AuthReducer(state = initialState, action) {
  if (switchMap[action.type]) {
    return switchMap[action.type](state);
  } else{
    return state;
  }
}
