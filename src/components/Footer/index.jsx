import React, { useState, useEffect, useRef } from "react";
import logo from "../../assets/logos/logo5.png"; 
import "./Footer.css";

const smoothScroll = (event, targetId) => {
    event.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
        window.scrollTo({
            top: target.offsetTop,
            behavior: "smooth"
        });
    }
};

const Footer = () => {
    const [hasAppeared, setHasAppeared] = useState(false);
    const footerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasAppeared(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        if (footerRef.current) observer.observe(footerRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <footer ref={footerRef} className="footer">
            <div className={`footer-links ${hasAppeared ? "animate-left" : ""}`}>
                <a href="#landing-section" onClick={(e) => smoothScroll(e, "#landing-section")}>About Us</a>
                <a href="#products-section" onClick={(e) => smoothScroll(e, "#products-section")}>Products</a>
                <a href="#contact-section" onClick={(e) => smoothScroll(e, "#contact-section")}>Contact Us</a>
            </div>
            <img src={logo} alt="Logo" className={`footer-logo ${hasAppeared ? "animate-right" : ""}`} />
        </footer>
    );
};

export default Footer;