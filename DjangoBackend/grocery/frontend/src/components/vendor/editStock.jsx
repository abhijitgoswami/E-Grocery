import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

class EditStock extends Component {
    state = {  }
    render() { 
        return (  
            <div className="container">
                <h1>In Edit Stock</h1>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to='/vendor-profile'>Dashboard</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>stock</BreadcrumbItem>
                </Breadcrumb>
            </div>
        );
    }
}
 
export default EditStock;