import React, { Component } from 'react';
import Home from './homeComponent.jsx';
import About from './aboutComponent.jsx';
import Header from './headerComponent.jsx';
import Footer from './footerComponent.jsx';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import Login from './customer/loginComponent.jsx';
import Register from './customer/registrationComponent.jsx';
import VendorReg from './vendor/VendorRegComponent.jsx';
import ContactUs from './ContactComponent.jsx';
import { registerVendor, loadVendor, loginVendor, logoutVendor, fetchShops, postShop, deleteShop, putShop } from '../redux/actionCreator';
import VendorProfile from './vendor/privateRoutes/VendorProfile.jsx';
import EditStock from './vendor/privateRoutes/editStock.jsx';
import EditInfo from './vendor/privateRoutes/editInfo.jsx';
import EditShop from './vendor/privateRoutes/editShop.jsx';
import PrivateRoute from '../privateRoute'
import Alerts from './alertComponent.jsx';

const mapStateToProps = (state) => {
    return{
        shops: state.shops,
        auth: state.auth,
        errors: state.errors,
        message: state.message
    }
}


const mapDispatchToProps = (dispatch) => ({
    registerVendor: (vendor) => dispatch(registerVendor(vendor)),
    fetchShops: () => dispatch(fetchShops()),
    postShop: (shop) => dispatch(postShop(shop)),
    loadVendor: () => dispatch(loadVendor()),
    loginVendor: (username, password) => dispatch(loginVendor(username, password)),
    logoutVendor: () => dispatch(logoutVendor()),
    deleteShop: (id) => dispatch(deleteShop(id)),
    putShop: (id, shop) => dispatch(putShop(id, shop))
})

class Main extends Component {
  componentDidMount(){
    this.props.fetchShops()
    this.props.loadVendor()
  }
    render() { 
        return (           
            <React.Fragment>
                <Header auth={this.props.auth} logoutVendor={this.props.logoutVendor}/>
                <Alerts errors={this.props.errors} message={this.props.message}/>
                <Switch>
                    <Route exact path="/home" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/contact" component={ContactUs}/>
                    <Route path="/vendorregistration" component={() => <VendorReg registerVendor={this.props.registerVendor} 
                    loginVendor={this.props.loginVendor} auth={this.props.auth}/>}/>
                    <PrivateRoute path="/vendor-profile" component={VendorProfile} auth={this.props.auth} />
                    <PrivateRoute path="/edit-stock" component={EditStock} auth={this.props.auth}/>
                    <PrivateRoute path="/edit-info" component={EditInfo} auth={this.props.auth}/>
                    <PrivateRoute path="/edit-shop" component={EditShop} auth={this.props.auth} shops={this.props.shops.shops} fetchShops={this.props.fetchShops} putShop={this.props.putShop} postShop={this.props.postShop} deleteShop={this.props.deleteShop}/>
                    <Redirect to="/home"/>
                </Switch>
                <Footer/>
            </React.Fragment>
        );
    }
}
 
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));