import React from 'react';
import { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux'
import { fetchVendors } from '../../redux/actionCreator'

const mapStateToProps = (state) => {
    return{
        vendors: state.vendors,
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchVendors: () => dispatch(fetchVendors())
})

class VendorList extends Component{
    componentDidMount(){
        this.props.fetchVendors()
    }

    render(){
        const vendors = this.props.vendors.vendors.map(vendor => {
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
}

export default connect(mapStateToProps, mapDispatchToProps)(VendorList);

