'use strict';

import {
  OpenMessage,
  CloseMessage
} from '../constants';

export function OpenMessageAction(method = 'message', type = 'info', content = '') {
  console.log(arguments);
  return {
    type: OpenMessage,
    payload: {
      show: true,
      type: type,
      content: content,
      method: method.toLowerCase()
    }
  }
}

export function CloseMessageAction () {
  return {
    type: CloseMessage
  }
}
