import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header>
      <h1 className="site-title">
        Student Kennels
        <br />
        <small>Loving care when you're not there.</small>
      </h1>
      <nav>
        <ul className="container">
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/animals">
              Our Guests
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/locations">
              Our Locations
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/employees">
              Our Staff
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/owners">
              Pet Owners
            </Link>  
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;