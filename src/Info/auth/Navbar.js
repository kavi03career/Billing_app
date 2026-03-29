import React from 'react';
import './Navbar.css';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';


const Navigation = (props) => {
    console.log(props);
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Inventory Management</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                
                <Nav className="mr-auto">
                    {/* <Nav.Link href="/">Menu</Nav.Link> */}
                    <Nav.Link href="/Customer">Customer</Nav.Link>
                    {/* <Nav.Link href="/Category">Category</Nav.Link> */}
                    <Nav.Link href="/Product">Product</Nav.Link>
                    <Nav.Link href="/Cart">Cart</Nav.Link>
                    <Nav.Link href="/logout">Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;