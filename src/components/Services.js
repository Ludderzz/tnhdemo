import React from "react";
import "./Services.css";

const servicesData = [
  { title: "Device Repairs", desc: "Fixing laptops, phones, and tablets." },
  { title: "Training Workshops", desc: "Learn digital skills for free." },
  { title: "Community Support", desc: "Helping those in need with tech." },
];

const Services = () => (
  <section className="services">
    <h2>Our Services</h2>
    <div className="services-grid">
      {servicesData.map((service, idx) => (
        <div key={idx} className="service-card">
          {/* Replace with SVG icon if needed */}
          <div className="service-icon">💻</div>
          <h3>{service.title}</h3>
          <p>{service.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
