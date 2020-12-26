import * as actionTypes from './actionTypes'
import axios from 'axios'

//Register vendor.........
export const registerVendor = (vendor) => (dispatch) => {
    
    //Headers............
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    //request body........
    const body = JSON.stringify(vendor)

    axios.post('/api/auth/vendorregistration', body, config)
    .then(response => {
        dispatch({
            type: actionTypes.VENDOR_REGISTER,
            payload: response.data
        })
    })
    .catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status))
        dispatch({
            type: actionTypes.VENDOR_REGISTER_FAIL
        })
    })
}


//login of vendor.................................
export const loginVendor = (username, password) => (dispatch) => {
    //Headers............
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    //request body........
    const body = JSON.stringify({
        username: username, password: password
    })

    axios.post('/api/auth/vendorlogin', body, config)
    .then(response => {
        dispatch(createMessage({
            loginsuccessfull: 'Login Successfull!',
        }))
        dispatch({
            type: actionTypes.VENDOR_LOGIN,
            payload: response.data
        })
    })
    .catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status))
        dispatch({
            type: actionTypes.VENDOR_LOGIN_FAIL
        })
    })
}

//check token and load user.........................................
export const loadVendor = () => (dispatch, getstate) => {
    //vendor loading.....
    dispatch({
        type: actionTypes.VENDOR_LOADING
    })
    //Get token from state.........
    const token = getstate().auth.token

    //Headers............
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    //If token added to header........
    if(token){
        config.headers['Authorization'] = `Token ${token}`
    }

    axios.get('/api/auth/vendor', config)
    .then(response => {
        dispatch({
            type: actionTypes.VENDOR_LOADED,
            payload: response.data
        })
    })
    .catch(err => {
        //dispatch(returnErrors(err.response.data, err.response.status))
        dispatch({
            type: actionTypes.AUTH_ERR
        })
    })
}

//Logout of vendor...................................
export const logoutVendor = () => (dispatch, getstate) => {
    //Get token from state.........
    const token = getstate().auth.token

    //Headers............
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    //If token added to header........
    if(token){
        config.headers['Authorization'] = `Token ${token}`
    }

    axios.post('/api/auth/logout', null, config)
    .then(response => {
        console.log(response);
        dispatch(createMessage({
            logoutsuccessfull: 'Logout Successfull!',
        }))
        dispatch({
            type: actionTypes.VENDOR_LOGOUT
        })
    })
    .catch(err => {console.log(err);})
}

// Delete vendor(only by admin).............................
// export const deleteVendor = (id) => (dispatch) => {
//     axios.delete(`/api/vendors/${id}`)
//     .then(response => {
//         dispatch(delVendor(response.data))
//     })
//     .catch(err => console.log(err))
// }

// export const delVendor = (vendor) => ({
//     type: actionTypes.DELETE_VENDOR,
//     payload: vendor
// })



//-----------------------------------------------------------------

//Get shops............................
export const fetchShops = () => (dispatch) => {
    axios.get('/api/shops')
    .then(response => dispatch(addShops(response.data)))
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}
export const addShops = (shops) => ({
    type: actionTypes.ADD_SHOPS,
    payload: shops
})

//Edit shop............................
export const putShop = (id, shop) => (dispatch) => {
    //Headers............
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    //request body........
    const body = JSON.stringify(shop)
    axios.put(`/api/shops/${id}/`, body, config)
    .then(response => {
        dispatch(createMessage({
            shopedited: 'Shop Edited Successfully!',
        }))
        dispatch(editShop(response.data))
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}
export const editShop = () => ({
    type: actionTypes.EDIT_SHOP
})

//Add shop............................
export const postShop = (shop) => (dispatch) => {
    //Headers............
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    //request body........
    const body = JSON.stringify(shop)

    axios.post('/api/shops/', body, config)
    .then(response => {
        dispatch(createMessage({
            shopadded: 'Shop added!',
        }))
        dispatch(addShop(response.data))
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}
export const addShop = (shop) => ({
    type: actionTypes.ADD_SHOP,
    payload: shop
})

//delete shop..............
export const deleteShop = (id) => (dispatch) => {
    axios.delete(`/api/shops/${id}/`)
    .then(response => {
        dispatch(createMessage({
            shopdeleted: 'Shop deleted!',
        }))
        dispatch(delShop(id))
    })
    .catch(err => console.log(err))
}
export const delShop = (id) => ({
    type: actionTypes.DELETE_SHOP,
    payload: id
})


//Create success message................
export const createMessage = (msg) => {
    return{
        type: actionTypes.CREATE_SUCCESS_MSG,
        payload: msg
    }
}

//Return Errors.............
export const returnErrors = (msg, status) => {
    return{
        type: actionTypes.GET_ERRORS,
        payload: {msg, status}
    }
}