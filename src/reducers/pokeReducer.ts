import payloadAction from "../types/payloadAction";
import {setPokemon} from "../actionCreators/actionCreators";

const initialState = {
  pokemon: {
    name: "",
    sprites: {
      front_default: {

      },
    },
  }};

export const pokeReducer = (state = initialState, action: payloadAction) => {
  switch (action.type) {
    case setPokemon:
      return {...state, pokemon: action.payload};
    default:
      return state;
  }
};
