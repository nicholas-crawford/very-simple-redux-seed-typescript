import {Action} from "redux";

const initialState = { count: 0 };

export const counterReducer = (state = initialState, action: Action<string>) => {
  switch (action.type) {
    case 'INCREMENT':
      return {...state, count: state.count + 1};
    case 'DECREASE':
      return {...state, count: state.count - 1};
    default:
      return state;
  }
};
