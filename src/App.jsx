// src/App.jsx
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CounterSection from "./components/CounterSection";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import WhyChoose from "./components/WhyChoose";
import AreasSection from "./components/AreasSection";
import "./App.css";
import TestimonialSection from "./components/TestimonialSection";
import FAQ from "./components/FAQ";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Counter Section */}
      <CounterSection />

      {/* Services Section */}
      <Services />

      {/* About Us Section */}
      <AboutUs />

      {/* Why Choose Section */}
      <WhyChoose />

      {/* Areas We Serve Section */}
      <AreasSection />

      {/* Testimonial Section */}
      <TestimonialSection />   {/* <-- Inserted here */}
      <FAQ />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
