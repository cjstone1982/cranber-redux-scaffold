import {
  SET_AUTH,
  DESTORY_AUTH
} from '../constants/actions';
import {openMessageAction} from '../actions/message.action';

export function setAuthAction(authData) {
  window.localStorage.setItem('session', JSON.stringify(authData));

  return {
    type: SET_AUTH,
    payload: {
      token: authData.sessionToken,
      username: authData.username,
      role: authData.role
    }
  }
}

export function logoutAction() {
  return {
    type: DESTORY_AUTH
  }
}

export function FlushSession() {
  return dispatch => {
    window.localStorage.removeItem('session');
  }
}
