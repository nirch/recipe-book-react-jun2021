import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

function RecipeNavbar({activeUser}) {
    return (
        <div className="c-navbar">
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#/">Recipe Book</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {activeUser ? <Nav.Link href="#/recipes">Recipes</Nav.Link> : null}
                        </Nav>
                        <Nav className="ms-auto">
                            {!activeUser ? <Nav.Link href="#/login">Login</Nav.Link> : null}
                            {!activeUser ? <Nav.Link href="#/signup">Signup</Nav.Link> : null}
                            {activeUser ? <Nav.Link href="#">Logout</Nav.Link> : null}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>       
        </div>
    );
}

export default RecipeNavbar;