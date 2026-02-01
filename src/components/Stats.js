import React from "react";
import "./Stats.css";

const statsData = [
  { number: "500+", label: "Devices Refurbished" },
  { number: "1200+", label: "People Trained" },
  { number: "300+", label: "Volunteers Engaged" },
];

const Stats = () => {
  return (
    <section className="stats">
      {statsData.map((stat, index) => (
        <div key={index} className="stat-card">
          <h2>{stat.number}</h2>
          <p>{stat.label}</p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
