import React from "react";
import "./Newsletter.css";

const Newsletter = () => (
  <section className="newsletter">
    <h2>Join Our Newsletter</h2>
    <p>Get updates on events, workshops, and donation drives.</p>
    <form>
      <input type="email" placeholder="Enter your email" required />
      <button type="submit" className="btn-primary">Subscribe</button>
    </form>
  </section>
);

export default Newsletter;
