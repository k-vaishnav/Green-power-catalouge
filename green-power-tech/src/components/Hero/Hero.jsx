import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image1 from "../../assets/images/Image-1.jpg";
import Image2 from "../../assets/images/Image-1.jpeg";
import Image3 from "../../assets/images/Image-2.avif";
import "./hero.css";

const slides = [
  {
    image: Image1,
    heading: "Reliable Energy. Zero Compromise.",
    text: "Advanced battery systems engineered for long life and uninterrupted performance.",
  },
  {
    image: Image2,
    heading: "Power That Never Lets You Down.",
    text: "Smart inverter solutions delivering seamless backup for homes and businesses.",
  },
  {
    image: Image3,
    heading: "Sustainable Power for a Brighter Future.",
    text: "High-efficiency solar solutions designed to reduce energy costs and increase reliability.",
  },
];

function Hero() {
  return (
    <section id= "home" className="hero">
      <Carousel fade controls={true} indicator={true} interval={4000}>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <div className="hero-slide">
              <img src={slide.image} alt="Power Solutions" />

              <div className="hero-overlay"></div>

              <div className="hero-content">
                <h1>{slide.heading}</h1>
                <p>{slide.text}</p>

                <div className="hero-buttons">
                  <a href="#contact" className="btn btn-success me-3">
                    Get Best Price Now
                  </a>
                  <a href="#products" className="btn btn-outline-light btn-2">
                    View Products
                  </a>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}

export default Hero;
