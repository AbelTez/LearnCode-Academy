import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ onOpenModal }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => (location.pathname === path ? "active" : "");

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/image/logo.png" alt="logo" />
        <h2>LearnCode</h2>
      </div>

      <div className="menu-toggle">
        <input
          type="checkbox"
          checked={open}
          onChange={() => setOpen((v) => !v)}
          aria-label="Toggle Menu"
        />
        <span></span>
        <span></span>
        <span></span>

        <ul onClick={() => setOpen(false)}>
          <li>
            <Link to="/" className={isActive("/")}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/courses" className={isActive("/courses")}>
              Courses
            </Link>
          </li>
          <li>
            <Link to="/about" className={isActive("/about")}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className={isActive("/contact")}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/login" className={`btn-login ${isActive("/login")}`}>
              Login
            </Link>
            <Link to="/signin" className={`btn-signup ${isActive("/signin")}`}>
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
