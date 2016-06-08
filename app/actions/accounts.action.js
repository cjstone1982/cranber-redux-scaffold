"use strict";

import fetch from 'isomorphic-fetch';
import config from '../config/app';
import {
  GET_ACCOUNTS,
  GET_ACCOUNTS_SUCCESS,
  GET_ACCOUNTS_FAILURE
} from '../constants/actions';
import {openMessage} from './message.action';
import Store from '../store';

export function getAccountsStartAction() {
  return dispatch =>
    fetch(`${config.baseUrl}/accounts`, {
      method: 'get',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `session-token ${Store.getState().Auth.session.token}`
      }
    }).then(res => res.json()).then(res => {
      dispatch(getAccountsSuccessAction(res));
    }).catch(res => {
      dispatch(openMessage('error', res.error));
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
