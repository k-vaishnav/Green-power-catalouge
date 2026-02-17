import React from "react";
import "../styles/products.css";

import solarPanels from "../assets/images/image-1.jpg";
import plateBattery from "../assets/images/plateBattery.jpeg";
import LithiumBattery from "../assets/images/image-1.jpeg";
import solarInverter from "../assets/images/solar-inverter.jpeg";

const products = [
  {
    title: "Solar Panels",
    desc: "High-efficiency photovoltaic panels engineered for maximum solar output.",
    img: solarPanels,
    points: ["22% Efficiency", "Weather Resistant", "25 Year Output Warranty"],
    level: "High Efficiency",
  },
  {
    title: "Tubular Battery 150Ah",
    desc: "Reliable deep-cycle battery with 5-year warranty.",
    img: solarInverter,
    points: ["5 Year Warranty", "Low Maintenance", "Deep Cycle Safe"],
    level: "Standard Performance",
  },
  {
    title: "Tubular Battery 180Ah",
    desc: "Extended backup solution designed for long life.",
    img: LithiumBattery,
    points: ["Extra Long Life", "Fast Charging", "Heavy Duty Plates"],
    level: "Advanced Performance",
  },
  {
    title: "Flat Plate Battery 100Ah",
    desc: "Compact and maintenance-free power storage solution.",
    img: plateBattery,
    points: ["Maintenance Free", "Compact Design", "High Durability"],
    level: "Reliable Performance",
  },
  {
    title: "Lithium Battery 150Ah",
    desc: "Premium-grade performance for heavy power needs.",
    img: LithiumBattery,
    points: ["Lightweight", "Long Lifecycle", "Fast Recharge"],
    level: "Premium Performance",
  },
  {
    title: "Home UPS System",
    desc: "Pure sine wave UPS for stable and uninterrupted power.",
    img: solarInverter,
    points: ["Pure Sine Wave", "Silent Operation", "Smart Protection"],
    level: "Stable Output",
  },
];

export default function Products() {
  return (
    <section className="products-section" id="products">
      <div className="products-header">
        <h2>Our Product Range</h2>
        <p>
          Premium Power Equipment & Energy Solutions built for durability,
          efficiency, and long-term performance.
        </p>
      </div>

      <div className="products-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <div className="product-img">
              <img src={product.img} alt={product.title} />
              <div className="performance-badge">{product.level}</div>
            </div>

            <div className="product-content">
              <h3>{product.title}</h3>
              <p>{product.desc}</p>

              <ul className="product-points">
                {product.points.map((point, i) => (
                  <li key={i}>✔ {point}</li>
                ))}
              </ul>

              <a href="#registration" className="product-btn">
                Request Dealer Quote
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
