import { useState } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import RecipeNavbar from './components/RecipeNavbar/RecipeNavbar';
import UserModel from './model/UserModel';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RecipesPage from './pages/RecipesPage/RecipesPage';
import jsonUsers from './data/users.json';

function App() {
  const [users, setUsers] = useState(jsonUsers.map(plainUser => new UserModel(plainUser)));
  const [activeUser, setActiveUser] = useState(new UserModel({id: "1", fname: "Nir", lname: "Channes", email: "nir@nir.com", pwd: "123"}));

  return (
    <div>
      
      <HashRouter>
        <Switch>
          <Route exact path="/">
            <RecipeNavbar activeUser={activeUser} onLogout={() => setActiveUser(null)}/>
            <HomePage/>
          </Route>
          <Route exact path="/login"><LoginPage users={users}/></Route>
          <Route exact path="/recipes">
            <RecipeNavbar activeUser={activeUser} onLogout={() => setActiveUser(null)}/>
            <RecipesPage activeUser={activeUser}/>
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
