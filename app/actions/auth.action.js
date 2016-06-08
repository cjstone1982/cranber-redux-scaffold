"use strict";

import fetch from 'isomorphic-fetch';
import config from '../config/app';
import {
  LOGIN,
  LOGOUT,
  LOGIN_FAILURE,
  LOGIN_SUCCESS
} from '../constants/actions';
import {openMessage} from '../actions/message.action';

export function loginStartAction(username, password) {
  return dispatch => {
    return fetch(`${config.baseUrl}/login`, {
      method: 'get',
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json()).then(res => {
      window.localStorage.setItem('session', res.sessionToken);

      dispatch(openMessage('success', '登录成功'));
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          token: res.sessionToken
        }
      });
    }).catch(res => {
      dispatch(openMessage('error', res.error));
      dispatch({
        type: LOGIN_FAILURE
      });
    });
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
