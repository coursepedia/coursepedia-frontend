import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/RegisterForm";
import SignIn from "./components/LoginForm";
import AddNewCourse from "./components/AddNewCourse";
import { UserProvider } from "./components/UserContext";
import PrivateRoute from "./components/PrivateRoute";

import "./App.css";

function App() {
  return (
    // routing ========================================================================================================================//
    <UserProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">
            <SignUp />
          </Route>
          <Route path="/login">
            <SignIn />
          </Route>
          <PrivateRoute path="/add-course">
            <AddNewCourse />
          </PrivateRoute>
        </Switch>
      </Router>
    </UserProvider>
  );
}

export default App;
