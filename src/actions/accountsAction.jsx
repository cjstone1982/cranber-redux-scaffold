"use strict";

import fetch from 'isomorphic-fetch';
import config from '../config/app';
import {
  GETACCOUNTSSTART,
  GETACCOUNTSSCUUESS,
  GETACCOUNTSFAIL
} from '../constants';
import {OpenMessageAction} from './messageActions';
import Store from '../store';

export function getAccountsStartAction() {
  return dispatch =>
    fetch(`${config.base_url}/accounts.json`, {
      method: 'get',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `session-token ${Store.getState().Auth.session.token}`
      }
    }).then(res => res.json()).then(res => {
      dispatch(getAccountsSuccessAction(res));
    }).catch(res => {
      dispatch(OpenMessageAction('message', 'error', res.error));
    });
}

export function getAccountsSuccessAction(data) {
  return {
    type: GETACCOUNTSSCUUESS,
    payload: {
      data: data
    }
  }
}

export function getAccountsFailAction() {

}
