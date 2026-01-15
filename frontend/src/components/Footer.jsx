import React from "react";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/image/logo.png" alt="CodeLearn" />
          <h3>CodeLearn</h3>
        </div>
        <p className="footer-tagline">
          Empowering the next generation of developers.
        </p>
        <div className="social-links">
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
        <div className="footer-bottom">
          <p>© 2025 CodeLearn. All Rights Reserved.</p>
          <p>Contact: info@codelearn.com | +251 994333127</p>
        </div>
      </div>
    </footer>
  );
}
