import React from 'react';

function VendorList(props){
  
        const vendors = props.vendors.map(vendor => {
            return(
                <tr key={vendor.id}>
                    <td>{vendor.firstname}</td>
                    <td>{vendor.lastname}</td>
                    <td>{vendor.mobile}</td>
                    <td>{vendor.email}</td>
                    <td>
                        <button className="btn btn-primary btn-sm" onClick={() => props.deleteVendor(vendor.id)}>Edit</button>
                    </td>
                    <td>
                        <button className="btn btn-danger btn-sm" onClick={() => props.deleteVendor(vendor.id)}>Delete</button>
                    </td>
                </tr> 
            )
        })
        return (
            <div className="container">
                <table className="table table-striped">
                    <thead >
                        <tr>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Mobile</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {vendors}
                    </tbody>
                </table>
            </div>
        );
    
}

export default VendorList;

