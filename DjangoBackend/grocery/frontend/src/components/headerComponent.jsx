import React, { Component } from 'react';
import {Nav, Navbar, NavbarBrand, Collapse, NavItem, NavbarToggler} from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            isNavOpen: false,
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() { 
        const logout = () => {
            return(
                <NavItem style={{textAlign:"center"}} className="col-md-2">
                    <button className="btn btn-primary btn-md" to="/contact">
                        <span class="fa fa-sign-out" aria-hidden="true">Logout</span>
                    </button>
                </NavItem>
            )
        }
        return (  
            <React.Fragment>
                <header>
                    <Navbar id="header" expand="md" className="navbar-dark bg-dark fixed-top">
                        <div className="container-fluid">
                        
                            <NavbarToggler id="hamburger" onClick={this.toggleNav}/>

                            <NavbarBrand className="mr-auto" href="/home">
                                <span>Brand Name</span>
                            </NavbarBrand>
                            
                            <Collapse isOpen={this.state.isNavOpen} navbar>
                                <Nav className="ml-auto" >                               
                                    <NavItem style={{textAlign:"center"}} className="col-md-2">
                                        <NavLink className="nav-link" to="/home">
                                            <span className="fa fa-home fa-md">Home</span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem style={{textAlign:"center"}} className="col-md-2">
                                        <NavLink className="nav-link" to="/shop">
                                            <span className="fas fa-store-alt fa-md">Shop</span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem style={{textAlign:"center"}} className="col-md-2">
                                        <NavLink className="nav-link" to="/about">
                                            <span className="fa fa-info fa-md">About</span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem style={{textAlign:"center"}} className="col-md-2">
                                        <NavLink className="nav-link" to="/contact">
                                            <span className="fa fa-address-book fa-md">Contact</span>
                                        </NavLink>
                                    </NavItem> 
                                    {this.props.auth.isAuthenticated?<NavItem style={{textAlign:"center"}} className="col-md-2">
                                    <button className="btn btn-primary btn-md" onClick={() => this.props.logoutVendor()}>
                                        <span className="fa fa-sign-out" aria-hidden="true">Logout</span>
                                    </button>
                                </NavItem>:null}                              
                                </Nav>
                            </Collapse>                     
                        </div>

                    </Navbar>
                </header>
            </React.Fragment>
        );
    }
}
 
export default Header;