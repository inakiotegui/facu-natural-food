import React, { useState, useEffect, useRef } from "react";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

const ContactForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const formRef = useRef(null);
    const socialRef = useRef(null);
    const [hasAppeared, setHasAppeared] = useState(false);
    const [socialHasAppeared, setSocialHasAppeared] = useState(false);

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

        if (formRef.current) observer.observe(formRef.current);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const socialObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setSocialHasAppeared(true);
                    socialObserver.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        if (socialRef.current) socialObserver.observe(socialRef.current);

        return () => socialObserver.disconnect();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(formData.email)) {
            setError("Por favor, ingresa un email válido.");
            return;
        }

        setIsLoading(true);
        setError("");

        const emailParams = {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
        };

        const serviceID = "facufood-mail-sender";
        const templateID = "contact_form_facufood";

        emailjs
            .send(serviceID, templateID, emailParams, "2MKKl8lPuSa0lwI7h")
            .then(() => {
                alert("Mensaje enviado con éxito");
                setFormData({ name: "", email: "", message: "" });
            })
            .catch((error) => {
                console.error("Error al enviar el mensaje:", error);
                setError("Ocurrió un error al enviar el mensaje, intenta nuevamente.");
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <div className="contact-form">
            <h1 className="contact-title">CONTACT US</h1>
            {error && <p className="error-message">{error}</p>}
            <form
                ref={formRef}
                className={`form ${hasAppeared ? "animate-left" : ""}`}
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input-field"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input-field"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Message"
                    className="textarea-field"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
                <button type="submit" className="submit-button" disabled={isLoading}>
                    {isLoading ? "Sending..." : "Send"}
                </button>
            </form>
            <div ref={socialRef} className={`social-icons ${socialHasAppeared ? "animate-up" : ""}`}>
                <a href="#" className="icon linkedin"><FaLinkedin /></a>
                <a 
                    href="https://www.instagram.com/facunaturalfood" 
                    className="icon instagram" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <FaInstagram />
                </a>
                <a href="#" className="icon facebook"><FaFacebook /></a>
            </div>
        </div>
    );
};

export default ContactForm;