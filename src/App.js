import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Callback from './Callback.js';
import Home from "./home/Home.js";
import Start from "./start/index";
import Find from "./find/index";
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
          <Route exact path = '/callback' component={Callback}/>
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
