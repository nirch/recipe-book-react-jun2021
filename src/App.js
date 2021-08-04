import { useState } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import RecipeNavbar from './components/RecipeNavbar/RecipeNavbar';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RecipesPage from './pages/RecipesPage/RecipesPage';
import jsonRecipes from './data/recipes.json';
import RecipeModel from './model/RecipeModel';
import Parse from 'parse';

function App() {
  const [recipes, setRecipes] = useState(jsonRecipes.map(plainRecipe => new RecipeModel(plainRecipe)));
  const [activeUser, setActiveUser] = useState();

  const activeUserRecipes = activeUser ? recipes.filter(recipe => recipe.userId === activeUser.id) : [];

  function logout() {
    Parse.User.logOut();
    setActiveUser();
  }

  function createRecipe(name, desc, imgURL) {
    const newRecipe = new RecipeModel({
      id: recipes[recipes.length -1].id + 1,
      name,
      desc,
      img: imgURL,
      userId: activeUser.id
    });

    setRecipes(recipes.concat(newRecipe));
  }

  return (
    <div>
      
      <HashRouter>
        <Switch>
          <Route exact path="/">
            <RecipeNavbar activeUser={activeUser} onLogout={() => setActiveUser()}/>
            <HomePage/>
          </Route>
          <Route exact path="/login">
            <LoginPage activeUser={activeUser} onLogin={activeUser => setActiveUser(activeUser)}/>
          </Route>
          <Route exact path="/recipes">
            <RecipeNavbar activeUser={activeUser} onLogout={logout}/>
            <RecipesPage activeUser={activeUser} recipes={activeUserRecipes} onNewRecipe={createRecipe}/>
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
