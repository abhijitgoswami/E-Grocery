import * as actionTypes from './actionTypes'

export const Shops = (state = {
    isLoading: true,
    errMsg: null,
    shops: []
}, action) => {
    switch (action.type){
        case actionTypes.ADD_SHOP:
            return{
                ...state,
                isLoading: true,
                errMsg: null,
                shops: state.shops.concat(action.payload)
            }

        case actionTypes.SHOP_LOADING:
            return{
                ...state,
                isLoading: true,
                errMsg: null,
                shops: []
            }

        case actionTypes.SHOP_FAILED:
            return{
                ...state,
                isLoading: false,
                errMsg: action.payload,
                shops: []
            }

        case actionTypes.ADD_SHOPS:
            return{
                ...state,
                isLoading: false,
                errMsg: null,
                shops: action.payload
            }

        default:
            return state
    }
}