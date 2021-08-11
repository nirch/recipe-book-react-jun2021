import React, { useContext } from 'react';
import { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import NewRecipeModal from '../../components/NewRecipeModal/NewRecipeModal';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import ActiveUserContext from '../../shared/ActiveUserContext';
import "./RecipesPage.css"
import { Pie } from 'react-chartjs-2';

function RecipesPage({ recipes, onNewRecipe }) {
    const [showRecipeModal, setShowRecipeModal] = useState(false)
    const activeUser = useContext(ActiveUserContext);
    
    let easyRecipes = 0;
    let hardRecipes = 0;
    for (const recipe of recipes) {
        if (recipe.difficulty === 1) {
            ++easyRecipes;
        } else {
            ++hardRecipes;
        }
    }

    const chartData = {
        labels: ['Easy', 'Hard'],
        datasets: [
            {
                label: '# of Recipes',
                data: [easyRecipes, hardRecipes],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };


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
                <Pie data={chartData} />
            </Container>
            <NewRecipeModal show={showRecipeModal} onClose={() => setShowRecipeModal(false)} onCreate={onNewRecipe} />
        </div>
    );
}

export default RecipesPage;