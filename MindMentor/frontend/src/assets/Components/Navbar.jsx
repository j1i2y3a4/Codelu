// src/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./CSS/Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <h1 className="title">MIND MENTOR</h1>
      <ul>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/chat">Chat</Link>
        </li>
        <li>
          <Link to="/tasks">Tasks</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
