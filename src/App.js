import { useState } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import RecipeNavbar from './components/RecipeNavbar/RecipeNavbar';
import UserModel from './model/UserModel';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RecipesPage from './pages/RecipesPage/RecipesPage';

function App() {
  const [activeUser, setActiveUser] = useState(new UserModel({id: "1", fname: "Nir", lname: "Channes", email: "nir@nir.com", pwd: "123"}));
  // const [activeUser, setActiveUser] = useState(null);

  return (
    <div>
      
      <HashRouter>
        <Switch>
          <Route exact path="/">
            <RecipeNavbar activeUser={activeUser}/>
            <HomePage/>
          </Route>
          <Route exact path="/login"><LoginPage/></Route>
          <Route exact path="/recipes">
            <RecipeNavbar activeUser={activeUser}/>
            <RecipesPage/>
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
