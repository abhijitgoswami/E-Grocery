import * as actionTypes from './actionTypes'
import {baseUrl} from '../Shared/baseUrl'
import axios from 'axios'

// Get vendors.......................
export const fetchVendors = () => (dispatch) => {
    dispatch(vendorsLoading(true))

    axios.get('/api/vendors')
    .then(response => {
        dispatch(addVendors(response.data))
    })
    .catch(err => console.log(err))
}

export const addVendors = (vendors) => ({
    type: actionTypes.ADD_VENDORS,
    payload: vendors
})

export const vendorsLoading = () => ({
    type: actionTypes.VENDOR_LOADING
})

export const vendorsFailed = (errMsg) => ({
    type: actionTypes.VENDOR_FAILED,
    payload: errMsg
})

//Put vendor...................
export const putVendor = (vendor) => (dispatch) => {
    axios.put('/api/vendors/', vendor)
    .then(response => {
        dispatch({
            type: actionTypes.EDIT_VENDOR,
            payload: response.data
        })
    })
    .catch(err => console.log(err))
}

// Post vendor...............................
export const postVendor = (vendor) => (dispatch) => {
    axios.post('/api/vendors/', vendor)
    .then(response => {
        dispatch(addVendor(response.data))
    })
    .catch(err => console.log(err))
}

export const addVendor = (vendor) => ({
    type: actionTypes.ADD_VENDOR,
    payload: vendor
})

// Delete vendors.............................
export const deleteVendor = (id) => (dispatch) => {
    axios.delete(`/api/vendors/${id}`)
    .then(response => {
        dispatch(delVendor(response.data))
    })
    .catch(err => console.log(err))
}

export const delVendor = (vendor) => ({
    type: actionTypes.DELETE_VENDOR,
    payload: vendor
})



//-----------------------------------------------------------------
export const addShop = (shop) => ({
    type: actionTypes.ADD_SHOP,
    payload: shop
})

export const postShop = (shop) => (dispatch) => {
    let newShop = {
        ...shop,
        id: Date.now()
    }
    return fetch(baseUrl + 'shops', {
        method: 'POST',
        body: JSON.stringify(newShop),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
        .then(response => {
            if(response.ok){
                return response;
            }
            else{
                var error = new Error('Error ' + response.status)
                error.response = response
                throw error
            }
        },
        error => {
            let errMsg = new Error(error.message);
            throw errMsg
        })
        .then(response => response.json())
        .then(response => dispatch(addShop(response)));
}

export const fetchShops = () => (dispatch) => {
    dispatch(shopsLoading(true))

    return fetch(baseUrl + 'shops')
        .then(response => response.json())
        .then(shops => dispatch(addShops(shops)))
}

export const shopsLoading = () => ({
    type: actionTypes.SHOP_LOADING
})

export const shopsFailed = (errMsg) => ({
    type: actionTypes.SHOP_FAILED,
    payload: errMsg
})

export const addShops = (shops) => ({
    type: actionTypes.ADD_SHOPS,
    payload: shops
})