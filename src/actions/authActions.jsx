"use strict";

import { LOGIN, LOGOUT } from '../constants';

export function loginAction(username, passwd) {
  return {
    type: LOGIN,
    user: {
      username: username,
      password: passwd
    }
  }
}

export function logoutAction() {
  return {
    type: LOGOUT
  }
}
