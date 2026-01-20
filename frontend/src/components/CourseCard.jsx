import React from "react";

export default function CourseCard({ course, onPreview }) {
  return (
    <div className="modern-course-card">
      <div className="card-image">
        <img src={course.image} alt={course.title} />
        {course.badge && (
          <span className={`badge ${course.badgeClass || ""}`}>
            {course.badge}
          </span>
        )}
        <div className="overlay">
          <button className="preview-btn" onClick={() => onPreview?.(course)}>
            Preview Course
          </button>
        </div>
      </div>
      <div className="card-content">
        {course.meta && (
          <div className="course-meta">
            <span className="level">
              <i className="fas fa-signal" /> {course.meta.level}
            </span>
            <span className="duration">
              <i className="far fa-clock" /> {course.meta.duration}
            </span>
          </div>
        )}
        <h3>{course.title}</h3>
        {course.instructor && (
          <p className="instructor">
            {course.instructor.avatar && (
              <img src={course.instructor.avatar} alt="Instructor" />
            )}
            <span>{course.instructor.name}</span>
          </p>
        )}
        {course.rating && (
          <div className="rating">
            <span className="stars">{course.rating.stars}</span>
            <span className="count">({course.rating.count})</span>
            {course.rating.students && (
              <span className="students">{course.rating.students}</span>
            )}
          </div>
        )}
        {course.price && (
          <div className="card-footer">
            <div className="price">
              <span className="current">{course.price.current}</span>
              {course.price.original && (
                <span className="original">{course.price.original}</span>
              )}
            </div>
            <a
              href="#"
              className="enroll-btn"
              onClick={(e) => e.preventDefault()}
            >
              Enroll Now
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
