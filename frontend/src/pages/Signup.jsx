import React, { useState } from "react";
import { api } from "../api";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await api.signup(form);
      setStatus({ ok: true, message: `Account created for ${res.user.email}` });
    } catch (err) {
      setStatus({ ok: false, error: err.message });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="auth-main">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Join Us Today</h2>
          <p>Create an account and start learning.</p>
        </div>
        <form className="auth-form" onSubmit={submit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              required
              minLength={8}
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>
          <input
            type="submit"
            value={loading ? "Signing up..." : "Sign Up"}
            disabled={loading}
          />
        </form>
        {status && (
          <div
            style={{ marginTop: 12, color: status.ok ? "#16a34a" : "#dc2626" }}
          >
            {status.ok ? status.message : status.error}
          </div>
        )}
      </div>
    </section>
  );
}
