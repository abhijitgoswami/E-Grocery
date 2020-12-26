import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, auth, shops, fetchShops, putShop, postShop, deleteShop, ...rest }) => (
        <Route
        {...rest}
        render={props => {
            if(auth.isLoading){
                return <h1> is loading.....</h1>
            }
            else if(!auth.isAuthenticated){
                return <Redirect to="/vendorregistration"/>
            }
            else{
                return <Component {...props} auth={auth} shops={shops} fetchShops={fetchShops} putShop={putShop} postShop={postShop} deleteShop={deleteShop}/>
            }
        }}
        />
    )

export default PrivateRoute;