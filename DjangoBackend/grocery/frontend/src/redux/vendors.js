import * as actionTypes from './actionTypes'

export const Vendors = (state = {
    isLoading: true,
    errMsg: null,
    vendors: []
}, action) => {
    switch (action.type){
        case actionTypes.ADD_VENDOR:
            var vendor = action.payload
            return{
                ...state,
                vendors: state.vendors.concat(vendor) 
            }
        
        case actionTypes.VENDOR_LOADING:
            return{
                ...state,
                isLoading: true,
                errMsg: null,
                vendors: []
            }
        case actionTypes.VENDOR_FAILED:
            return{
                ...state,
                isLoading: false,
                errMsg: action.payload,
                vendors: []
            }
        case actionTypes.ADD_VENDORS:
            return{
                ...state,
                isLoading: false,
                errMsg: null,
                vendors: action.payload
            }
        default:
            return state
    }
}