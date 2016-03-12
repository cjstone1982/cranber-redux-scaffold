"use strict";

import * as constants from '../constants';

export function login(state = {isLogin: false}, action) {
  console.log(state);
  if (action.type === 'LOGIN') {
    return {isLogin: true};
  } else {
    return state;
  }
}
