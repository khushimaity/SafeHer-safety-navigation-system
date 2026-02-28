import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove JWT token
    localStorage.removeItem("token");

    // Redirect to login page
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="logo">SafeHer</div>

      <div className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/features">Features</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;