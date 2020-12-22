import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { Col, Row } from 'reactstrap';

class Footer extends Component {
    render() { 
        return (  
            <footer >
                <div id="footer" className="container">
                    <Row>
                        <Col id="company" md={3} sm={12} xs={12}>
                            <h5>Company</h5>
                            <p><NavLink to="/home">Home</NavLink></p>
                            <p><NavLink to="/about">About us</NavLink></p>
                        </Col>

                        <Col id="contact" md={3} sm={12} xs={12}>
                            <h5>Contact</h5>
                            <p><NavLink to="/contact">Contact Us</NavLink></p>
                            <p><NavLink to="/help">Help and Support</NavLink></p>
                            <p><a href="/api/vendors">Partner with us</a></p>
                        </Col>

                        <Col id="legal" md={3} sm={12} xs={12}>
                            <h5>Legal</h5>
                            <p><NavLink to="/contact">Terms &amp; Condition</NavLink></p>
                            <p><NavLink to="/help">Refund &amp; Cancellation</NavLink></p>
                            <p><NavLink to="/contact">Privacy Policy</NavLink></p>
                            <p><NavLink to="/help">Cookies Policy</NavLink></p>
                            <p><NavLink to="/help">Offer Terms</NavLink></p>
                        </Col>

                        <Col className="align-self-center" md={3} sm={12} xs={12}>
                            <div className="text-center">
                                <a className='btn btn-social-icon btn-google mr-2' href="http://google.com/+">
                                    <i className='fa fa-google-plus'></i>
                                </a>
                                <a className='btn btn-social-icon btn-facebook mr-2' href="http://www.facebook.com/profile.php?id=">
                                    <i className='fa fa-facebook'></i>
                                </a>
                                <a className='btn btn-social-icon btn-linkedin mr-2' href="http://www.linkedin.com/in/">
                                    <i className='fa fa-linkedin'></i>
                                </a>
                                <a className='btn btn-social-icon btn-twitter mr-2' href="http://twitter.com/">
                                    <i className='fa fa-twitter'></i>
                                </a>
                                <a className='btn btn-social-icon btn-google mr-2' href="http://youtube.com/">
                                    <i className='fa fa-google'></i>
                                </a>
                                <a className='btn btn-social-icon btn-mailto mr-2' href="mailto:">
                                    <i className='fa fa-google-mailto'></i>
                                </a>
                            </div>
                        </Col>
                    </Row>

                    <hr/>
                   
                    <div className="container">
                        <div className="row">
                            <div id="copyright" className="col-12">
                                <h5>&copy; 2020 Brand Name</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
 
export default Footer;