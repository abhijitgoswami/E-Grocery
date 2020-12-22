import React, { Component } from 'react';
import {Button, Label, Col, Row} from 'reactstrap';
import { Control, Errors, LocalForm } from 'react-redux-form';
import '../styles/register.css';
import Login from './loginComponent';

const required = (val) => val && val.length;
// const maxLength = (len) => (val) => !(val) || (val.length <= len);
// const minLength = (len) => (val) => (val) && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => val && /^[A-Z0-9.%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Register extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(values) {
        alert('Current State is: ' + JSON.stringify(values));
    }

    render() { 
        return (     
            <React.Fragment>
                <div id="register-box" className="container col-12 col-md-9">
                    <div style={{textAlign:"center", marginBottom:50, marginTop:20}} className="container">
                        <h3>Register</h3>
                    </div>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}> 
                        <Row className="form-group">
                            <Label  htmlFor="fname" md={2}>First Name*</Label>
                            <Col md={9}>
                                <Control.text model=".fname" id="fname" name="fname" placeholder="First Name" 
                                className="form-control" 
                                validators={{required}}/>
                                <Errors className="text-danger" model=".fname" show="touched" 
                                messages={{
                                    required: "*Required"
                                }}/>
                            </Col>
                        </Row> 

                        <Row className="form-group">
                            <Label htmlFor="lname" md={2}>Last Name*</Label>
                            <Col md={9}>
                                <Control.text model=".lname" id="lname" name="lname" placeholder="Last Name"
                                className="form-control" validators={{required}}/>      
                                <Errors className="text-danger" model=".lname" show="touched" 
                                messages={{
                                    required: "*Required"
                                }}/>        
                            </Col>
                        </Row> 

                        <Row className="form-group">
                            <Label htmlFor="address" md={2}>Address*</Label>
                            <Col md={9}>
                                <Control.text model=".address" id="address" name="address" placeholder="Address" 
                                className="form-control" validators={{required}}/>
                                <Errors className="text-danger" model=".address" show="touched" 
                                messages={{
                                    required: "*Required"
                                }}/>
                            </Col>
                        </Row>

                        <Row className="form-group">
                            <Label htmlFor="mob" md={2}>Mobile*</Label>
                            <Col md={9}>
                                <Control.text model=".mob" id="mob" name="mob" placeholder="Mobile" 
                                className="form-control" validators={{required, isNumber}}/>
                                <Errors className="text-danger" model=".mob" show="touched" 
                                messages={{
                                    required: "*Required ",
                                    isNumber: "Should be numbers"
                                }}/>
                            </Col>
                        </Row>

                        <Row className="form-group">
                            <Label htmlFor="email" md={2}>Email</Label>
                            <Col md={9}>
                                <Control.text model=".email" id="email" name="email" placeholder="Email"
                                className="form-control" validators={{validEmail}}/> 
                                <Errors className="text-danger" model=".email" show="touched" 
                                messages={{
                                    validEmail: "Invalid email"
                                }}/>
                            </Col>
                        </Row>

                        <Row className="form-group">
                            <Label htmlFor="password" md={2}>Password*</Label>
                            <Col md={9}>
                                <Control.password model=".password" id="password" name="password" placeholder="Password" 
                                className="form-control" validators={{required}}/>          
                                <Errors className="text-danger" model=".password" show="touched" 
                                messages={{
                                    required: "*Required "
                                }}/>    
                            </Col>
                        </Row>

                        <Row className="form-group">
                            <Label htmlFor="cnfpassword" md={2}>Confirm password*</Label>
                            <Col md={9}>
                                <Control.password model=".cnfpassword" id="cnfpassword" name="cnfpassword" 
                                placeholder="Confirm password" className="form-control" validators={{required}}/>
                                <Errors className="text-danger" model=".cnfpassword" show="touched" 
                                messages={{
                                    required: "*Required "
                                }}/>              
                            </Col>
                        </Row>

                        <Row className="form-group">
                            <Col id="reg-button" style={{textAlign: "center"}} md={{size: 4, offset:4}}>
                                <Button type="submit"  color="primary" >Register</Button>
                            </Col>
                        </Row>  
                    </LocalForm>
                    
                    <div id="reg-footer">
                        <Row style={{textAlign:"center"}}>
                            <Col md={{size: 8, offset: 2}}>
                                <strong>Already have account ?</strong>
                            </Col>
                        </Row>
                        <Col md={{size: 4, offset: 4}} style={{textAlign:"center"}}>
                            <Login/>
                        </Col>
                    </div>
                </div> 
            </React.Fragment>
        );
    }
}
 
export default Register;