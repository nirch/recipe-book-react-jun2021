import React from 'react';
import { Container } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

function RecipesPage({activeUser}) {

    if (!activeUser) {
        return <Redirect to="/"/>
    }

    return (
        <div className="p-recipes">
            <Container>
                <h1>{activeUser.fname}'s Recipes</h1>
            </Container>
        </div>
    );
}

export default RecipesPage;