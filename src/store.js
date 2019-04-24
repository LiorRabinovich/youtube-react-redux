import { createStore, combineReducers } from 'redux'

import sitesReducer from './reducers/sitesReducer';
import usersReducer from './reducers/usersReducer';

const store = createStore(
    combineReducers({
        sitesReducer,
        usersReducer
    })
)

export default store;