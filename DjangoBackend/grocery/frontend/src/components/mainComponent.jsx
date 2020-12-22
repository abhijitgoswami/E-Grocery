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
import { fetchVendors, postVendor, fetchShops, postShop } from '../redux/actionCreator';
import VendorList from './vendor/vendorList.jsx';
import VendorProfile from './vendor/VendorProfile.jsx';
import EditStock from './vendor/editStock.jsx';
import EditInfo from './vendor/editInfo.jsx';
import EditShop from './vendor/editShop.jsx';

const mapStateToProps = (state) => {
    return{
        vendors: state.vendors,
        shops: state.shops
    }
}

const mapDispatchToProps = (dispatch) => ({
    postVendor: (vendor) => dispatch(postVendor(vendor)),
    fetchVendors: () => dispatch(fetchVendors()),
    fetchShops: () => dispatch(fetchShops()),
    postShop: (shop) => dispatch(postShop(shop))
})

class Main extends Component {
  componentDidMount(){
    this.props.fetchVendors()
  }
    render() { 
        return (           
            <React.Fragment>
                <Header/>
                <Switch>
                    <Route exact path="/home" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/contact" component={ContactUs}/>
                    <Route path="/vendorregistration" component={() => <VendorReg postVendor={this.props.postVendor} 
                    vendors={this.props.vendors.vendors}/>}/>
                    <Route path="/vendor-profile" component={VendorProfile}/>
                    <Route path="/edit-stock" component={EditStock}/>
                    <Route path="/edit-info" component={EditInfo}/>
                    <Route path="/edit-shop" component={() => <EditShop shops={this.props.shops.shops} postShop={this.props.postShop}/>}/>
                    <Route path="/api/vendors" component={() => <VendorList vendors={this.props.vendors.vendors}/>}/>
                    <Redirect to="/home"/>
                </Switch>
                <Footer/>
            </React.Fragment>
        );
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Main);

