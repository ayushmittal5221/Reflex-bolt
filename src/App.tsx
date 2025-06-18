import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Plans from './components/Plans';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import WhyReflex from './components/WhyReflex';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        if (!href) return;
        
        const targetElement = document.querySelector(href);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className="font-['Inter',sans-serif] text-gray-800">
      <Header />
      <Hero />
      <Plans />
      <Features />
      <Testimonials />
      <WhyReflex />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;