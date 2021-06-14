
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from "./components/NavBar";
import { Home } from './components/pages/Home.js';
import { Linguistics } from './components/pages/Linguistics.js';
import { Play } from './components/pages/Play.js';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/linguistics" component={Linguistics}/>
          <Route exact path="/play" component={Play}/>
      </Switch>
      </Router>
    </>
  );
}

export default App;
