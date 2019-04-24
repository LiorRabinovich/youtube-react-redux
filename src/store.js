import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import sitesReducer from './reducers/sitesReducer';
import usersReducer from './reducers/usersReducer';

const store = createStore(
    combineReducers({
        sitesReducer,
        usersReducer
    }),
    {},
    applyMiddleware(thunk)
)

export default store;