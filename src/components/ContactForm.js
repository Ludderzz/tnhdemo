import React from "react";
import "./ContactForm.css";

const ContactForm = () => (
  <section className="contact-form">
    <h2>Contact Us</h2>
    <form>
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" required></textarea>
      <button type="submit" className="btn-primary">Send Message</button>
    </form>
  </section>
);

export default ContactForm;
