import React from "react";
import { Link } from "react-router-dom";
import CourseCard from "../components/CourseCard";

const topCourses = [
  {
    title: "Web Development",
    image: "/image/web.jpg",
    badge: "Popular",
    badgeClass: "best-seller",
    instructor: { name: "Learn HTML, CSS, JavaScript, and modern frameworks." },
  },
  {
    title: "Python Programming",
    image: "/image/python.jpg",
    badge: "New",
    badgeClass: "new",
    instructor: { name: "Master Python basics and problem solving." },
  },
  {
    title: "UI/UX Design",
    image: "/image/ui.jpg",
    badge: "Top Rated",
    badgeClass: "top-rated",
    instructor: { name: "Design beautiful and user-friendly interfaces." },
  },
];

const testimonials = [
  {
    image: "/image/abenezer.jpg",
    name: "Abenezer Seifu",
    quote:
      '"SkillUp Academy helped me master HTML, CSS, and JavaScript. Now I can build real websites confidently!"',
  },
  {
    image: "/image/abiy.jpg",
    name: "Abiy Hailu",
    quote:
      '"Thanks to their Python course, I finally understand programming logic and problem solving."',
  },
  {
    image: "/image/biy.jpg",
    name: "Abiy Aregawi",
    quote:
      '"Their UI/UX lessons improved my design skills. Highly recommended!"',
  },
];

export default function Home({ onOpenModal }) {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="fade-in-up">Learn Coding. Build Your Future.</h1>
          <p className="fade-in-up delay-1">
            Join our learning center and start your tech journey today.
          </p>
          <Link to="/courses" className="btn fade-in-up delay-2">
            Explore Courses
          </Link>
        </div>
      </section>

      {/* Highlights */}
      <section className="highlights">
        <h2>Top Courses</h2>
        <div className="course-grid">
          {topCourses.map((c, i) => (
            <CourseCard
              key={i}
              course={c}
              onPreview={(course) =>
                onOpenModal?.({
                  title: course.title,
                  body: "Course preview coming soon.",
                })
              }
            />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonial">
        <h2>What Our Students Say</h2>
        <div className="testimonial-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <img src={t.image} alt={`Student ${t.name}`} />
              <h3>{t.name}</h3>
              <p>{t.quote}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <h2>Why Choose CodeLearn?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-laptop-code"></i>
            </div>
            <h3>Hands-on Learning</h3>
            <p>
              Build real-world projects and gain practical experience that
              employers value.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-chalkboard-teacher"></i>
            </div>
            <h3>Expert Instructors</h3>
            <p>
              Learn from industry professionals who are passionate about
              teaching and mentoring.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-users"></i>
            </div>
            <h3>Community Support</h3>
            <p>
              Join a vibrant community of learners and get help whenever you
              need it.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-certificate"></i>
            </div>
            <h3>Certification</h3>
            <p>
              Earn a certificate upon completion to showcase your skills to the
              world.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Start Your Journey?</h2>
          <p>
            Join thousands of students who have transformed their careers with
            CodeLearn.
          </p>
          <a
            href="#signup"
            className="btn-white"
            onClick={(e) => {
              e.preventDefault();
              onOpenModal?.({
                title: "Get Started",
                body: "Create an account to begin learning.",
              });
            }}
          >
            Get Started for Free
          </a>
        </div>
      </section>
    </>
  );
}
