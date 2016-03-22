"use strict";

import * as constants from '../constants';
import { hashHistory } from 'react-router';
let switchMap = {};

switchMap[constants.LOGINSTART] = () => {
  return {isLogin: true};
};

switchMap[constants.LOGINSUCCESS] = () => {
  return {isLogin: true};
};

switchMap[constants.LOGINFAIL] = () => {
  return {isLogin: true};
};

switchMap[constants.LOGOUT] = () => {
  return {isLogin: false};
};

export function AuthReducer(state = {isLogin: false}, action) {
  if (switchMap[action.type]) {
    return switchMap[action.type]();
  } else{
    return state;
  }
}
