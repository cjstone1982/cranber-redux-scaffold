import fetch from 'isomorphic-fetch';
import config from '../config/app';
import {openMessageAction} from '../actions/message.action';
import {setAuthAction} from '../actions/auth.action';
import {
  LOGIN,
  LOGIN_FAILURE,
  LOGIN_SUCCESS
} from '../constants/actions';

export function loginStartAction(username, password) {
  return dispatch => {
    return fetch(`${config.baseUrl}/login`, {
      method: 'get',
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json()).then(res => {
      dispatch(setAuthAction(res));
      dispatch(openMessageAction('success', '登录成功'));
    }).catch(res => {
      dispatch(openMessageAction('error', res.error));
    });
  }
}

function loginSuccessAction() {
  return {
    type: LOGIN_SUCCESS
  };
}

function loginFailedAction() {
  return {
    type: LOGIN_FAILURE
  };
}
