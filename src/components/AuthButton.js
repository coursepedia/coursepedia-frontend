import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { userAuth } from "../helpers/auth";
import Home from "./Home";
import { UserContext } from "./UserContext";

function AuthButton() {
  let history = useHistory();
  const [users, addUsers] = useContext(UserContext);

  return users ? (
    <p>
      <span> Welcome, {users.name}!</span>
      <Home />
      {/* <button
          onClick={() => {
            fakeAuth.signout(() => history.push("/"));
          }}
        >
          Sign out
        </button> */}
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}

export default AuthButton;
