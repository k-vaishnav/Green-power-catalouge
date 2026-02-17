import React from "react";
import "../styles/certificates.css";

import iso from "../assets/images/iso.png";
import ce from "../assets/images/ce.png";
import rohs from "../assets/images/rohs.png";
import govt from "../assets/images/govt.jpeg";

const certificates = [
  { name: "ISO Certified", img: iso },
  { name: "CE Certified", img: ce },
  { name: "RoHS Compliance", img: rohs },
  { name: "Government Approved", img: govt },
];

export default function Certificates() {
  return (
    <section className="cert-section" id="certificates">
      <div className="cert-header">
        <h2>Our Certifications</h2>
        <p>
          We adhere to the highest industry standards, ensuring quality, safety,
          and reliability across all our products and services.
        </p>
      </div>

      <div className="cert-grid">
        {certificates.map((cert, index) => (
          <div className="cert-card" key={index}>
            <img src={cert.img} alt={cert.name} />
            <span>{cert.name}</span>
          </div>
        ))}
      </div>
      <div className="trust-stats">
        <div className="stat">
          <h3>5000+</h3>
          <p>Installations</p>
        </div>

        <div className="stat">
          <h3>10+</h3>
          <p>Years Experience</p>
        </div>

        <div className="stat">
          <h3>24/7</h3>
          <p>Support</p>
        </div>

        <div className="stat">
          <h3>100%</h3>
          <p>Quality Assurance</p>
        </div>
      </div>
    </section>
  );
}
