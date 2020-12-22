import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Button, ListGroup, ListGroupItem, Modal, ModalBody, ModalHeader, Label, Col, Row } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;

class EditShop extends Component{
    constructor(props){
        super(props);

        this.state = {
            login: false,
            loggedInVendor: null,
            redirectToDashboard: false
        }

        this.tooglelogin = this.tooglelogin.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    tooglelogin(){
        this.setState({login: !this.state.login})
    }

    handleSubmit(values) {
        this.props.postShop(values)
    }

    render(){
        const shops = this.props.shops.map((shop) => {
            return(
                <ListGroupItem id="shop-list" key={shop.id}>
                    {shop.shopName}
                    <Link to={`/edit-shop/${shop.id}`}>
                        <Button color="primary" style={{float:"right"}} className="fa fa-trash"></Button>
                    </Link>
                    <Link to={`/edit-shop/${shop.id}`}>
                        <Button color="primary" style={{float:"right"}} className="fa fa-edit"></Button>
                    </Link>
                </ListGroupItem>
            )
        })
        return (  
            <div className="container">
                <h1>In Edit shop</h1>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to='/vendor-profile'>Dashboard</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>shop</BreadcrumbItem>
                </Breadcrumb>
                <ListGroup>
                    {shops}
                </ListGroup>

                <Button color="primary" onClick={this.tooglelogin}>Add new shop</Button>

                <Modal isOpen={this.state.login} toggle={this.tooglelogin}>
                    <ModalHeader toggle={this.tooglelogin}>Login</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}> 
                            <Row className="form-group">
                                <Label htmlFor="shopName" md={3}>Shop name</Label>
                                <Col md={8}>
                                    <Control.text model=".shopName" id="shopName" name="shopName" className="form-control" 
                                    validators={{required}}/>
                                    <Errors className="text-danger" model=".shopName" show="touched"
                                    messages={{
                                        required: 'Required! '
                                    }}/>
                                </Col>
                            </Row> 

                            <Row className="form-group">
                                <Label htmlFor="address" md={3}>Address</Label>
                                <Col md={8}>
                                    <Control.textarea model=".address" id="address" name="address" className="form-control"
                                    validators={{required}}/>
                                    <Errors className="text-danger" model=".address" show="touched"
                                    messages={{
                                        required: 'Required! '
                                    }}/>
                                </Col>
                            </Row> 

                            <Row className="form-group">
                                <Label htmlFor="lic" md={3}>Lic. no</Label>
                                <Col md={8}>
                                    <Control.text model=".lic" id="lic" name="lic" className="form-control"
                                    validators={{required}}/>
                                    <Errors className="text-danger" model=".lic" show="touched"
                                    messages={{
                                        required: 'Required! '
                                    }}/>
                                </Col>
                            </Row> 

                            <Row className="form-group">
                                <Col style={{textAlign: "center"}} md={{size: 4, offset:4}}>
                                    <Button type="submit" color="primary" >Add</Button>
                                </Col>
                            </Row>

                        </LocalForm>
                    </ModalBody>      
                </Modal>
            </div>
        );
    }
        
    
}
 
export default EditShop