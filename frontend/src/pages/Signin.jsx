import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Signin({ onOpenModal }) {
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onOpenModal?.({
      title: "Sign Up",
      body: "Account creation captured. Backend integration coming soon.",
    });
    setForm({ fname: "", lname: "", email: "", password: "" });
  };

  return (
    <div className="auth-body">
      <main className="auth-main">
        <div className="auth-card">
          <div className="auth-header">
            <h2>Join Us Today</h2>
            <p>Create an account and start learning.</p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fname">First Name</label>
              <input
                type="text"
                id="fname"
                name="fname"
                placeholder="First Name"
                value={form.fname}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="lname">Last Name</label>
              <input
                type="text"
                id="lname"
                name="lname"
                placeholder="Last Name"
                value={form.lname}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="name@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Create a password (min 8 chars)"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>

            <input type="submit" value="Sign Up" />
          </form>

          <div className="auth-footer">
            <p>
              Already have an account? <Link to="/login">Log in</Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
