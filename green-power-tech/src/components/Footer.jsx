import React from "react";
import logo from "../assets/icons/ZPS-LOGO.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1 */}
        <div className="footer-col">
          <div className="footer-brand">
            <img
              src={logo}
              alt="PowerTech Energy Logo"
              className="footer-logo-icon"
            />
            <h3 className="footer-logo">Zenith Power System</h3>
          </div>

          <p>
            India's Trusted Manufacturer of Premium Power Equipment & Energy
            Solutions delivering reliable power systems nationwide.
          </p>
        </div>

        {/* Column 2 */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Products</li>
            <li>Dealer Certificates</li>
            <li>Services</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-col">
          <h4>Products</h4>
          <ul>
            <li>Inverters</li>
            <li>Batteries</li>
            <li>UPS Systems</li>
            <li>Solar Panels</li>
            <li>Power Storage</li>
            <li>Lithium Battery</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="footer-col">
          <h4>Contact</h4>

          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <span>Mundka, New Delhi, Delhi</span>
          </div>

          <div className="contact-item">
            <FaPhoneAlt className="contact-icon" />
            <span>+91-8045910957</span>
          </div>

          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <span >info@powersolutionsfactory.in</span>
          </div>

          <div className="social-icons">
            <div className="icon">
              <FaFacebookF />
            </div>
            <div className="icon">
              <FaInstagram />
            </div>
            <div className="icon">
              <FaLinkedinIn />
            </div>
            <div className="icon">
              <FaTwitter />
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 PowerTech Energy. All Rights Reserved.
      </div>
    </footer>
  );
}
