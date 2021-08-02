import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import RecipeCard from '../../components/RecipeCard/RecipeCard';

function RecipesPage({activeUser, recipes}) {


    if (!activeUser) {
        return <Redirect to="/"/>
    }

    return (
        <div className="p-recipes">
            <Container>
                <h1>{activeUser.fname}'s Recipes</h1>
                <Row>
                    {recipes.map(recipe => 
                        <Col key={recipe.id} md={3} sm={6}>
                            <RecipeCard recipe={recipe}/>
                        </Col>
                    )}
                </Row>
            </Container>
        </div>
    );
}

export default RecipesPage;