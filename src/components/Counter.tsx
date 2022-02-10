import React, {Dispatch} from 'react';
import {connect} from 'react-redux';
import PayloadAction from "../types/payloadAction";
import handleActiveState from "../types/handleActiveState";
import handleCount from "../types/handleCount";
import pokemon from "../types/pokemon";
import {Action} from "redux";
import {
    activeAction,
    activeDeactivate,
    callPokeApi,
    handleDecrease,
    handleIncrement,
    incrementBy7In3Seconds
} from "../actionCreators/actionCreators";


interface CounterProps {
    count: number;
    active: boolean;
    pokemon: pokemon;
    handleIncrementCount: handleCount
    handleDecreaseCount: handleCount
    handleChangeActive: handleActiveState
    handleChangeDeactivate: handleActiveState
    incrementBy7In3Seconds: () => void
    setPokemon: () => void
}

const Counter = (props: CounterProps) => (
    <div>
        <div>Current count: {props.count}</div>
        <button onClick={() => props.handleIncrementCount(1)}>Increment</button>
        <button onClick={() => props.handleIncrementCount(5)}>Increment 5</button>
        <button onClick={() => props.handleDecreaseCount(1)}>Decrease</button>
        <button onClick={() => props.handleDecreaseCount(5)}>Decrease 5</button>
        <div>Active: {String(props.active)}</div>
        <button onClick={props.handleChangeActive}>Activate</button>
        <button onClick={props.handleChangeDeactivate}>Deactivate</button>
        <button onClick={() => setTimeout(() => alert('hi'), 3000)}> alert in 3 seconds</button>
        <button onClick={props.incrementBy7In3Seconds}> increment 7 in 3 seconds</button>
        <button onClick={props.setPokemon}>Set Pokemon</button>
        <div>Pokemon: {String(props.pokemon.name)}</div>
        <img src={props.pokemon.sprites.front_default} alt='Pokemon Preview'/>
    </div>
);

interface StoreState {
    counter: {
        count: number,
    }
    active: {
        active: boolean,
    }
    pokemon: {
        pokemon: pokemon,
    }
}

/*
const mapStateToProps = (state: StoreState) ={
    count: state.count
});
*/

/*const mapDispatchToProps = (dispatch: Dispatch<Action<string>>) => ({
    onClick: (actionType: string) => dispatch({
        type: actionType
    })
});*/

function mapStateToProps(state: StoreState) {
    return {
        count: state.counter.count,
        active: state.active.active,
        pokemon: state.pokemon.pokemon
    };
}

function mapDispatchToProps(dispatch: Dispatch<PayloadAction | Action<string> | any>) {
    return {
        handleIncrementCount: (amount: number) => dispatch(handleIncrement(amount)),
        handleDecreaseCount: (amount: number) => dispatch(handleDecrease(amount)),
        handleChangeActive: () => dispatch(activeAction()),
        handleChangeDeactivate: () => dispatch(activeDeactivate()),
        incrementBy7In3Seconds: () => dispatch(incrementBy7In3Seconds),
        setPokemon: () => dispatch(callPokeApi)
    };
}

export const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);
// function currying
