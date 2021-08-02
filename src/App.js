import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RecipesPage from './pages/RecipesPage/RecipesPage';

function App() {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route exact path="/"><HomePage/></Route>
          <Route exact path="/login"><LoginPage/></Route>
          <Route exact path="/recipes"><RecipesPage/></Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
