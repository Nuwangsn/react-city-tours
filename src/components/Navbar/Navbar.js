import React from "react";
import "./Navbar.scss";
import logo from "./logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="city tours logo" />
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link active">
            tours
          </a>
        </li>

        <li>
          <a href="/" className="nav-link">
            about us
          </a>
        </li>

        <li>
          <a href="/" className="nav-link ">
            contact us
          </a>
        </li>
      </ul>
    </nav>
  );
}
