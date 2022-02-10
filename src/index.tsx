import React from 'react';
import {render} from 'react-dom';
import {createStore, combineReducers, applyMiddleware} from "redux";
import {activeReducer} from "./reducers/activeReducer";
import {counterReducer} from "./reducers/counterReducer";
import {pokeReducer} from "./reducers/pokeReducer";
import {Provider} from "react-redux";
import {CounterContainer} from "./components/Counter";
import { composeWithDevTools } from "@redux-devtools/extension";
import logger from 'redux-logger'
import thunk from 'redux-thunk'


const store = createStore(
    combineReducers({counter: counterReducer, active: activeReducer, pokemon: pokeReducer}),
    composeWithDevTools(applyMiddleware(thunk, logger))
);

render(
    <Provider store={store}>
        <CounterContainer/>
    </Provider>,
    document.getElementById('root')
);
