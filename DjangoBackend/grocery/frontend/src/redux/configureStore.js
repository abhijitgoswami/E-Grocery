import { Vendors } from './vendors'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore( 
        combineReducers({
            vendors: Vendors
        }),applyMiddleware(thunk, logger)
    )
    return store
}

