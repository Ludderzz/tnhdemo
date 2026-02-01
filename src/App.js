import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import DarkModeToggle from "./components/DarkModeToggle";
import DonateButton from "./components/DonateButton";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import MailIn from "./components/MailIn";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import ContactForm from "./components/ContactForm";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <DarkModeToggle />
      <Navbar />
      <DonateButton />
      <Hero />
      <Stats />
      <Services />
      <MailIn />
      <Testimonials />
      <Newsletter />
      <ContactForm />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
