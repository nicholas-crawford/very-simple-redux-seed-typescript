import React, {Dispatch} from 'react';
import {connect} from 'react-redux';
import {Action} from "redux";

interface CounterProps {
    count: number;
    active: boolean;
    onClick: (actionType: string) => void;
}

const Counter = (props: CounterProps) => (
  <div>
    <div>Current count: {props.count}</div>
    <button onClick={() => props.onClick('INCREMENT')}>Increment</button>
    <button onClick={() => props.onClick('DECREASE')}>Decrease</button>
      <div>Active: {String(props.active)}</div>
    <button onClick={() => props.onClick('ACTIVATE')}>Activate</button>
    <button onClick={() => props.onClick('DEACTIVATE')}>Deactivate</button>
  </div>
);

interface StoreState {
    counter: {
        count: number,
    }
    active: {
        active: boolean
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
        active: state.active.active
    };
}

function mapDispatchToProps(dispatch: Dispatch<Action<string>>) {
    return {
        onClick: (actionType: string) => dispatch({
            type: actionType
        })
    };
}

export const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);
// function currying
