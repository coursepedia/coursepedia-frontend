import React, { useContext, useEffect } from "react";
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
import AdultsCourses from "./components/Courses/AdultsCourses/AdultsCourses";
import CourseLandingPage from "./components/Courses/CourseLandingPage";
// import CommentBox from "./components/CommentBox";

function App() {
  const token = localStorage.getItem("token");
  const [users, addUsers] = useContext(UserContext);

  useEffect(() => {
    if (token) {
      const decodedToken = jwt.decode(token, { complete: true });
      const dateNow = new Date();

      if (!decodedToken.exp < dateNow) {
        userAuth.authenticate();
        addUsers(decodedToken.payload.data);
      }
    }
  }, []);

  return (
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
        <Route path="/courses">
          <CourseLandingPage />
        </Route>
        <Route path="/adults">
          <AdultsCourses />
        </Route>
        <PrivateRoute path="/add-course">
          <AddNewCourse />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
