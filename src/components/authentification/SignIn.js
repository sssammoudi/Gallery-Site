import React from "react";
import { Link } from "@reach/router";
import { signInWithGoogle } from "../firebase_/index";
import "./style.css";

function SignIn() {
  return (
    <div>
      <h1 className="text-center font-bold">Sign In</h1>
      <div className="border">
        <button
          className="bg-danger hover:bg-danger w-75 py-2 text-white"
          onClick={() => signInWithGoogle()}
        >
          Sign In
        </button>
        <p className="text-center my-3">
          Don't have an account?{" "}
          <Link to="signUp" className="text-blue-500 hover:text-blue-600">
            Sign up here
          </Link>{" "}
        </p>
      </div>
    </div>
  );
}

export default SignIn;
