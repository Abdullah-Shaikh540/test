import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const MyNavbar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#">
                <img
                    src="/path/to/your/image.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="Logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto text-black">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#services">Services</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MyNavbar;
