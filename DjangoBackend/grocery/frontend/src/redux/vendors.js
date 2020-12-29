import * as actionTypes from './actionTypes'

export const Vendors = (state = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    isLoading: false,
    vendor: null
}, action) => {
    switch (action.type){
        case actionTypes.VENDOR_LOADING:
            return{
                ...state,
                isLoading: true
            }
        case actionTypes.VENDOR_LOADED:
            return{
                ...state,
                isLoading: false,
                isAuthenticated: true,
                vendor: action.payload
            }
        case actionTypes.AUTH_ERR:
        case actionTypes.VENDOR_LOGIN_FAIL:
        case actionTypes.VENDOR_REGISTER_FAIL:
        case actionTypes.VENDOR_LOGOUT:
            localStorage.removeItem('token')
            return{
                ...state,
                token: null,
                isLoading: false,
                isAuthenticated: false,
                vendor: null
            }
        case actionTypes.VENDOR_LOGIN:
        case actionTypes.VENDOR_REGISTER:
            localStorage.setItem('token', action.payload.token)
            return{
                ...state,
                ...action.payload,
                isLoading: false,
                isAuthenticated: true,
                vendor: action.payload.user
            }      
        default:
            return state
    }
}