import React from 'react';
import { Container } from 'react-bootstrap';

function HomePage(props) {
    return (
        <div className="p-home">
            <Container>
                <h1 className="display-1">Recipe Book</h1>
                <p>Master your recipes</p>
            </Container>
        </div>
    );
}

export default HomePage;