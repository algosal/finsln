// Login.js

import React, { useContext, useState } from "react";
import "../styles/Login.css"; // Import the CSS file
import { useNavigate } from "react-router-dom";
import { FinSlnContext } from "../App";
import login from "../utils/login.service";

const Login = () => {
  let navigate = useNavigate();
  let [FinsLnState, setFinSlnState] = useContext(FinSlnContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Implement your login logic here
    login({ email: username, password }).then((d) => {
      if (d === 200) {
        navigate("/dashboard");
        setFinSlnState({
          ...FinsLnState,
          authenticated: true,
          dynamoDBObjectForBusiness: {
            business: {
              info: {},
              questions: [],
            },
            email: username,
          },
        });
        setLoggedIn(true);
      } else {
        alert("Check Your Username and Password Again");
      }
    });
  };

  return (
    <div className="login-container">
      {!loggedIn ? (
        <div className="login-form">
          <h2 className="login-title">Login</h2>
          <label className="login-label">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
          />
          <label className="login-label">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
          <button onClick={handleLogin} className="login-button">
            Login
          </button>
        </div>
      ) : (
        <div className="login-success">
          <h3>Login Successful!</h3>
          <p>Welcome, {username}!</p>
        </div>
      )}
    </div>
  );
};

export default Login;
