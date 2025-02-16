import { useEffect, useRef } from "react";
import "./ThirdComponent.css";
import imageRight from "../../../assets/images/1.png";

export default function ThirdComponent() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = sectionRef.current.querySelectorAll(".third-text h1, .third-text p");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="third-container" ref={sectionRef}>
      <div className="third-text">
        <h1 className="third-title">OUR VISION</h1>
        <p className="third-description">
          To promote a healthy lifestyle through high-quality products accessible
          to everyone. We focus on innovation and excellence to provide nutritious
          options that contribute to daily well-being.
        </p>

        <h1 className="third-subtitle">WHY CHOOSE<br/>FACU NATURAL FOOD?</h1>
        <p className="third-description">
          <b>Gluten-Free:</b> Safety and trust in every product.<br/><br/>
          <b>Natural Ingredients:</b> No chemicals or artificial preservatives.<br/><br/>
          <b>Nutrition Without Sacrifice:</b> Healthy food without losing the pleasure of great taste.<br/><br/>
          <b>Commitment to Quality:</b> Controlled production process to ensure the best.
        </p>
      </div>
      <div className="third-image-container">
        <div className="third-overlay"/> 
        <img src={imageRight} alt="Natural Food" className="third-image" />
      </div>
    </div>
  );
}