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
    (async () => {
      try {
        let response = await fetch(`${config.baseUrl}/login`, {
          method: 'get',
          headers: {
            "Content-Type": "application/json"
          }
        });
        let data = await response.json();
        if (response.status === 200) {
          dispatch(setAuthAction(data));
          dispatch(openMessageAction('success', '登录成功'));
        } else {
          dispatch(openMessageAction('error', data.error));
        }
      } catch (e) {
        console.error('Fetch error:', e);
      }
    })();
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
