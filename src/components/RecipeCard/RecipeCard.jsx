import React from 'react';

function RecipeCard({recipe}) {
    return (
        <div>
            <p>{recipe.name}</p>
        </div>
    );
}

export default RecipeCard;