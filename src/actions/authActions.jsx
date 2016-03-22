"use strict";

import fetch from 'isomorphic-fetch';
import {
  LOGINSTART,
  LOGOUT,
  LOGINFAIL,
  LOGINSUCCESS
} from '../constants';

export function loginStartAction(username, password) {
  return {
    type: LOGINSTART,
    user: {
      username: username,
      password: password
    }
  }
}

export function loginSuccessAction(res) {
  return {
    type: LOGINSUCCESS,
    response: res
  }
}

export function loginFailAction(error) {
  return {
    type: LOGINFAIL,
    error: error
  }
}


export function logoutAction() {
  return {
    type: LOGOUT
  }
}
