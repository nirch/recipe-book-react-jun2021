import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import "./RecipesPage.css"

function RecipesPage({activeUser, recipes}) {


    if (!activeUser) {
        return <Redirect to="/"/>
    }

    return (
        <div className="p-recipes">
            <Container>
                <div className="heading">
                    <h1>{activeUser.fname}'s Recipes</h1>
                    <Button>New Recipe</Button>
                </div>
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