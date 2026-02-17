import React, { useState } from "react";
import "../styles/contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        {/* LEFT SIDE - INFO */}
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>We’re here to support your business needs.</p>

          <div className="info-box">
            <h4>📍 Address</h4>
            <p>123 Business Street, Industrial Area</p>
          </div>

          <div className="info-box">
            <h4>📞 Phone</h4>
            <p>+91 98765 43210</p>
          </div>

          <div className="info-box">
            <h4>✉ Email</h4>
            <p>info@yourcompany.com</p>
          </div>

          <div className="info-box">
            <h4>🕒 Business Hours</h4>
            <p>Monday – Friday: 9:00 AM – 6:00 PM</p>
            <p>Saturday: 10:00 AM – 2:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="contact-form-container">
          <form onSubmit={handleSubmit} className="contact-form">

            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <label>Name</label>
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label>Email</label>
            </div>

            <div className="form-group">
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <label>Message</label>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>

            {success && (
              <div className="success-message">
                ✅ Message Sent Successfully!
              </div>
            )}

          </form>
        </div>

      </div>
    </section>
  );
}
