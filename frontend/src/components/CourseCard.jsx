import React from "react";

export function CourseCard({ course }) {
  return (
    <div className="modern-course-card">
      <div className="card-image">
        <img src={course.image || "/image/web.jpg"} alt={course.title} />
        <span className="badge best-seller">{course.level || "Course"}</span>
        <div className="overlay">
          <button className="preview-btn">Preview Course</button>
        </div>
      </div>
      <div className="card-content">
        <div className="course-meta">
          <span className="level">
            <i className="fas fa-signal"></i> {course.level || "All Levels"}
          </span>
          <span className="duration">
            <i className="far fa-clock"></i> {course.duration || "Self-paced"}
          </span>
        </div>
        <h3>{course.title}</h3>
        <p className="instructor">
          <img
            src={course.instructorAvatar || "/image/abenezer.jpg"}
            alt="Instructor"
          />
          <span>{course.instructor || "Instructor"}</span>
        </p>
        <div className="rating">
          <span className="stars">
            {"★★★★★".slice(0, 1 + Math.round(course.rating || 4))}
          </span>
          <span className="count">({course.rating || "4.7"})</span>
          <span className="students">
            {course.students ? `${course.students} students` : ""}
          </span>
        </div>
        <div className="card-footer">
          <div className="price">
            <span className="current">${course.price || "12.99"}</span>
          </div>
          <a href="#" className="enroll-btn">
            Enroll Now
          </a>
        </div>
      </div>
    </div>
  );
}
