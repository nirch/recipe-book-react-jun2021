import React from 'react';
import { useState } from 'react';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import "./RecipesPage.css"

function RecipesPage({ activeUser, recipes }) {
    const [showRecipeModal, setShowRecipeModal] = useState(false)

    if (!activeUser) {
        return <Redirect to="/" />
    }

    return (
        <div className="p-recipes">
            <Container>
                <div className="heading">
                    <h1>{activeUser.fname}'s Recipes</h1>
                    <Button onClick={() => setShowRecipeModal(true)}>New Recipe</Button>
                </div>
                <Row>
                    {recipes.map(recipe =>
                        <Col key={recipe.id} md={3} sm={6}>
                            <RecipeCard recipe={recipe} />
                        </Col>
                    )}
                </Row>
            </Container>


            <Modal show={showRecipeModal} onHide={() => setShowRecipeModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowRecipeModal(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => setShowRecipeModal(false)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>


        </div>
    );
}

export default RecipesPage;