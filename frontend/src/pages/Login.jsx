import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login({ onOpenModal }) {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onOpenModal?.({
      title: "Login",
      body: "Login submission captured. Backend integration coming soon.",
    });
    setForm({ email: "", password: "" });
  };

  return (
    <div className="auth-body">
      <main className="auth-main">
        <div className="auth-card">
          <div className="auth-header">
            <h2>Welcome Back</h2>
            <p>Login to continue your learning journey.</p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
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
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>

            <input type="submit" value="Log In" />
          </form>

          <div className="auth-footer">
            <p>
              Don't have an account? <Link to="/signin">Sign up for free</Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
