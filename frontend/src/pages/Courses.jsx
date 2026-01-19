import React, { useState } from "react";
import CourseCard from "../components/CourseCard";

const courses = [
  {
    title: "Full Stack Web Development Bootcamp",
    image: "/image/web.jpg",
    badge: "Bestseller",
    badgeClass: "best-seller",
    meta: { level: "Beginner", duration: "3 Months" },
    instructor: { name: "Abenezer", avatar: "/image/abenezer.jpg" },
    rating: { stars: "★★★★★", count: "4.9", students: "12k students" },
    price: { current: "$12.99", original: "$89.99" },
  },
  {
    title: "Python for Data Science and AI",
    image: "/image/python.jpg",
    badge: "New",
    badgeClass: "new",
    meta: { level: "All Levels", duration: "2 Months" },
    instructor: { name: "Biy", avatar: "/image/biy.jpg" },
    rating: { stars: "★★★★☆", count: "4.7", students: "8.5k students" },
    price: { current: "$14.99", original: "$94.99" },
  },
  {
    title: "UI/UX Design Masterclass",
    image: "/image/ui.jpg",
    badge: "Top Rated",
    badgeClass: "top-rated",
    meta: { level: "Intermediate", duration: "1.5 Months" },
    instructor: { name: "Abiy", avatar: "/image/abiy.jpg" },
    rating: { stars: "★★★★★", count: "4.95", students: "5k students" },
    price: { current: "$11.99", original: "$79.99" },
  },
  {
    title: "Mobile App Development with Flutter",
    image: "/image/web.jpg",
    meta: { level: "Advanced", duration: "3 Months" },
    instructor: { name: "Abenezer", avatar: "/image/abenezer.jpg" },
    rating: { stars: "★★★★☆", count: "4.6", students: "3k students" },
    price: { current: "$15.99", original: "$99.99" },
  },
];

export default function Courses({ onOpenModal }) {
  const [query, setQuery] = useState("");

  const filtered = courses.filter((c) =>
    c.title.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <>
      {/* Hero Section */}
      <section className="courses-hero">
        <div className="hero-content">
          <h1 className="fade-in-up">Explore Unlimited Possibilities</h1>
          <p className="fade-in-up delay-1">
            Master new skills with our top-rated courses.
          </p>

          <div className="search-bar fade-in-up delay-2">
            <i className="fas fa-search"></i>
            <input
              type="text"
              placeholder="What do you want to learn today?"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              onClick={() => {
                /* no-op for now */
              }}
            >
              Search
            </button>
          </div>

          <div className="popular-tags fade-in-up delay-3">
            <span>Popular:</span>
            <span className="tag">Python</span>
            <span className="tag">Web Development</span>
            <span className="tag">Data Science</span>
            <span className="tag">Design</span>
          </div>
        </div>
      </section>

      {/* Filters (visual only) */}
      <section className="filters-container">
        <div className="filter-scroll">
          <button className="filter-chip active">All Courses</button>
          <button className="filter-chip">Development</button>
          <button className="filter-chip">Design</button>
          <button className="filter-chip">Business</button>
          <button className="filter-chip">Marketing</button>
          <button className="filter-chip">Photography</button>
        </div>
      </section>

      {/* Course List */}
      <section className="course-list-section">
        <div className="section-header">
          <h2>Featured Courses</h2>
          <p>Hand-picked by our experts</p>
        </div>

        <div className="course-grid">
          {filtered.map((course, i) => (
            <CourseCard
              key={i}
              course={course}
              onPreview={(c) =>
                onOpenModal?.({
                  title: c.title,
                  body: "Preview content coming soon.",
                })
              }
            />
          ))}
        </div>
      </section>
    </>
  );
}
