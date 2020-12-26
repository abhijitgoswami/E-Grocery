import * as actionTypes from './actionTypes'

export const Message = (state = {}, action) => {
    switch (action.type){
        case actionTypes.GET_SUCCESS_MSG:
            return action.payload
        case actionTypes.CREATE_SUCCESS_MSG:
            return(
                state = action.payload
            )
        default:
            return state
    }
}