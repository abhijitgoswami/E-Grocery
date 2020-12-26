import { Auth } from './authorization'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Shops } from './shops';
import { Errors } from './errors'
import { composeWithDevTools } from 'redux-devtools-extension';
import { Message } from './messages';

export const ConfigureStore = () => {
    const store = createStore( 
        combineReducers({
            shops: Shops,
            auth: Auth,
            errors: Errors,
            message: Message
        }),composeWithDevTools(applyMiddleware(thunk, logger))
    )
    return store
}

