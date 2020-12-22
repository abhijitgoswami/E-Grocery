import React from 'react';

function ContactUs(props) {
    return(
        <div className="container">
            <div className="row row-content">
                <div className="col-12">
                    <h3>Location Information</h3><hr/>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                    <h5>Our Address</h5>
                    <address>
                    Rajosmita Cottage<br />
                    10/A K P Banerjee Lane, Hooghly<br />                       
                    INDIA<br />
                    <i className="fa fa-phone"></i>: +91 8409249455<br />
                    <i className="fa fa-fax"></i>: +91 8409249455<br />
                    <i className="fa fa-envelope"></i>: <a href="abhijeetgoswami45@gmail.com">abhijeetgoswami45@gmail.com</a>
                    </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+918409249455"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info" href="/home"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="abhijeetgoswami45@gmail.com"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;