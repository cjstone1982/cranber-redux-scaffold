import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from '../constants/actions';

const initialState = {
  isLogin: false,
  isLoading: false,
  session: {
    token: null
  }
};

let switchMap = {};

switchMap[LOGIN_SUCCESS] = (state, action) => {
    return Object.assign({}, state, {
    isLogin: true,
    isLoading: false,
    session: {
      token: action.payload.token
    }
  });
};

switchMap[LOGIN_FAILURE] = (state) => {
  return Object.assign({}, state, {
    isLogin: false,
    isLoading: false
  });
};

switchMap[LOGOUT] = (state) => {
  return Object.assign({}, state, {
    isLogin: false
  });
};

export default function Auth(state = initialState, action) {
  if (switchMap[action.type]) {
    return switchMap[action.type](state, action);
  } else{
    return state;
  }
}
