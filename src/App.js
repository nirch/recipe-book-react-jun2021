import { useState } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import RecipeNavbar from './components/RecipeNavbar/RecipeNavbar';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RecipesPage from './pages/RecipesPage/RecipesPage';
import RecipeModel from './model/RecipeModel';
import Parse from 'parse';

function App() {
  const [activeUser, setActiveUser] = useState();

  function logout() {
    Parse.User.logOut();
    setActiveUser();
  }

  // function createRecipe(name, desc, imgURL) {
  //   const newRecipe = new RecipeModel({
  //     id: recipes[recipes.length -1].id + 1,
  //     name,
  //     desc,
  //     img: imgURL,
  //     userId: activeUser.id
  //   });

  //   setRecipes(recipes.concat(newRecipe));
  // }

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
            <RecipesPage activeUser={activeUser}/>
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
