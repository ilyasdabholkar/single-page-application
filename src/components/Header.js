import React, { Component } from 'react';
import { Navbar, NavbarBrand, Collapse, Nav, NavItem, Jumbotron, NavbarToggler 
    ,Button ,Modal , ModalHeader,ModalBody, FormText, FormGroup, Label,Form, Input,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

export class Header extends Component {
    
    constructor(props){
        super(props);
        this.state={
            isOpen : false,
            isModalOpen : false,
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav(){
        this.setState({isOpen : !this.state.isOpen});
    }

    toggleModal(){
        this.setState({isModalOpen : !this.state.isModalOpen});
    }

    handleLogin(event){
        this.toggleModal();
        alert("Username : " +this.username.value + " Password : " + this.password.value 
        + " Remember " + this.remember.checked);
        event.preventDefault();
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
                                <Nav className = "ml-auto">
                                    <NavItem>
                                        <Button outline onClick={this.toggleModal}>
                                            <span className = "fa fa-sign-in fa-lg">Login</span>
                                        </Button>
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
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username" innerRef={(input)=> this.username = input}/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password" innerRef={(input)=> this.password = input}/>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remeber" innerRef={(input)=> this.remember = input}/>
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary" className="mt-2">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </>
        );
    }
}
