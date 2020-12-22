import * as actionTypes from './actionTypes'
import {baseUrl} from '../Shared/baseUrl'
import axios from 'axios'

export const addVendor = (vendor) => ({
    type: actionTypes.ADD_VENDOR,
    payload: {
        ...vendor,
        id: Date.now()
    }
})

export const fetchVendors = () => (dispatch) => {
    dispatch(vendorsLoading(true))

    axios.get('/api/vendors')
    .then(res => {
        dispatch({
            type: actionTypes.ADD_VENDORS,
            payload: res.data
        })
    })
    .catch(err => console.log(err))

    // return fetch(baseUrl + '/api/vendors/')
    //     .then(response => response.json())
    //     .then(vendors => dispatch(addVendors(vendors)))
}

export const postVendor = (vendor) => (dispatch) => {
    return fetch(baseUrl + 'vendors', {
        method: 'POST',
        body: JSON.stringify(vendor),
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
        .then(response => dispatch(addVendor(response)));
}

export const vendorsLoading = () => ({
    type: actionTypes.VENDOR_LOADING
})

export const vendorsFailed = (errMsg) => ({
    type: actionTypes.VENDOR_FAILED,
    payload: errMsg
})

export const addVendors = (vendors) => ({
    type: actionTypes.ADD_VENDORS,
    payload: vendors
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