import React, { useContext } from "react";
import { Router } from "@reach/router";
import SignIn from "./authentification/SignIn";
import SignUp from "./authentification/SignUp";
import { UserContext } from "../providers/UserProvider";
import Home from "./Home";

function Application() {
  const user = useContext(UserContext);
  return (
    <div>
      {user ? (
        <Home />
      ) : (
        <Router>
          <SignUp path="signUp" />
          <SignIn path="/" />
        </Router>
      )}
    </div>
  );
}

export default Application;
