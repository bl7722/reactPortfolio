import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <nav>
      <ul>
        <li id= "about">
          <Link
            to="/"
            className={
              window.location.pathname === "/" 
            }
          >
            About
          </Link>
        </li>
        <li id= "port">
          <Link
            to="/Portfolio"
            className={
              window.location.pathname === "/Portfolio"
            }
          >
            Portfolio
          </Link>
        </li>
      </ul>
  </nav>
    );
}

export default Navbar;