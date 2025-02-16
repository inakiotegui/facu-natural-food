import { useEffect, useRef } from "react";
import product1 from "../../../assets/food/pack1.png";
import product2 from "../../../assets/food/pack2.png";
import product3 from "../../../assets/food/pack3.png";
import product4 from "../../../assets/food/pack4.png";

import "./FirstComponent.css";

const products = [
  { id: 1, image: product1, title: "VEGGIE BURGER", subtitle: "Trans Fat-Free" },
  { id: 2, image: product2, title: "HUMMUS", subtitle: "Trans Fat-Free" },
  { id: 3, image: product3, title: "FRIED PEAS", subtitle: "Trans Fat-Free" },
  { id: 4, image: product4, title: "FALAFEL", subtitle: "Trans Fat-Free" },
];

export default function FirstComponent() {
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

    const elements = sectionRef.current.querySelectorAll(".product-first-card");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="products-container" ref={sectionRef}>
      {products.map((product, index) => (
        <div key={product.id} className="product-first-card" style={{ transitionDelay: `${index * 0.3}s` }}>
          <img src={product.image} alt={product.title} className="product-first-image" />
          <h3 className="product-first-title">{product.title}</h3>
          <p className="product-first-subtitle">{product.subtitle}</p>
        </div>
      ))}
    </div>
  );
}