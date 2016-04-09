'use strict';

import {
  OpenMessage,
  CloseMessage
} from '../constants';

const initialState = {
  method: 'message',
  content: 'hello world',
  type: 'error',
  show: false
};

let switchMap = {};

switchMap[OpenMessage] = (state, action) => {
  return Object.assign({}, state, {
    show: true,
    content: action.payload.content,
    method: action.payload.method,
    type: action.payload.type
  });
};

switchMap[CloseMessage] = (state) => {
  return Object.assign({}, state, {
    show: false
  });
};

export default function Message(state = initialState, action) {
  if (switchMap[action.type]) {
    return switchMap[action.type](state, action);
  } else {
    return state;
  }
}
