//Actions
import {Dispatch} from "react";
import PayloadAction from "../types/payloadAction";
import {pokeReducer} from "../reducers/pokeReducer";

export const activate = 'ACTIVATE';
export const deactivate = 'DEACTIVATE';
export const increment = 'INCREMENT';
export const decrease = 'DECREASE';
export const setPokemon = 'SET_POKEMON';

enum ACTIVATION_ACTION_TYPE {
    activate = 'ACTIVATE',
    deactivate = 'DEACTIVATE'
}

// ActiveState
export const activeAction = () =>{ return {type: activate} }
export const activeDeactivate = () =>{ return {type: deactivate} }

// handleCount
export const handleIncrement = (amount: number) =>{ return {type: increment, payload: amount} }
export const handleDecrease = (amount: number) =>{ return {type: decrease, payload: amount} }

export const incrementBy7In3Seconds = (dispatch: Dispatch<PayloadAction>) => {
    setTimeout(() => dispatch(handleIncrement(7)), 3000)
}; // when you think thunk, think "dispatch sometime later"

export const callPokeApi = (dispatch: Dispatch<PayloadAction>) => {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then(response => response.json())
        .then(data => dispatch({
          type:   setPokemon,
          payload: data,
        }));

}
//return 'https://pokeapi.co/api/v2/pokemon/ditto'