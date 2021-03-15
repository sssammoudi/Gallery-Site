import React from "react";
import { Link } from "@reach/router";
import { signInWithGoogle } from "../firebase_/index";
import "./style.css";

function SignUp() {
  return (
    <div>
      <h1 className="text-center font-bold">Sign Up</h1>
      <div className="border">
        <button
          className="bg-danger hover:bg-danger w-75 py-2 text-white"
          onClick={() => signInWithGoogle()}
        >
          Sign Up with Google
        </button>
        <p className="text-center my-3">
          Already have an account?{" "}
          <Link to="/" className="text-blue-500 hover:text-blue-600">
            Sign in here
          </Link>{" "}
        </p>
      </div>
    </div>
  );
}

export default SignUp;
