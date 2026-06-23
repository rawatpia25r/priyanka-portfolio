import React from 'react';

const Education = () => {
  const educationData = [
    {
      period: '2023 - Present',
      degree: 'B.Tech in Computer Science & Engineering',
      institution: 'Dev Bhoomi Uttarakhand University',
      location: 'Dehradun, India',
      score: 'CGPA: 9.4'
    },
    {
      period: '2022 - 2023',
      degree: 'Class XII (CBSE)',
      institution: 'MKVN Senior Secondary School',
      location: '',
      score: 'GRADE: 88%'
    }
  ];

  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#161616] relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            My <span className="text-gradient">Education</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-custom mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
            Academic qualifications and educational background that shaped my technical foundation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <div 
              key={index} 
              className="group relative bg-[#1a1a1a] rounded-3xl p-8 border border-gray-800/60 hover:border-[#7579ff]/50 transition-all duration-500 overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(117,121,255,0.15)] flex flex-col h-full"
            >
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#7579ff]/10 to-[#b224ef]/10 rounded-bl-full -mr-10 -mt-10 transition-transform duration-700 group-hover:scale-110"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-8">
                  <div className="inline-flex items-center justify-center p-3.5 bg-gray-900/80 rounded-2xl border border-gray-800 shadow-sm group-hover:border-[#7579ff]/40 transition-colors duration-300">
                    <svg className="w-7 h-7 text-[#7579ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                  </div>
                  <span className="px-5 py-2 bg-gradient-to-r from-[#b224ef] to-[#7579ff] text-white text-sm font-bold rounded-full shadow-lg">
                    {edu.period}
                  </span>
                </div>

                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-3 leading-snug group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                    {edu.degree}
                  </h3>
                  
                  <p className="text-[#f66a42] font-semibold text-lg mb-6">
                    {edu.institution}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-6 border-t border-gray-800/60 mt-auto">
                  <div className="flex items-center text-gray-400 mb-4 sm:mb-0">
                    {edu.location ? (
                      <>
                        <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-sm font-medium">{edu.location}</span>
                      </>
                    ) : (
                      <span className="text-sm font-medium opacity-0">Hidden</span>
                    )}
                  </div>
                  <div className="px-5 py-2.5 bg-gray-900/80 rounded-xl border border-gray-800 shadow-inner group-hover:border-[#b224ef]/30 transition-colors duration-300">
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b224ef] to-[#7579ff] font-bold tracking-wide">
                       {edu.score}
                     </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
