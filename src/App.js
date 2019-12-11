import React, { useLayoutEffect, useState } from "react";
import Home from "./components/Home";

import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./component/Login/Login";

function App() {
	return (
		// routing ========================================================================================================================//
		<Router>
      
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
        <Route path="/login">
          <Login/>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
