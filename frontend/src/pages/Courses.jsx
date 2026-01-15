import React, { useEffect, useState } from "react";
import { api } from "../api";
import { CourseCard } from "../components/CourseCard.jsx";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    api
      .getCourses()
      .then((res) => {
        if (mounted) {
          setCourses(res.data || []);
          setError(null);
        }
      })
      .catch((err) => {
        if (mounted) setError(err.message);
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section className="courses-page">
      <div className="courses-hero">
        <div className="hero-content">
          <h1 className="fade-in-up">Explore Unlimited Possibilities</h1>
          <p className="fade-in-up delay-1">
            Master new skills with our top-rated courses.
          </p>
        </div>
      </div>

      <div className="course-list-section">
        <div className="section-header">
          <h2>Featured Courses</h2>
          <p>Hand-picked by our experts</p>
        </div>

        {loading && <p>Loading courses...</p>}
        {error && <p style={{ color: "#dc2626" }}>{error}</p>}

        <div className="course-grid">
          {courses.map((course) => (
            <CourseCard key={course._id || course.title} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
