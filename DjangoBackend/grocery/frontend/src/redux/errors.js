import * as actionTypes from './actionTypes'

export const Errors = (state = {
    msg: {},
    status: null
}, action) => {
    switch (action.type){
        case actionTypes.GET_ERRORS:
            return{
                msg: action.payload.msg,
                status: action.payload.status
            }
        default:
            return state
    }
}