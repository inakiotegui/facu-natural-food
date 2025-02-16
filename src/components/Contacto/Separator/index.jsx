import React, { useState } from "react";
import "./Separator.css";
import separatorImage from "../../../assets/backgrounds/bg4.jpeg";

const Separator = () => {
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { width, height, left, top } = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - left) / width - 0.5) * 20;
        const y = ((e.clientY - top) / height - 0.5) * 20;
        setOffset({ x, y });
    };

    const handleMouseLeave = () => {
        setOffset({ x: 0, y: 0 });
    };

    return (
        <div 
            className="separator"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className="overlay"></div>
            <img 
                src={separatorImage} 
                alt="Separator" 
                className="separator-image" 
                style={{ transform: `scale(1.1) translate(${offset.x}px, ${offset.y}px)` }}
            />
        </div>
    );
};

export default Separator;