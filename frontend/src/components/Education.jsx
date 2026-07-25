import React, { useEffect, useRef, useState } from 'react';

// Custom Hook for Scroll Reveal using Intersection Observer
const useScrollReveal = (options = { threshold: 0.1 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect(); // Ensure animation runs only once
      }
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options.threshold]);

  return [ref, isVisible];
};

// Inline SVG Icons
const Icons = {
  GraduationCap: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
    </svg>
  ),
  School: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
      <path d="M22 9 12 2 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9Z"/>
      <path d="M9 22V12h6v10M2 10.6L12 4l10 6.6"/>
    </svg>
  ),
  Book: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    </svg>
  ),
  Calendar: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-[#b224ef]">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  ),
  Star: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#f66a42]">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  ),
  CircleDot: ({ completed }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-4 h-4 ${completed ? 'text-gray-400' : 'text-green-400'}`}>
      <circle cx="12" cy="12" r="10"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  )
};

const EducationCard = ({ edu, index }) => {
  const [ref, isVisible] = useScrollReveal();
  
  return (
    <div 
      ref={ref}
      className={`h-full transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="group relative bg-white/[0.03] backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-[#7579ff]/40 transition-all duration-300 overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(117,121,255,0.2)] flex flex-col h-full hover:bg-white/[0.05]">
        
        {/* Decorative Gradient Top Right */}
        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${edu.color} opacity-5 rounded-bl-full -mr-4 -mt-4 transition-transform duration-500 group-hover:scale-125 group-hover:opacity-10 z-0`}></div>
        
        <div className="relative z-10 flex flex-col h-full">
          {/* Header: Icon & Duration */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-8">
            <div className="inline-flex items-center justify-center p-3.5 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.02)] group-hover:border-[#7579ff]/40 group-hover:shadow-[0_0_20px_rgba(117,121,255,0.15)] transition-all duration-300">
              <div className="transform group-hover:-translate-y-1 group-hover:rotate-[5deg] transition-transform duration-300">
                <edu.icon />
              </div>
            </div>
            
            <div className="px-4 py-1.5 bg-white/5 backdrop-blur-md border border-white/10 text-white text-xs font-bold rounded-full shadow-sm flex items-center gap-1.5 transition-colors self-start cursor-default">
              <Icons.Calendar />
              {edu.period}
            </div>
          </div>

          <div className="flex-grow">
            <h3 className="text-2xl font-bold text-white mb-2 leading-snug group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
              {edu.degree}
            </h3>
            <p className="text-gray-400 font-medium text-base mb-6">
              {edu.institution}
            </p>
          </div>

          <div className="flex flex-col xl:flex-row gap-3 pt-6 border-t border-white/10 mt-auto justify-between xl:items-center">
            <div className="px-3 py-1.5 bg-white/5 backdrop-blur-md rounded-lg border border-white/10 flex items-center gap-2 transition-colors w-fit cursor-default">
              <Icons.Star />
              <span className="text-white text-sm font-bold tracking-wide">
                {edu.score}
              </span>
            </div>
            
            <div className="px-3 py-1.5 bg-white/5 backdrop-blur-md rounded-lg border border-white/10 flex items-center gap-2 transition-colors w-fit cursor-default">
              <Icons.CircleDot completed={edu.status === 'Completed'} />
              <span className={`text-sm font-bold ${edu.status === 'Completed' ? 'text-gray-300' : 'text-green-400'}`}>
                {edu.status}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Education = () => {
  const [headerRef, headerVisible] = useScrollReveal();

  const educationData = [
    {
      period: '2023 — Present',
      degree: 'B.Tech in Computer Science & Engineering',
      institution: 'Dev Bhoomi Uttarakhand University',
      score: 'CGPA 9.4 / 10',
      status: 'Currently Pursuing',
      icon: Icons.GraduationCap,
      color: 'from-[#7579ff] to-[#b224ef]'
    },
    {
      period: '2022 — 2023',
      degree: 'Class XII (CBSE)',
      institution: 'MKVN Senior Secondary School',
      score: '88%',
      status: 'Completed',
      icon: Icons.School,
      color: 'from-[#b224ef] to-[#ff758c]'
    },
    {
      period: '2021 — 2022',
      degree: 'Class X (CBSE)',
      institution: 'Daffodils Public School',
      score: '93%',
      status: 'Completed',
      icon: Icons.Book,
      color: 'from-[#ff758c] to-[#ff7eb3]'
    }
  ];

  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#161616] relative overflow-hidden">
      {/* Subtle Background Enhancements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-[#7579ff]/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-[#b224ef]/5 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDM5LjVoNDBWNDBINHptMzkuNSAwdjQwSDQwVjB6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIi8+PC9zdmc+')] opacity-50"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 md:mb-24 transition-all duration-700 ease-out transform ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            My <span className="text-gradient">Education</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#7579ff] to-[#b224ef] mx-auto rounded-full mb-6 shadow-[0_0_15px_rgba(178,36,239,0.3)]"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Academic journey that built the foundation of my technical skills and software development career.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {educationData.map((edu, index) => (
            <EducationCard key={index} edu={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
