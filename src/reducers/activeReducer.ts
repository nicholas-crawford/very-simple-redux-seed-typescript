import {Action} from 'redux';
import {activate, deactivate} from "../actionCreators/actionCreators";

const initialState = { active: false };

export const activeReducer = (state = initialState, action: Action<string>) => {
    switch (action.type) {
        case activate:
            return { ...state, active: true}
        case deactivate:
            return { ...state, active: false}
        default:
            return state;
    }
};