import React, { useState } from "react";

export default function Contact({ onOpenModal }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onOpenModal?.({
      title: "Message sent",
      body: `Thanks ${form.name || "there"}! We'll reply soon.`,
    });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="fade-in-up">Get in Touch</h1>
          <p className="fade-in-up delay-1">
            We'd love to hear from you. Reach out to us for any inquiries.
          </p>
        </div>
      </section>

      <section className="contact-page-section">
        <div className="contact-grid">
          <div className="contact-info-card fade-in-up delay-2">
            <h2>Contact Information</h2>
            <p>Have questions? We are here to help.</p>

            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h3>Address</h3>
                <p>Addis Ababa, Ethiopia</p>
              </div>
            </div>

            <div className="info-item">
              <i className="fas fa-phone"></i>
              <div>
                <h3>Phone</h3>
                <p>+251 994333127</p>
              </div>
            </div>

            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h3>Email</h3>
                <p>info@codelearn.com</p>
              </div>
            </div>

            <div className="social-connect">
              <h3>Follow Us</h3>
              <div className="social-icons">
                <a href="#">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-card fade-in-up delay-3">
            <h2>Send us a Message</h2>
            <form className="auth-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={form.name}
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
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="How can we help you?"
                  value={form.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <input type="submit" value="Send Message" />
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
