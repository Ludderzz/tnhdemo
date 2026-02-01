import React, { useState } from "react";
import "./Navbar.css";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">TNH</div>

      {/* Hamburger button */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <div className={isOpen ? "bar open" : "bar"}></div>
        <div className={isOpen ? "bar open" : "bar"}></div>
        <div className={isOpen ? "bar open" : "bar"}></div>
      </div>

      {/* Nav links */}
      <ul className={isOpen ? "nav-links mobile-open" : "nav-links"}>
        <li>Home</li>
        <li>Services</li>
        <li>Impact</li>
        <li>Get Involved</li>
        <li>Donate</li>
      </ul>

      <DarkModeToggle />
    </nav>
  );
};

export default Navbar;
