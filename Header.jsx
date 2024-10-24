import React from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    auth.signOut()
      .then(() => {
        // Redirect to login page after signing out
        navigate("/login");
      })
      .catch((error) => {
        console.error("Sign out error:", error);
      });
  };

  return (
    <header>
      <h1>DEV@Deakin</h1>
      <button onClick={handleSignOut}>Sign Out</button>
    </header>
  );
};

export default Header;
