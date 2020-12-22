import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

class EditInfo extends Component {
    state = {  }
    render() { 
        return (  
            <div className="container">
                <h1>In Edit information</h1>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to='/vendor-profile'>Dashboard</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>information</BreadcrumbItem>
                </Breadcrumb>
            </div>
        );
    }
}
 
export default EditInfo;