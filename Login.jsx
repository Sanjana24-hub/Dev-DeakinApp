import React, { useState } from "react";
import { auth } from "../firebase"; // Import your initialized auth instance
import { signInWithEmailAndPassword } from "firebase/auth"; // Import the function from Firebase
import { useNavigate } from "react-router-dom";
import './styles.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Use signInWithEmailAndPassword with auth and credentials
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/home");
      })
      .catch((error) => {
        setError("Invalid email or password");
        console.error("Login error:", error);
      });
  };

  return (
    <div className="container">
      <div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
        {error && <p>{error}</p>}
        <p>Don't have an account? <a href="/register">Sign Up</a></p>
      </div>
    </div>
  );
};

export default Login;
