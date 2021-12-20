import * as types from "../constants/ActionTypes";

const initialState = {
  count: 0
};

export default function counterReducer(state = initialState, action) {
  if (action.type === types.Increment) {
    return {
      count: state.count + 1
    };
  } else if (action.type === types.Decrement) {
    return {
      count: state.count - 1
    };
  } else if (action.type === types.Reset) {
    return {
      count: 0
    };
  }
  return state;
}