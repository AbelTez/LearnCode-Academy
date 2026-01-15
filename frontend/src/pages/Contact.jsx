import React, { useState } from "react";
import { api } from "../api";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      await api.sendContact(form);
      setStatus({ ok: true, message: "Message sent!" });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus({ ok: false, error: err.message });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      className="contact-form-card"
      style={{ maxWidth: 700, margin: "40px auto" }}
    >
      <h2>Contact Us</h2>
      <form className="auth-form" onSubmit={submit}>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            placeholder="Your Name"
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
            placeholder="Email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows={4}
            placeholder="How can we help?"
            required
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
        </div>
        <input
          type="submit"
          value={loading ? "Sending..." : "Send Message"}
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
    </section>
  );
}
