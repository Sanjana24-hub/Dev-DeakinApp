import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Post from "./components/Post"; // We'll create this next
import Header from "./components/Header"; // Import the Header
import './App.css'; // Optional: For global styles

function App() 
{
  return (
    <Router>
      <Header /> {/* Include Header here */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/post" element={<Post />} /> {/* New Route */}
        <Route path="/" element={<Home />} /> {/* Redirect to Home */}
      </Routes>
    </Router>
  );
}

export default App;
