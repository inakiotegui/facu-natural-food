import { useState, useEffect } from "react";
import logo from "../../assets/logos/logo2.png";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("inicio");
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });

    return () => {
      links.forEach((link) =>
        link.removeEventListener("click", () => {})
      );
    };
  }, []);

  useEffect(() => {
    const updateNavWidth = () => {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);
    };
  
    updateNavWidth();
    window.addEventListener("resize", updateNavWidth);
    
    return () => window.removeEventListener("resize", updateNavWidth);
  }, []);

  const navItems = [
    { id: "about-us", label: "About Us", path: "#landing-section" },
    { id: "products", label: "Products", path: "#products-section" },
    { id: "contact-us", label: "Contact Us", path: "#contact-section" },
  ];

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="logo">
          <a href="#landing-section">
            <img src={logo} alt="Logo-TG" />
          </a>
        </div>
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.path}
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => setActive(item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button className="menu-btn" onClick={toggleMenu}>
          {menuOpen ? "\u274C" : "\u2630"}
        </button>
      </div>
      {menuOpen && (
        <ul className="mobile-menu">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.path}
                className={active === item.id ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  const targetId = item.path.substring(1);
                  const targetElement = document.getElementById(targetId);
                  if (targetElement) {
                    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                  setTimeout(() => setMenuOpen(false), 300);
                  setActive(item.id);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}