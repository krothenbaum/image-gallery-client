import React from "react";
import { Link } from "react-router-dom";
import "./nav-bar.css";

const NavBar = () => (
  <nav>
    <ul>
      <li className="nav-button">
        <Link to="/upload">Add Photo</Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;
