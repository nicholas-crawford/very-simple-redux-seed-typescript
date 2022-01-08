import {Action} from 'redux';

const initialState = { active: false };

export const activeReducer = (state = initialState, action: Action<string>) => {
    switch (action.type) {
        case 'ACTIVATE':
            return { ...state, active: true}
        case 'DEACTIVATE':
            return { ...state, active: false}
        default:
            return state;
    }
};