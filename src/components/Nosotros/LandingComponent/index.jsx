import React, { useState, useEffect } from "react";
import "./LandingComponent.css";
import logo from "../../../assets/logos/logo1.png";
import background from "../../../assets/backgrounds/bg2.jpg";

const LandingComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showFirstButton, setShowFirstButton] = useState(false);
  const [showSecondButton, setShowSecondButton] = useState(false);

  useEffect(() => {
    const logoTimer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    const firstButtonTimer = setTimeout(() => {
      setShowFirstButton(true);
    }, 500);

    const secondButtonTimer = setTimeout(() => {
      setShowSecondButton(true);
    }, 1000);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(firstButtonTimer);
      clearTimeout(secondButtonTimer);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="landing-container">
      <div className="overlay" />
      <img src={background} alt="Fondo" className="landing-background-image" />
      <div className="landing-content">
        <img src={logo} alt="Logo" className={`landing-logo ${isVisible ? "animated" : ""}`} />
        <div className="landing-buttons">
          <button
            className={`landing-btn ${showFirstButton ? "animated" : ""}`}
            onClick={() => scrollToSection("#products-section")}
          >
            Products
          </button>
          <button
            className={`landing-btn ${showSecondButton ? "animated" : ""}`}
            onClick={() => scrollToSection("#contact-section")}
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingComponent;