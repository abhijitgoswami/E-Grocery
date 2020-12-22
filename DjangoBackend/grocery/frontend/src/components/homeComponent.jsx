import React, { Component } from 'react';
import {Card, CardTitle, CardBody, CardDeck, Button, Row} from 'reactstrap';
import {NavLink} from 'react-router-dom';
import { LocalForm, Control } from 'react-redux-form';

class Home extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values){
        alert("Current State is: " + JSON.stringify(values));
    }

    render() { 
        return (  
            <React.Fragment>          
                <div id="home-body" >                             
                    <CardDeck>              
                        <Card id="brand" className="col-lg-6 col-md-12 col-sm-12">   
                            <div id="logo">
                                <div id="navbrand" className="mr-auto">
                                    <NavLink to="/home">Brand Name</NavLink>
                                </div> 
                            
                                <div id="log-reg">
                                    <div className="float-left">
                                    <Button color="primary"  className="ml-2">
                                        <NavLink style={{color:"white", textDecoration:"none"}} to="/register">Login</NavLink>
                                    </Button>
                                    </div>
                                    <div className="float-left">
                                    <Button color="primary"  className="ml-2">
                                        <NavLink style={{color:"white", textDecoration:"none"}} to="/register">SIGN UP</NavLink>
                                    </Button>
                                    </div>
                                </div>  
                            </div>    

                            <div id="search-food">
                                <h3>Unexpected Guest?</h3>
                                <p>Order groceries from favourite grocery store near you!</p>
                                <LocalForm id="search" onSubmit={(values) => this.handleSubmit(values)}>
                                    <Row className="form-group">
                                        <Control.text type="search" model=".search"  className="form-control"/>
                                        <button>Find</button>
                                    </Row>
                                </LocalForm>
                            </div>                                                                                 
                        </Card>

                        <Card id="image" className="col-lg-6 col-md-12 col-sm-12">
                            <img src={'../static/images/groceries.jpg'} alt="img"/>
                        </Card>  
                    </CardDeck>               
                </div>                             
               
                <div id="home-middle" >
                    <CardDeck>
                        <Card >
                            <CardTitle>
                                <h3>No Minimum Order</h3>
                            </CardTitle>
                            <CardBody>
                                <p>Order in for yourself or for the group, with no restrictions on order value</p>
                            </CardBody>
                        </Card>
                        <Card >
                            <CardTitle>
                                <h3>Live Order Tracking</h3>
                            </CardTitle> 
                            <CardBody>
                                <p>Know where your order is at all times, from the restaurant to your doorstep</p>
                            </CardBody>
                        </Card>
                        <Card >
                            <CardTitle>
                                <h3>Fast Home Delivery</h3>
                            </CardTitle>
                            <CardBody>
                                <p>Experience Swiggy's superfast delivery for food delivered fresh &amp; on time</p>
                            </CardBody>
                            
                        </Card>
                    </CardDeck>
                </div>
            </React.Fragment>
                
            
        );
    }
}
 
export default Home;

// <Nav className="ml-auto" navbar>
//     <NavItem>
//         <Button outline onClick={this.toggleModal}>
//             <span className="fa fa-sign-in fa-lg"></span>Login
//         </Button>
//     </NavItem>
// </Nav>