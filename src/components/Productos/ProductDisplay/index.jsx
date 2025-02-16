import { useEffect, useRef } from "react";
import "./ProductDisplay.css";

const ProductDisplay = ({
    title,
    image,
    titleColor,
    subtitleColor,
    backgroundColor,
    description,
    textColor
}) => {
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

        const elements = sectionRef.current.querySelectorAll(".animated");
        elements.forEach((el) => observer.observe(el));

        return () => {
            elements.forEach((el) => observer.unobserve(el));
        };
    }, []);

    return (
        <div className="product-display" style={{ backgroundColor }} ref={sectionRef}>
            <h1 className="product-title" style={{ color: titleColor }}>{title}</h1>
            <h2 className="product-subtitle" style={{ color: subtitleColor }}>HEALTHY FOOD</h2>
            <div className="image-container">
                <img src={image} alt={title} className="product-image animated" />
            </div>
            <div className="product-description">
                {description.map((item, index) => (
                    <div
                        key={index}
                        className="description-box animated"
                        style={{ transitionDelay: `${0.5 + index * 0.3}s` }}
                    >
                        <div className="description-line" style={{ backgroundColor: textColor }}></div>
                        <span className="description-value" style={{ color: textColor }}>{item.value}</span>
                        <span className="description-name" style={{ color: subtitleColor }}>{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductDisplay;