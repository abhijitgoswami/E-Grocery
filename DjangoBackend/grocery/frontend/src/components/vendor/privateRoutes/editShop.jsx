import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Button, ListGroup, ListGroupItem, Modal, ModalBody, ModalHeader, Label, Col, Row } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;


function EditShopModel(props){
    const handleSubmit = (values) =>  {
        console.log(props);
        props.putShop(props.id,values)
    }

    return(
        <Modal isOpen={props.isEditShopModel} toggle={props.toogleEditShopModel}>
                    <ModalHeader toggle={props.toogleEditShopModel}>Login</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => handleSubmit(values, )}> 
                            <Row className="form-group">
                                <Label htmlFor="shopname" md={3}>Shop name</Label>
                                <Col md={8}>
                                    <Control.text model=".shopname" id="shopname" name="shopname" className="form-control" />
                                    <Errors className="text-danger" model=".shopname"/>
                                </Col>
                            </Row> 

                            <Row className="form-group">
                                <Label htmlFor="shopaddress" md={3}>Address</Label>
                                <Col md={8}>
                                    <Control.textarea model=".shopaddress" id="shopaddress" name="shopaddress" className="form-control"/>
                                    <Errors className="text-danger" model=".shopaddress"/>
                                </Col>
                            </Row> 

                            <Row className="form-group">
                                <Label htmlFor="licno" md={3}>Lic. no</Label>
                                <Col md={8}>
                                    <Control.text model=".licno" id="licno" name="licno" className="form-control"/>
                                    <Errors className="text-danger" model=".licno"/>
                                </Col>
                            </Row> 

                            <Row className="form-group">
                                <Col style={{textAlign: "center"}} md={{size: 4, offset:4}}>
                                    <Button type="submit" color="primary" onClick={props.toogleEditShopModel}>Edit</Button>
                                </Col>
                            </Row>

                        </LocalForm>
                    </ModalBody>      
                </Modal>
    )
}



class EditShop extends Component{

    constructor(props){
        super(props);

        this.state = {
            isAddShopModel: false,
            isEditShopModel: false,
        }

        this.toogleAddShopModel = this.toogleAddShopModel.bind(this);
        this.toogleEditShopModel = this.toogleEditShopModel.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toogleAddShopModel(){
        this.setState({isAddShopModel: !this.state.isAddShopModel})
    }

    toogleEditShopModel(){
        this.setState({isEditShopModel: !this.state.isEditShopModel})
    }

    handleSubmit(values) {
        this.props.postShop(values)
        this.toogleAddShopModel()
    }

    render(){
        const shops = this.props.shops.map((shop) => {
            return(
                <ListGroupItem id="shop-list" key={shop.id}>
                    {shop.shopname}
                    <Button color="primary" style={{float:"right"}} className="fa fa-trash" onClick={() => this.props.deleteShop(shop.id)}></Button>
                    
                    <Button color="primary" style={{float:"right"}} className="fa fa-edit" onClick={this.toogleEditShopModel}></Button>
                    
                    <EditShopModel isEditShopModel={this.state.isEditShopModel} toogleEditShopModel={this.toogleEditShopModel} putShop={this.props.putShop} id={shop.id}/>
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
                
                <Button color="primary" onClick={this.toogleAddShopModel}>Add new shop</Button>

                <Modal isOpen={this.state.isAddShopModel} toggle={this.toogleAddShopModel}>
                    <ModalHeader toggle={this.toogleAddShopModel}>Login</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}> 
                            <Row className="form-group">
                                <Label htmlFor="shopname" md={3}>Shop name</Label>
                                <Col md={8}>
                                    <Control.text model=".shopname" id="shopname" name="shopname" className="form-control" 
                                    validators={{required}}/>
                                    <Errors className="text-danger" model=".shopname" show="touched"
                                    messages={{
                                        required: 'Required! '
                                    }}/>
                                </Col>
                            </Row> 

                            <Row className="form-group">
                                <Label htmlFor="shopaddress" md={3}>Address</Label>
                                <Col md={8}>
                                    <Control.textarea model=".shopaddress" id="shopaddress" name="shopaddress" className="form-control"
                                    validators={{required}}/>
                                    <Errors className="text-danger" model=".shopaddress" show="touched"
                                    messages={{
                                        required: 'Required! '
                                    }}/>
                                </Col>
                            </Row> 

                            <Row className="form-group">
                                <Label htmlFor="licno" md={3}>Lic. no</Label>
                                <Col md={8}>
                                    <Control.text model=".licno" id="licno" name="licno" className="form-control"
                                    validators={{required}}/>
                                    <Errors className="text-danger" model=".licno" show="touched"
                                    messages={{
                                        required: 'Required! '
                                    }}/>
                                </Col>
                            </Row> 

                            <Row className="form-group">
                                <Col style={{textAlign: "center"}} md={{size: 4, offset:4}}>
                                    <Button type="submit" color="primary">Add</Button>
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