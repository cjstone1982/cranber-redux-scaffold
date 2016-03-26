"use strict";

import fetch from 'isomorphic-fetch';
import {
  LOGINSTART,
  LOGOUT,
  LOGINFAIL,
  LOGINSUCCESS
} from '../constants';

//thunk action creator
export function loginStartAction(username, password) {
  return dispatch => {
    dispatch({
      type: LOGINSTART
    });

    return fetch('/mock/login_success.json')
      .then(res => {
        setTimeout(() => {
          dispatch(loginSuccessAction(res));
        }, 1500);
      })
      .catch(res => {
        dispatch(loginFailAction(res));
      });
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
