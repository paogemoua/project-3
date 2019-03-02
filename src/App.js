import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Callback from './Callback';
import Home from "./Home/Home";
import Start from "./Start/index";
import Find from "./Find/index";
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path = "/" component = {Home} />
            <Route exact path = "/Start" component = {Start} />
            <Route exact path = "/Find" component = {Find} />
            <Route exact paty = '/Callback' component={Callback}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
