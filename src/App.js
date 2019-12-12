import React from "react";
import Home from "./components/Home";
import SignUp from "./components/RegisterForm"
import SignIn from "./components/LoginForm"

import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    // routing ========================================================================================================================//
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">
          <SignUp />
        </Route>
        <Route path="/login">
        <SignIn/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
