import * as actionTypes from './actionTypes'

export const Shops = (state = {
    shops: []
}, action) => {
    switch (action.type){
        case actionTypes.ADD_SHOPS:
            return{
                ...state,
                shops: action.payload
            }
        case actionTypes.EDIT_SHOP:
            return{
                ...state
            }
        case actionTypes.ADD_SHOP:
            return{
                ...state,
                shops: state.shops.concat(action.payload)
            }
        case actionTypes.DELETE_SHOP:
            return{
                ...state,
                shops: state.shops.filter(shop => shop.id != action.payload)
            }
        default:
            return state
    }
}