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

export function getAccounts() {
  return dispatch =>
    fetch(`${config.baseUrl}/accounts`, {
      method: 'get',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `session-token ${Store.getState().Auth.session.token}`
      }
    }).then(res => res.json()).then(res => {
      dispatch(getAccountsSuccess(res));
      return res;
    }).catch(res => {
      dispatch(openMessage('error', res.error));
    });
}

export function getAccountsSuccess(data) {
  return {
    type: GET_ACCOUNTS_SUCCESS,
    payload: {
      data: data
    }
  }
}

export function getAccountsFail() {
  return {
    type: GET_ACCOUNTS_FAILURE
  }
}

export function createAccount() {

}

