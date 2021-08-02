import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

function RecipeNavbar(props) {
    return (
        <div className="c-navbar">
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#/">Recipe Book</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#/recipes">Recipes</Nav.Link>
                        </Nav>
                        <Nav className="ms-auto">
                            <Nav.Link href="#/login">Login</Nav.Link>
                            <Nav.Link href="#/signup">Signup</Nav.Link>
                            <Nav.Link href="#">Logout</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>       
        </div>
    );
}

export default RecipeNavbar;