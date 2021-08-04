import { useState } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import RecipeNavbar from './components/RecipeNavbar/RecipeNavbar';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RecipesPage from './pages/RecipesPage/RecipesPage';
import Parse from 'parse';
import UserModel from './model/UserModel';

function App() {
  const [activeUser, setActiveUser] = useState(Parse.User.current() ? new UserModel(Parse.User.current()) : null);

  function logout() {
    Parse.User.logOut();
    setActiveUser();
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
            <RecipesPage activeUser={activeUser}/>
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
