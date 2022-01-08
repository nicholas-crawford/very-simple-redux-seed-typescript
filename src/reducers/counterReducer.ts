import {Action} from "redux";

const initialState = { count: 0, active: false };

export const counterReducer = (state = initialState, action: Action<string>) => {
  switch (action.type) {
    case 'INCREMENT':
      return {...state, count: state.count + 1};
    case 'DECREASE':
      return {...state, count: state.count - 1};
    case 'ACTIVATE':
      return { ...state, active: true}
    case 'DEACTIVATE':
      return { ...state, active: false}
    default:
      return state;
  }
};
