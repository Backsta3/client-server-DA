import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home/Home";
import Problems from "./components/Home/Problems/Problems";


function App() {
  return (
    <div className="mainBg">
    <Router>
        <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route> 
        </Switch>
        <Switch>
            <Route exact path="/problems">
              <Problems></Problems>
            </Route> 
        </Switch>
    </Router>
    </div>
  );
}

export default App;
