import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

const initState = {
    siteName: 'Youtube React Redux'
}

const reducer = (state = initState, action) => {

    switch(action.type){
        case "CHANGE_SITE_NAME":
            state = {...state, siteName: action.payload}
        break;
        default:
        break;
    }

    return state;
}

const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
