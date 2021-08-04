import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import NewRecipeModal from '../../components/NewRecipeModal/NewRecipeModal';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import "./RecipesPage.css"
import Parse from 'parse';
import RecipeModel from '../../model/RecipeModel';


function RecipesPage({ activeUser }) {
    const [recipes, setRecipes] = useState([]);
    const [showRecipeModal, setShowRecipeModal] = useState(false)

    useEffect(() => {
        // Fetching recipes from server
        const RecipeTable = Parse.Object.extend('Recipe');
        const query = new Parse.Query(RecipeTable);
        query.equalTo('userId', Parse.User.current());
        query.find().then(parseRecipes => {
            console.log(parseRecipes);
            setRecipes(parseRecipes.map(parseRecipe => new RecipeModel(parseRecipe)));
        });
    }, [activeUser]);

    function createRecipe(name, desc, imgFile) {
        const RecipeTable = Parse.Object.extend('Recipe');
        const newParseRecipe = new RecipeTable();

        newParseRecipe.set("name", name);
        newParseRecipe.set("desc", desc);
        newParseRecipe.set("image", new Parse.File(imgFile.name, imgFile));
        newParseRecipe.set("userId", Parse.User.current());

        newParseRecipe.save().then(parseRecipe => {
            setRecipes(recipes.concat(new RecipeModel(parseRecipe)));
        }).catch(err => {
            console.error(err);
        })
    }


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
            <NewRecipeModal show={showRecipeModal} onClose={() => setShowRecipeModal(false)} onCreate={createRecipe}/>
        </div>
    );
}

export default RecipesPage;