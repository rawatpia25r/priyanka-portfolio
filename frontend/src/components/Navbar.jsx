import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About Me', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const sectionIds = ['home', 'about', 'experience', 'education', 'projects', 'contact'];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed w-full z-50 bg-[#161616]/95 backdrop-blur-sm border-b border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 w-1/4">
            <a href="#home" className="text-[28px] font-bold text-white tracking-wide relative inline-block">
              Priyanka
              <svg className="absolute -bottom-1.5 right-0 w-10 text-[#e400ff]" viewBox="0 0 100 30" fill="currentColor">
                <path d="M0 15 Q 50 30 100 0 Q 50 20 0 15 Z" />
              </svg>
            </a>
          </div>

          {/* Links (Center) */}
          <div className="hidden md:flex flex-1 justify-center space-x-6 lg:space-x-8">
            {links.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative text-[14px] lg:text-[15px] font-medium transition-colors duration-300 py-1 ${isActive ? 'text-white' : 'text-gray-400 hover:text-gray-200'
                    }`}
                >
                  {link.name}
                  {/* Active underline indicator */}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-[#b224ef] to-[#7579ff] rounded-full transition-all duration-300 ${isActive ? 'w-full opacity-100' : 'w-0 opacity-0'
                      }`}
                  />
                </a>
              );
            })}
            <a
              href="/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-[14px] lg:text-[15px] font-medium transition-colors duration-300 py-1 text-gray-400 hover:text-gray-200"
            >
              Resume
            </a>
          </div>

          {/* Button (Right) */}
          <div className="hidden md:flex w-1/4 justify-end">
            <a
              href="#contact"
              className="bg-gradient-custom text-white px-7 py-2.5 rounded-full font-medium text-[15px] hover:opacity-90 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(178,36,239,0.3)] hover:-translate-y-0.5"
            >
              Connect With Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden w-1/4 justify-end">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#161616]/98 backdrop-blur-sm border-t border-white/[0.04]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive
                      ? 'text-white bg-[#b224ef]/10 border-l-2 border-[#b224ef]'
                      : 'text-gray-300 hover:text-white'
                    }`}
                >
                  {link.name}
                </a>
              );
            })}
            <a
              href="/resume"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium transition-colors text-gray-300 hover:text-white"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
