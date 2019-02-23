import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Start from "./pages/start";
import Find from "./pages/find";
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path = "/" component = {Home} />
            <Route exact path = "/start" component = {Start} />
            <Route exact path = "/find" component = {Find} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
