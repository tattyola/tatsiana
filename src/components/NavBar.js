import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {

    return (
        <Navbar expand="lg" id='nav' className='fixed-top'>
        <Container>
            <Navbar.Brand href="#home" className='link'>Tatsiana Astrouskaya</Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="ms-auto">
                    <Nav.Link href="#home" className='link'>Home</Nav.Link>
                    <Nav.Link href="#about" className='link'>About</Nav.Link>
                    <Nav.Link href="#projects" className='link'>Projects</Nav.Link>
                    <Nav.Link href="#contacts" className='link'>Contacts</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
};

export default NavBar;
