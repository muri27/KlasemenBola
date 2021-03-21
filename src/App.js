import './App.css';
import Api from './components/Api.js'
import Tim from './components/Teams.js'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
     <div className="App">
       <header className="App-header">
        <Router>
          <Switch>
            <Route exact path="/" component={Api}></Route>
            <Route exact path='/teams/:id' component={Tim}></Route>
          </Switch>
        </Router>
        </header>
     </div>
   );
 }

export default App;
