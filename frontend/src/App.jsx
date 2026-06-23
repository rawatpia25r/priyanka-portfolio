import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSkills from './components/AboutSkills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import ContactFooter from './components/ContactFooter';

function App() {
  return (
    <div className="bg-[#161616] min-h-screen text-white">
      <Navbar />
      <main>
        <Hero />
        <AboutSkills />
        <Experience />
        <Projects />
        <Education />
      </main>
      <ContactFooter />
    </div>
  );
}

export default App;