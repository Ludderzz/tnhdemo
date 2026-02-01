import React from "react";
import "./Hero.css";
import { motion } from "framer-motion";
import heroBg from "../assets/images/hero-background.avif";

const Hero = () => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Tech That Empowers Everyone
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        We repair, train, and refurbish technology to support our community.
      </motion.p>
      <div className="hero-buttons">
        <button className="btn-primary">Get Help</button>
        <button className="btn-secondary">Support Us</button>
      </div>
    </section>
  );
};

export default Hero;
