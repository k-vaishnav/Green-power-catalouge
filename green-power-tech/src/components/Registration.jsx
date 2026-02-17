import React, { useState } from "react";
import "../styles/registration.css";

export default function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.includes("@"))
      newErrors.email = "Valid email required";
    if (formData.phone.length < 10)
      newErrors.phone = "Enter valid phone number";
    if (!formData.business.trim())
      newErrors.business = "Business name required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      setErrors({});
      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          business: "",
        });
      }, 3000);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <section id="registration" className="registration-section">
      <div className="registration-container">
        <h2>Get In Touch</h2>
        <h3>Request a Quote Today</h3>
        <p>
          Share your requirements and our team will get back to you with
          the best pricing and solutions.
        </p>

        <form onSubmit={handleSubmit} className="registration-form">

          {/* Name */}
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder=""
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label>Name</label>
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          {/* Email */}
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder=""
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label>Email</label>
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          {/* Phone */}
          <div className="form-group">
            <input
              type="tel"
              name="phone"
              placeholder=""
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <label>Phone</label>
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>

          {/* Business */}
          <div className="form-group">
            <input
              type="text"
              name="business"
              placeholder=""
              value={formData.business}
              onChange={handleChange}
              required
            />
            <label>Business Name</label>
            {errors.business && (
              <span className="error">{errors.business}</span>
            )}
          </div>

          <button type="submit" className="submit-btn">
            Submit Request
          </button>

          {success && (
            <div className="success-message">
              ✅ Request Submitted Successfully!
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
