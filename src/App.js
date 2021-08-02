import { useState } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import RecipeNavbar from './components/RecipeNavbar/RecipeNavbar';
import UserModel from './model/UserModel';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RecipesPage from './pages/RecipesPage/RecipesPage';
import jsonUsers from './data/users.json';
import jsonRecipes from './data/recipes.json';
import RecipeModel from './model/RecipeModel';

function App() {
  const [users, setUsers] = useState(jsonUsers.map(plainUser => new UserModel(plainUser)));
  const [recipes, setRecipes] = useState(jsonRecipes.map(plainRecipe => new RecipeModel(plainRecipe)));
  const [activeUser, setActiveUser] = useState();

  const activeUserRecipes = activeUser ? recipes.filter(recipe => recipe.userId === activeUser.id) : [];

  return (
    <div>
      
      <HashRouter>
        <Switch>
          <Route exact path="/">
            <RecipeNavbar activeUser={activeUser} onLogout={() => setActiveUser()}/>
            <HomePage/>
          </Route>
          <Route exact path="/login">
            <LoginPage activeUser={activeUser} users={users} onLogin={activeUser => setActiveUser(activeUser)}/>
          </Route>
          <Route exact path="/recipes">
            <RecipeNavbar activeUser={activeUser} onLogout={() => setActiveUser()}/>
            <RecipesPage activeUser={activeUser} recipes={activeUserRecipes}/>
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
