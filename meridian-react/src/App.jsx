import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/Hero/HeroSection';
import AboutSection from './components/About/AboutSection';
import ServicesSection from './components/Services/ServicesSection';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import ProcessSection from './components/Process/ProcessSection';
import StatsBand from './components/StatsBand/StatsBand';
import TestimonialsSection from './components/Testimonials/TestimonialsSection';
import GallerySection from './components/Gallery/GallerySection';
import FAQSection from './components/FAQ/FAQSection';
import ContactSection from './components/Contact/ContactSection';
import Footer from './components/Footer/Footer';
import FloatingUI from './components/Floating/FloatingUI';
import { useScrollReveal } from './hooks/useScrollReveal';
import './App.css';

export default function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  useScrollReveal([theme]);

  return (
    <div className="app-root">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUs />
        <ProcessSection />
        <StatsBand />
        <TestimonialsSection />
        <GallerySection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingUI />
    </div>
  );
}
