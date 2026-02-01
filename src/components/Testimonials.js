import React from "react";
import "./Testimonials.css";

const testimonialsData = [
  { name: "Alice", text: "TNH helped me fix my laptop for free!" },
  { name: "Bob", text: "Great workshops, I learned so much." },
  { name: "Charlie", text: "Amazing community support, very grateful." },
];

const Testimonials = () => (
  <section className="testimonials">
    <h2>What People Say</h2>
    <div className="testimonials-grid">
      {testimonialsData.map((t, idx) => (
        <div key={idx} className="testimonial-card">
          <p>"{t.text}"</p>
          <h4>- {t.name}</h4>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
