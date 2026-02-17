import React from "react";
import "../styles/ctaSection.css";

export default function CTASection() {
  // 👇 WRITE FUNCTION HERE
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    const navbarHeight = 110; // 👈 adjust to your navbar height
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;

    const offsetPosition = elementPosition - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <section className="cta-section">
      <div className="cta-wrapper">
        {/* Customer CTA */}
        <div className="cta-card customer">
          <h2>Ready to Power Your Future?</h2>
          <p>
            Get in touch with us today for the best deals on premium power
            equipment and reliable energy solutions.
          </p>

          <button
            className="cta-btn primary"
            onClick={() => scrollToSection("registration")}
          >
            Get Best Price Now
          </button>
        </div>

        {/* Dealer CTA */}
        <div className="cta-card dealer">
          <h2>Join Our Trusted Dealer Network</h2>
          <p>
            Become an authorized dealer and grow your business with India's
            leading power solutions manufacturer.
          </p>

          <button
            className="cta-btn secondary"
            onClick={() => scrollToSection("registration")}
          >
            Become a Dealer
          </button>
        </div>
      </div>
    </section>
  );
}
