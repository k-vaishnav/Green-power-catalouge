import React from "react";
import "../styles/services.css";
import {
  FaShieldAlt,
  FaTools,
  FaCalendarCheck,
  FaHeadset,
  FaMapMarkedAlt,
  FaChalkboardTeacher,
} from "react-icons/fa";

const services = [
  {
    title: "Warranty Support",
    desc: "Comprehensive warranty coverage ensuring long-term product reliability.",
    icon: <FaShieldAlt />,
  },
  {
    title: "Professional Installation",
    desc: "Certified technicians provide safe and efficient installation services.",
    icon: <FaTools />,
  },
  {
    title: "Annual Maintenance",
    desc: "Routine inspections and preventive care to maximize system lifespan.",
    icon: <FaCalendarCheck />,
  },
  {
    title: "24/7 Customer Support",
    desc: "Round-the-clock assistance to resolve issues quickly and efficiently.",
    icon: <FaHeadset />,
  },
  {
    title: "Site Survey",
    desc: "Detailed on-site assessment to design optimized energy solutions.",
    icon: <FaMapMarkedAlt />,
  },
  {
    title: "Training Programs",
    desc: "Hands-on training sessions for safe and effective system usage.",
    icon: <FaChalkboardTeacher />,
  },
];

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-header">
        <h2>Our Services</h2>
        <h3>Comprehensive Support & Services</h3>
        <p>
          From installation to maintenance, we provide end-to-end services to
          ensure your power systems operate at peak performance.
        </p>
        <p>Komal</p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">
              {service.icon}
            </div>

            <h4>{service.title}</h4>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>

      <div className="services-cta">
        <a href="#registration" className="services-btn">
          Explore Services
        </a>
      </div>
    </section>
  );
}
