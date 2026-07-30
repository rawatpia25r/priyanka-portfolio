import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSkills from './components/AboutSkills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import ContactFooter from './components/ContactFooter';

function App() {
  const [loading, setLoading] = useState(true);

  // Loading animation
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  // Scroll reveal for sections
  useEffect(() => {
    if (loading) return;

    const revealElements = document.querySelectorAll('.reveal-on-scroll');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [loading]);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-[#161616] flex items-center justify-center z-[200]">
        <div className="text-center animate-fadeIn">
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wide">
            <span className="text-gradient">Priyanka</span> Rawat
          </h1>
          <div className="w-16 h-0.5 bg-gradient-custom mx-auto mt-4 rounded-full animate-pulse"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#161616] min-h-screen text-white animate-fadeInUp">
      <Navbar />
      <main>
        <Hero />
        <div className="reveal-on-scroll"><AboutSkills /></div>
        <div className="reveal-on-scroll"><Experience /></div>
        <div className="reveal-on-scroll"><Projects /></div>
        <div className="reveal-on-scroll"><Education /></div>
      </main>
      <div className="reveal-on-scroll"><ContactFooter /></div>
    </div>
  );
}

export default App;