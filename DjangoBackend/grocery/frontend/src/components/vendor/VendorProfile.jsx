import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Card, CardImg, CardTitle, CardBody } from 'reactstrap';

const VendorProfile = (props) => {
                    // <Card>
                    //     <CardTitle >{props.vendor.firstName}</CardTitle>
                    //     <CardBody>
                    //         <p>Address: {props.vendor.address}</p>
                    //         <p>Mobile: {props.vendor.Mobile}</p>
                    //         <p>Email: {props.vendor.Email}</p>
                    //         <p>Shops: shop1, shop2, shop3</p>
                    //     </CardBody>
                    // </Card>
    return (  
        <React.Fragment>
            <div style={{textAlign:"center"}} className="container">
                <h1>Welcome Vendor</h1>
            </div>

            <div className="container">
                <Button style={{float:"right"}} className="col-12 col-md-3 mr-5 mt-3">
                    <NavLink style={{color:"white"}} className="nav-link" to="/vendorregistration">Logout</NavLink>
                </Button>
            </div>

            <div className="container">
                <div className="row">
                    <Card>
                        <CardImg src={require("../Images/demoUser.jpg")} alt="profile"/>
                    </Card>
                    
                    <Card>
                        <CardTitle >Vendor naame</CardTitle>
                        <CardBody>
                            <p>Address: Rajosmita Cottage, 10/A K P Banerjee lane, konnagar</p>
                            <p>Mobile: 8409279455</p>
                            <p>Email: abhijeetgoswami@gmail.com</p>
                            <p>Shops: shop1, shop2, shop3</p>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="container">
                    <div className="row">
                        <Button className="col-12 col-md-3 mr-5 mt-3">
                            <NavLink style={{color:"white"}} className="nav-link" to="/edit-info">Edit info</NavLink>
                        </Button>
                        <Button className="col-12 col-md-3 mr-5 mt-3">
                            <NavLink style={{color:"white"}} className="nav-link" to="/edit-stock">Edit Stock</NavLink>
                        </Button>
                        <Button className="col-12 col-md-3 mr-5 mt-3">
                            <NavLink style={{color:"white"}} className="nav-link" to="/edit-shop">Add shop</NavLink>
                        </Button>
                    </div>
                </div>
        </React.Fragment>
    );
    
}
 
export default VendorProfile;