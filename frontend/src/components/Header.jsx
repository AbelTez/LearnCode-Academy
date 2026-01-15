import React from "react";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <header className="navbar">
      <div className="logo">
        <img src="/image/logo.png" alt="logo" />
        <h2>LearnCode</h2>
      </div>
      <div className="nav-links">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/courses"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Courses
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contact
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "btn-login active" : "btn-login"
          }
        >
          Login
        </NavLink>
        <NavLink
          to="/signup"
          className={({ isActive }) =>
            isActive ? "btn-signup active" : "btn-signup"
          }
        >
          Sign Up
        </NavLink>
      </div>
    </header>
  );
}
