import React, { Component } from 'react';
import {Button, Label, Col, Row} from 'reactstrap';
import {NavLink} from 'react-router-dom';
import { Control, Errors, LocalForm } from 'react-redux-form';
import VendorLogin from './vendorLogin.jsx';

const required = (val) => val && val.length;
// const maxLength = (len) => (val) => !(val) || (val.length <= len);
// const minLength = (len) => (val) => (val) && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
// const validEmail = (val) => /^[A-Z0-9.%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class VendorReg extends Component {
    constructor(props){
        super(props);
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    

    handleSubmit(values){

        const isNewVendor = this.props.vendors.filter((vendor) => vendor.Email === values.Email)
        
        if(!isNewVendor.length){
            this.props.postVendor(values)
            alert("Registration sucessfull!")
        }
        else{
            alert("Already registered!")
        }
    }

    render() { 
        return (  
            <React.Fragment>
                <div id="register-box" className="container col-12 col-md-9">
                    <div style={{textAlign:"center", marginBottom:50, marginTop:20}} className="container">
                        <h3>Partner with us</h3>
                    </div>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}> 
                        <Row className="form-group">
                            <Label  htmlFor="firstName" md={2}>First Name*</Label>
                            <Col md={9}>
                                <Control.text model=".firstName" id="firstName" name="firstName" placeholder="First Name" 
                                className="form-control"
                                validators={{required}}/>
                                <Errors className="text-danger" model=".firstName" show="touched"
                                messages={{
                                    required: 'Required! '
                                }}/>
                            </Col>
                        </Row> 

                        <Row className="form-group">
                            <Label htmlFor="lastName" md={2}>Last Name*</Label>
                            <Col md={9}>
                                <Control.text model=".lastName" id="lastName" name="lastName" placeholder="Last Name"
                                className="form-control"
                                validators={{required}}/>
                                <Errors className="text-danger" model=".lastName" show="touched"
                                messages={{
                                    required: 'Required! '
                                }}/>              
                            </Col>
                        </Row> 

                        <Row className="form-group">
                            <Label htmlFor="address" md={2}>Address*</Label>
                            <Col md={9}>
                                <Control.text model=".address" id="address" name="address" placeholder="address" 
                                className="form-control"
                                validators={{required}}/>
                                <Errors className="text-danger" model=".address" show="touched"
                                messages={{
                                    required: 'Required! '
                                }}/>
                            </Col>
                        </Row>

                        <Row className="form-group">
                            <Label htmlFor="Mobile" md={2}>Mobile*</Label>
                            <Col md={9}>
                                <Control.text model=".Mobile" id="Mobile" name="Mobile" placeholder="Mobile" 
                                className="form-control"
                                validators={{required, isNumber}}/>
                                <Errors className="text-danger" model=".Mobile" show="touched"
                                messages={{
                                    required: 'Required! ',
                                    isNumber: 'Should be number'
                                }}/>
                            </Col>
                        </Row>

                        <Row className="form-group">
                            <Label htmlFor="Email" md={2}>Email</Label>
                            <Col md={9}>
                                <Control.text model=".Email" id="Email" name="Email" placeholder="Email"
                                className="form-control"
                                validators={{required}}/>
                                <Errors className="text-danger" model=".Email" show="touched"
                                messages={{
                                    required: 'Required! '
                                }}/> 
                            </Col>
                        </Row>

                        <Row className="form-group">
                            <Label htmlFor="password" md={2}>Password*</Label>
                            <Col md={9}>
                                <Control.password model=".password" id="password" name="password" placeholder="Password" 
                                className="form-control"
                                validators={{required}}/>
                                <Errors className="text-danger" model=".password" show="touched"
                                messages={{
                                    required: 'Required! '
                                }}/>              
                            </Col>
                        </Row>

                        <Row className="form-group">
                            <Label htmlFor="cnfpassword" md={2}>Confirm password*</Label>
                            <Col md={9}>
                                <Control.password model=".cnfpassword" id="cnfpassword" name="cnfpassword" placeholder="Confirm password" 
                                className="form-control"
                                validators={{required}}/>
                                <Errors className="text-danger" model=".cnfpassword" show="touched"
                                messages={{
                                    required: 'Required! '
                                }}/>              
                            </Col>
                        </Row>

                        <Row className="form-group">
                            <Col id="reg-button" style={{textAlign: "center"}} md={{size: 4, offset:4}}>
                                <Button type="submit"  color="primary">Register</Button>
                            </Col>
                        </Row>  
                    </LocalForm>
                    
                    <div id="reg-footer">
                        <Row style={{textAlign:"center"}}>
                            <Col md={{size: 8, offset: 2}}>
                                <strong>Already a member ?</strong>
                            </Col>
                        </Row>

                        <Col md={{size: 4, offset: 4}} style={{textAlign:"center"}}>
                            <VendorLogin vendors={this.props.vendors}/>
                        </Col>
                    </div>
                    <NavLink to="/api/vendors">Vendors</NavLink>
                    <NavLink to="/vendor-profile">Vendor Profile</NavLink>
                </div>
            </React.Fragment>
        );
    }
}
 
export default VendorReg;
