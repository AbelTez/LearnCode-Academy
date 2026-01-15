import React from "react";
import { CourseCard } from "../components/CourseCard.jsx";

const highlightCourses = [
  {
    title: "Web Development",
    rating: 4.9,
    level: "Popular",
    duration: "3 Months",
    instructor: "Abenezer",
    image: "/image/web.jpg",
  },
  {
    title: "Python Programming",
    rating: 4.7,
    level: "New",
    duration: "2 Months",
    instructor: "Biy",
    image: "/image/python.jpg",
  },
  {
    title: "UI/UX Design",
    rating: 5.0,
    level: "Top Rated",
    duration: "1.5 Months",
    instructor: "Abiy",
    image: "/image/ui.jpg",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1 className="fade-in-up">Learn Coding. Build Your Future.</h1>
          <p className="fade-in-up delay-1">
            Join our learning center and start your tech journey today.
          </p>
          <a href="/courses" className="btn fade-in-up delay-2">
            Explore Courses
          </a>
        </div>
      </section>

      <section className="highlights">
        <h2>Top Courses</h2>
        <div className="course-grid">
          {highlightCourses.map((c) => (
            <CourseCard key={c.title} course={c} />
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Start Your Journey?</h2>
          <p>
            Join thousands of students who have transformed their careers with
            CodeLearn.
          </p>
          <a href="/signup" className="btn-white">
            Get Started for Free
          </a>
        </div>
      </section>
    </>
  );
}
