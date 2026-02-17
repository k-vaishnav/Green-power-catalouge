import React from "react";
import About from "../components/About";
import Hero from "../components/Hero/Hero";
import Products from "../components/Products";
import Certificates from "../components/Certificates";
import Services from "../components/Services";
import Registration from "../components/Registration";
import Contact from "../components/Contact";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

export default function Home() {
  return (
     <>
      <Hero />
      <About />
      <Products />
      <Services />
      <Certificates />
      <CTASection />
      <Registration />
      <Contact />
      <Footer />
    </>
  );
}
