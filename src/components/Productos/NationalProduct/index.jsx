import React, { useEffect, useRef } from "react";
import "./NationalProduct.css";
import img1 from "../../../assets/images/2.jpg";
import img2 from "../../../assets/images/3.webp";

const NationalProduct = () => {
    const infoRef = useRef(null);

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

        if (infoRef.current) {
            observer.observe(infoRef.current);
        }

        return () => {
            if (infoRef.current) {
                observer.unobserve(infoRef.current);
            }
        };
    }, []);

    return (
        <div className="national-product">
            <div className="national-product-images">
                <img src={img1} alt="Product 1" className="national-product-image" />
                <img src={img2} alt="Product 2" className="national-product-image" />
            </div>
            <div className="national-product-info animated" ref={infoRef}>
                <h1 className="national-product-title">NATIONAL PRODUCT</h1>
                <h2 className="national-product-subtitle">MADE IN THE UNITED ARAB EMIRATES.</h2>
                <p className="national-product-description">
                    Proudly, we produce our foods in the United Arab Emirates, meeting the highest 
                    quality standards. Our goal is to offer healthy options that fit a modern and active lifestyle.
                </p>
            </div>
        </div>
    );
};

export default NationalProduct;