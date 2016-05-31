"use strict";

import fetch from 'isomorphic-fetch';
import config from '../config/app';
import {
  GETORDERSFAIL,
  GETORDERSSTART,
  GETORDERSSUCCESS
} from '../constants';
import {OpenMessageAction} from './message.action';
import Store from '../store';

export function getOrdersStartAction() {
  return dispatch =>
    fetch(`${config.baseUrl}/administration/orders`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `session-token ${Store.getState().Auth.session.token}`
      }
    }).then(res => res.json()).then(res => {
      dispatch(getOrdersSuccessAction(res));
    }).catch(res => {
      dispatch(OpenMessageAction('message', 'error', res.error));
    });
}

export function getOrdersSuccessAction(data) {
  return {
    type: GETORDERSSUCCESS,
    payload: {
      data: data
    }
  }
}
