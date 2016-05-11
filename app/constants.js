'use strict';

import keyMirror from 'fbjs/lib/keyMirror';

export default keyMirror({
  //Auth Actions
  STORESESSION: null,
  FLUSHSESSION: null,
  //LOGIN Actions
  LOGINSTART: null,
  LOGINSUCCESS: null,
  LOGINFAIL: null,
  LOGOUT: null,
  //Message Actions
  OpenMessage: null,
  CloseMessage: null,
  //accounts
  GETACCOUNTSSTART: null,
  GETACCOUNTSSCUUESS: null,
  GETACCOUNTSFAIL: null,
  //orders
  GETORDERSSTART: null,
  GETORDERSSUCCESS: null,
  GETORDERSFAIL: null
});

