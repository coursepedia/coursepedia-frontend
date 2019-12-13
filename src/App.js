import React from "react";
import Home from "./components/Home";
import SignUp from "./components/RegisterForm";
import SignIn from "./components/LoginForm";

import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import "./App.css";
import AdultsCourses from "./components/Courses/AdultsCourses/AdultsCourses";
import CourseLandingPage from "./components/Courses/CourseLandingPage";
import NavBar from "./components/NavBar";

function App() {
	return (
		// routing ========================================================================================================================//
		<Router>
			{/* <NavBar /> */}
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
			</Switch>
		</Router>
	);
}

export default App;
