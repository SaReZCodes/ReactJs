import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "bootstrap/dist/css/bootstrap.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, bindActionCreators, createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from "./reducers";

const localReducer = (state = { value: 50 }, action) => {
    if (action.type === "Add") {
        const newValue = state.value + action.payment.price;
        console.log(`state current value is :${newValue}`);
        state.value = newValue;
    } else {
        console.log(`state first value is :${state.value}`);
    }
    return state;
}


//MIDDLEWARE
const logger = ({ getState }) => {
    return next => action => {
        console.log(
            'MIDDLEWARE',
            getState(),
            action
        );
        const value = next(action);
        console.log({ value });
        return value;
    }
}

const store = createStore(localReducer, applyMiddleware(logger));
setTimeout(() => {
    store.dispatch({ type: "Add", payment: { price: 100 } });
    const currentState = store.getState();
    console.log(currentState);
}, 5000);

//use bindActionCreators
const createUpdateAction = price => {
    return { type: "Add", payment: { price: price } };
}
//Method 1
store.dispatch(createUpdateAction(5));
store.dispatch(createUpdateAction(10));
//Method 2
const dispatchs = bindActionCreators(createUpdateAction, store.dispatch);
dispatchs(20);
dispatchs(40);
//Method 3
const globalStore = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={globalStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
