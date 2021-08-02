import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import RecipeNavbar from './components/RecipeNavbar/RecipeNavbar';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RecipesPage from './pages/RecipesPage/RecipesPage';

function App() {
  return (
    <div>
      
      <HashRouter>
        <Switch>
          <Route exact path="/">
            <RecipeNavbar/>
            <HomePage/>
          </Route>
          <Route exact path="/login"><LoginPage/></Route>
          <Route exact path="/recipes">
            <RecipeNavbar/>
            <RecipesPage/>
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
