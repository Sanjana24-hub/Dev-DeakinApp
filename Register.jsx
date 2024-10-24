import React, { useState } from "react";
import { auth } from "../firebase"; // Import initialized auth
import { createUserWithEmailAndPassword } from "firebase/auth"; // Import the function from Firebase
import { useNavigate } from "react-router-dom";
import './styles.css'; 

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    
    // Input validation
    if (!name || !email || !password) {
      setError("All fields are required!");
      return;
    }

    // Firebase registration process
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Successfully created user, navigate to login or home page
        navigate("/login");
      })
      .catch((error) => {
        setError("Failed to register. Please try again.");
        console.error("Registration error:", error);
      });
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <button type="submit">Register</button>
      </form>
      {error && <p>{error}</p>}
      <p>Already have an account? <a href="/login">Login</a></p>
    </div>
  );
};

export default Register;
