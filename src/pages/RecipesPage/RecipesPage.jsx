import React from 'react';
import { Container } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

function RecipesPage({activeUser, recipes}) {


    if (!activeUser) {
        return <Redirect to="/"/>
    }

    return (
        <div className="p-recipes">
            <Container>
                <h1>{activeUser.fname}'s Recipes</h1>
                {recipes.map(recipe => <p key={recipe.id}>{recipe.name}</p>)}
            </Container>
        </div>
    );
}

export default RecipesPage;