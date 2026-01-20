import React from "react";
import InstructorCard from "../components/InstructorCard";

const team = [
  {
    image: "/image/abenezer.jpg",
    name: "Abel Tezare",
    role: "Founder & Instructor",
    note: "ID: UGR/6341/16",
  },
  {
    image: "/image/abiy.jpg",
    name: "Abdulazez Zeinu",
    role: "Founder & Instructor",
    note: "ID: UGR/1223/14",
  },
  {
    image: "/image/biy.jpg",
    name: "Eyosyas Tsegaye",
    role: "Founder & Instructor",
    note: "ID: UGR/8268/16",
  },
];

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="fade-in-up">About CodeLearn</h1>
          <p className="fade-in-up delay-1">
            Empowering the next generation of tech leaders.
          </p>
        </div>
      </section>

      <section className="about-section">
        {/* Mission Card */}
        <div
          style={{
            maxWidth: 900,
            margin: "-60px auto 60px",
            position: "relative",
            zIndex: 10,
          }}
        >
          <div
            className="modern-course-card"
            style={{
              padding: 40,
              textAlign: "center",
              border: "none",
              boxShadow: "var(--shadow-lg)",
            }}
          >
            <h2 style={{ marginBottom: 20, color: "var(--primary)" }}>
              Our Mission
            </h2>
            <p
              style={{
                fontSize: "1.25rem",
                lineHeight: 1.8,
                color: "var(--text-light)",
              }}
            >
              To empower students with practical and job-ready tech skills. We
              believe in learning by doing and providing a supportive
              environment for everyone to grow.
            </p>
          </div>
        </div>

        <h2
          className="fade-in-up delay-2"
          style={{ textAlign: "center", marginBottom: 40 }}
        >
          Meet Our Team
        </h2>
        <div className="team-grid">
          {team.map((p, i) => (
            <InstructorCard key={i} person={p} />
          ))}
        </div>
      </section>
    </>
  );
}
