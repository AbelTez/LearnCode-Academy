import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signin from "./pages/Signin";

import "./styles/style.css";
import "./styles/myStyle.css";

export default function App() {
  const [modal, setModal] = useState({ open: false, title: "", body: "" });
  const location = useLocation();
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/signin";

  return (
    <div className={`app-root ${isAuthPage ? "auth-body" : ""}`}>
      <Header onOpenModal={(payload) => setModal({ open: true, ...payload })} />

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                onOpenModal={(payload) => setModal({ open: true, ...payload })}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/courses"
            element={
              <Courses
                onOpenModal={(payload) => setModal({ open: true, ...payload })}
              />
            }
          />
          <Route
            path="/contact"
            element={
              <Contact
                onOpenModal={(payload) => setModal({ open: true, ...payload })}
              />
            }
          />
          <Route
            path="/login"
            element={
              <Login
                onOpenModal={(payload) => setModal({ open: true, ...payload })}
              />
            }
          />
          <Route
            path="/signin"
            element={
              <Signin
                onOpenModal={(payload) => setModal({ open: true, ...payload })}
              />
            }
          />
        </Routes>
      </main>

      <Footer />

      {modal.open && (
        <div
          className="modal-backdrop"
          onClick={() => setModal({ open: false, title: "", body: "" })}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 style={{ margin: 0 }}>{modal.title || "Info"}</h3>
              <button
                className="modal-close"
                onClick={() => setModal({ open: false, title: "", body: "" })}
              >
                &times;
              </button>
            </div>
            <div className="modal-body">
              {typeof modal.body === "string" ? (
                <p>{modal.body}</p>
              ) : (
                modal.body
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
