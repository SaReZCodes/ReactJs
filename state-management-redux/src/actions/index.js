import * as types from "../constants/ActionTypes";


export const incrementValue = () => ({ type: types.Increment });
export const decrementValue = () => ({ type: types.Decrement });
export const resetValue = () => ({ type: types.Reset });