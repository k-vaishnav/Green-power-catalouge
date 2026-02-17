import React from "react";
import { CheckCircle, Award, Users, Zap } from "lucide-react";
import "../styles/about.css"
export default function About() {
  return (
    <section id="about" className="about-section  m-5 py-5">
      <div className="container-fluid">
        <h2 className="section-title text-success">ABOUT OUR COMPANY </h2>
        <div className="row align-items-center">
          {/* LEFT SIDE */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <h2 className="about-title">
              India's Trusted Manufacturer of Premium Power Equipment & Energy
              Solutions
            </h2>

            <p className="about-description">
              We are a leading manufacturer delivering cutting-edge inverters,
              batteries, UPS systems, and solar solutions to homes and
              businesses across India. Our commitment to quality and innovation
              makes us the preferred choice for reliable power solutions.
            </p>

            {/* 2x2 Feature Grid */}
            <div className="row g-3 mt-4">
              <div className="col-6">
                <div className="feature-card featured-blue">
                  <CheckCircle size={28} />
                  <h6>Certified Quality</h6>
                </div>
              </div>

              <div className="col-6">
                <div className="feature-card featured-green">
                  <Award size={28} />
                  <h6>15+ Years Experience</h6>
                </div>
              </div>

              <div className="col-6">
                <div className="feature-card featured-purple">
                  <Users size={28} />
                  <h6>10,000+ Users</h6>
                </div>
              </div>

              <div className="col-6">
                <div className="feature-card featured-orange">
                  <Zap size={28} />
                  <h6>Energy Efficient</h6>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE – STATS */}
          <div className="col-lg-6">
            <div className="stats-grid">
              <div className="stat-card stat-blue">
                <h3>15+</h3>
                <p className="text-muted">Years Experience</p>
              </div>

              <div className="stat-card stat-green">
                <h3>500+</h3>
                <p className="tetx-muted">Dealer Network</p>
              </div>

              <div className="stat-card stat-purple">
                <h3>50+</h3>
                <p className="text-muted">Product Range</p>
              </div>

              <div className="stat-card stat-orange">
                <h3>10K+</h3>
                <p className="text-muted">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>

        {/* COMPANY DETAILS CARD */}
        <div className="company-card mt-5">
          <div className="company-header">
            <h4>Company Details</h4>
            <div className="header-line"></div>
          </div>
          <div className="company-grid">
            <div className="company-item">
              <span className="fs-5 text-dark fw-semibold mb-1">
                Nature Of Business
              </span>
              <strong className="text-muted">Manufacturer</strong>
            </div>

            <div className="company-item">
              <span className="fs-5 text-dark fw-semibold mb-1">Employees</span>
              <strong className="text-muted">120+</strong>
            </div>

            <div className="company-item">
              <span className="fs-5 text-dark fw-semibold mb-1">
                Legal Status
              </span>
              <strong className="text-muted">Private Limited Company</strong>
            </div>

            <div className="company-item">
              <span className="fs-5 text-dark fw-semibold mb-1">
                Annual Turnover
              </span>
              <strong className="text-muted">₹50 Crore+</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
