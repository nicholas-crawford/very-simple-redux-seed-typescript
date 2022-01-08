import React from 'react';
import {render} from 'react-dom';
import {createStore, combineReducers} from "redux";
import {counterReducer} from "./reducers/counterReducer";
import {activeReducer} from "./reducers/activeReducer";
import {Provider} from "react-redux";
import {CounterContainer} from "./components/Counter";

const store = createStore(
    combineReducers({counter: counterReducer, active: activeReducer}),
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
    <Provider store={store}>
        <CounterContainer/>
    </Provider>,
    document.getElementById('root')
);
