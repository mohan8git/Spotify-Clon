import React from "react";
import "../styles/Login.css";
import { loginUrl } from "../spotify/spotify";
function Login() {
  return (
    <div className="login">
      <a href={loginUrl}>Login with Spotify</a>
      <p>Get Authorized to use the Application.</p>
    </div>
  );
}

export default Login;
