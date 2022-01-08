import React from 'react';
import {render} from 'react-dom';
import {createStore} from "redux";
import {counterReducer} from "./reducers/counterReducer";
import {Provider} from "react-redux";
import {CounterContainer} from "./components/Counter";

const store = createStore(counterReducer,
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
    <Provider store={store}>
        <CounterContainer/>
    </Provider>,
    document.getElementById('root')
);
