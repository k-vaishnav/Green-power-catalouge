import React, { useEffect, useState } from "react";
import icon from "../assets/icons/ZPS-LOGO.png";
import "../styles/navbar.css";
function Navbar() {
  const [active, setActive] = useState("home");

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "products", label: "Products" },
    { id: "dealer-certificates", label: "Dealer Certificates" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact Us" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const top = window.scrollY;
        const offset = section.offsetTop - 120;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow-sm sticky-top py-3 custom-navbar">
      <div className="container-fluid px-4">
        <a
          href="#home"
          className="navbar-brand d-flex align-items-center brand-wrapper"
        >
          <img src={icon} alt="Logo" width="50" height="45" className="me-2" />

          <div className="d-flex flex-column">
            <span className="brand-title fw-bold">
              Zenith{" "}
              <span className="text-success fw-semibold">Power Systems</span>
            </span>
            <small className="brand-tagline text-muted ">
              Powering India with Reliable Energy
            </small>
          </div>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {navItems.map((item) => (
              <li className="nav-item" key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`nav-link px-3 fw-semibold transition ${
                    active === item.id
                      ? "text-success active-link"
                      : "text-dark"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#contact" className="btn btn-success p-3">
            Get Best Price Now
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
