import React, { useState, useEffect, useRef } from "react";
import food1 from "../../../assets/food/1.png";
import emoji1 from "../../../assets/emojis/1.png";
import emoji2 from "../../../assets/emojis/2.png";
import emoji3 from "../../../assets/emojis/3.png";

import "./SecondComponent.css";

const features = [
  { id: 1, icon: emoji1, text: "NATURAL INGREDIENTS CAREFULLY SELECTED" },
  { id: 2, icon: emoji2, text: "100% GLUTEN-FREE, SUITABLE FOR CELIACS" },
  { id: 3, icon: emoji3, text: "NATIONAL PRODUCT MADE IN THE UNITED ARAB EMIRATES" },
];

export default function SecondComponent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showCards, setShowCards] = useState([false, false, false]);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      features.forEach((_, index) => {
        setTimeout(() => {
          setShowCards((prev) => {
            const updated = [...prev];
            updated[index] = true;
            return updated;
          });
        }, 300 + index * 300);
      });
    }
  }, [isVisible]);

  return (
    <div className="feature-container" ref={containerRef}>
      <div className="feature-top">
        <img src={food1} alt="Imagen de ejemplo" className={`c ${isVisible ? "animated-left" : ""}`} />
        <div className={`feature-text ${isVisible ? "animated-right" : ""}`}>
          <h1 className="feature-title">FACU NATURAL FOOD</h1>
          <h2 className="feature-subtitle">EATING HEALTHY IS A SMART DECISION</h2>
          <p className="feature-description">
            At Facu Natural Food, we believe in the importance of a balanced, gluten-free diet. We produce natural foods without additives or artificial preservatives, ensuring quality and flavor without compromising your well-being.
          </p>
        </div>
      </div>
      <div className="feature-bottom">
        {features.map((feature, index) => (
          <div key={feature.id} className={`feature-card ${showCards[index] ? "animated-bottom" : ""}`}>
            <div className="feature-icon-container">
              <img src={feature.icon} alt="Icono" className="feature-icon" />
            </div>
            <div className="feature-text-container">
              <p className="feature-text-p">{feature.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}