const initialState = {
  loading: false
};
const switchMap = {};

export default (state = initialState, action) => {
  if (switchMap[action.type]) {
    return switchMap[action.type]();
  } else {
    return state;
  }
}
