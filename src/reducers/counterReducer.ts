import payloadAction from "../types/payloadAction";
import {decrease, increment} from "../actionCreators/actionCreators";

const initialState = { count: 0 };

export const counterReducer = (state = initialState, action: payloadAction) => {
  switch (action.type) {
    case increment:
      return {...state, count: state.count + action.payload};
    case decrease:
      return {...state, count: state.count - action.payload};
    default:
      return state;
  }
};
