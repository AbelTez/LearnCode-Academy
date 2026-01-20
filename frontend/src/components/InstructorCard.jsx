import React from "react";

export default function InstructorCard({ person }) {
  return (
    <div className="team-member fade-in-up delay-3">
      <img src={person.image} alt={person.name} />
      <h3>{person.name}</h3>
      <p style={{ color: "var(--primary)", fontWeight: 600 }}>{person.role}</p>
      {person.note && (
        <p style={{ fontSize: ".9rem", color: "var(--text-light)" }}>
          {person.note}
        </p>
      )}
      <div style={{ marginTop: 15 }}>
        <a href="#" style={{ color: "var(--text-light)", margin: "0 5px" }}>
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="#" style={{ color: "var(--text-light)", margin: "0 5px" }}>
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </div>
  );
}
