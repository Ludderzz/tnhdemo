import React, { useEffect, useState } from "react";
import "./DarkModeToggle.css";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const body = document.body;
    darkMode ? body.classList.add("dark-mode") : body.classList.remove("dark-mode");
  }, [darkMode]);

  return (
    <button className="darkmode-toggle" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;
