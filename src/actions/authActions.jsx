"use strict";

import fetch from 'isomorphic-fetch';
import config from '../config/app';
import {
  LOGINSTART,
  LOGOUT,
  LOGINFAIL,
  LOGINSUCCESS
} from '../constants';
import {OpenMessageAction} from './messageActions';

//thunk action creator
export function loginStartAction(username, password) {
  return dispatch => {
    return fetch(`${config.base_url}/login.json`, {
      method: 'get',
      headers: {
        "Content-Type": "application/json"
      }
      // body: `{"mobileNumber":${username},"password":"${password}"}`
    }).then(res => res.json()).then(res => {
      window.localStorage.setItem('session', res.sessionToken);
      dispatch(OpenMessageAction('message', 'success', '登录成功'));
      dispatch(loginSuccessAction(res));
    }).catch(res => {
      console.log(res);
      dispatch(OpenMessageAction('message', 'error', res.error));
      dispatch(loginFailAction());
    });
  }
}

export function loginSuccessAction(res) {
  return {
    type: LOGINSUCCESS,
    payload: {
      token: res.sessionToken
    }
  }
}

export function loginFailAction() {
  return {
    type: LOGINFAIL
  }
}

export function logoutAction() {
  return {
    type: LOGOUT
  }
}


export function FlushSession() {
  return dispatch => {
    window.localStorage.removeItem('session');
  }
}
