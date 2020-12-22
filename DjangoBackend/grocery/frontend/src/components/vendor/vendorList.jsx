import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

function VendorList(props){
  
        const vendors = props.vendors.map(vendor => {
            console.log(vendor);
            return(
                <Row key={vendor.id}>
                    <Col><p>{vendor.firstname}</p></Col>
                    <Col><p>{vendor.lastname}</p></Col>     
                    <Col><p>{vendor.mobile}</p></Col>
                    <Col><p>{vendor.email}</p></Col>
                </Row>   
            )
        })
        return (
            <div className="container">
                <Row>
                    <Col><p style={{fontWeight: "bold"}}>First name</p></Col>
                    <Col><p style={{fontWeight: "bold"}}>Last name</p></Col>
                    <Col><p style={{fontWeight: "bold"}}>Mobile</p></Col>
                    <Col><p style={{fontWeight: "bold"}}>Email</p></Col>
                </Row>
                {vendors}
            </div>
        );
    
}

export default VendorList;

