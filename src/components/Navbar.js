import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">TNH</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>Services</li>
        <li>Impact</li>
        <li>Get Involved</li>
        <li>Donate</li>
      </ul>
    </nav>
  );
};

export default Navbar;
