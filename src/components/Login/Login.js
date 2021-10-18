import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  // destructuring from useAuth hook
  const { signInWithGoogle, signInWithGitHub } = useAuth();
  return (
    <div>
      <h2>Please Login</h2>
      <button onClick={signInWithGoogle}>Google Sign-In</button>
      <br />
      <button onClick={signInWithGitHub}>GitHub Sign-In</button>
      <br />
      <Link to="/register">New User?</Link>
    </div>
  );
};

export default Login;
