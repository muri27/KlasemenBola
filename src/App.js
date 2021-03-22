import './App.css';
import Api from './components/Api.js'
import Tim from './components/Teams.js'
import Home from './components/Home.js'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
     <div className="App">
       <header className="App-header">
        <Router>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/leagues/:idLeague' component={Api}></Route>
            <Route exact path='/teams/:idTeam' component={Tim}></Route>
          </Switch>
        </Router>
        </header>
     </div>
   );
 }

export default App;
