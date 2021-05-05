import React, { Component } from 'react';
import { Navbar, NavbarBrand, Collapse, Nav, NavItem, Jumbotron, NavbarToggler } from 'reactstrap';
import { NavLink } from 'react-router-dom';

export class Header extends Component {
    
    constructor(props){
        super(props);
        this.state={
            isOpen : false,
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState({isOpen : !this.state.isOpen});
    }

    render() {
        return (
            <>
                <div>
                    <Navbar className="navbar-dark" expand="md">
                        <div className="container">
                            <NavbarToggler onClick={this.toggleNav} />
                            <NavbarBrand className="mr-auto">
                                <img src="assets/images/logo.png" height="30" width="60" />
                            </NavbarBrand>
                            <Collapse isOpen={this.state.isOpen}navbar>
                                <Nav className="mr-auto" navbar>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/home"><span className="fa fa-home fa-lg p-2">Home</span></NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/menu"><span className="fa fa-list fa-lg p-2">Menu</span></NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to='/about'><span className="fa fa-info fa-lg p-2"></span> About Us</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to='/contact'><span className="fa fa-address-card fa-lg p-2"></span> Contact Us</NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </div>
                    </Navbar>
                </div>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </>
        );
    }
}
