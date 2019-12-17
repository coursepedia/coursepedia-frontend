import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import jwt from "jsonwebtoken";
import Home from "./components/Home";
import SignUp from "./components/RegisterForm";
import SignIn from "./components/LoginForm";
import AddNewCourse from "./components/AddNewCourse";
import PrivateRoute from "./components/PrivateRoute";
import { userAuth } from "./helpers/userAuth";
import { UserContext } from "./components/UserContext";

import "./App.css";

function App() {
  const token = localStorage.getItem("token");
  const [users, addUsers] = useContext(UserContext);

  try {
    if (token) {
      console.log("hallo");
      const decodedToken = jwt.decode(token, { complete: true });
      const dateNow = new Date();
      console.log(decodedToken);

      if (!decodedToken.exp < dateNow) {
        userAuth.authenticate();
        addUsers(decodedToken.payload.data);
      }
    }
  } catch (ex) {
    // if invalid token
    console.log("error geting token");
  }

  return (
    // routing ========================================================================================================================//
    // <UserProvider>
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
    // </UserProvider>
  );
}

export default App;
