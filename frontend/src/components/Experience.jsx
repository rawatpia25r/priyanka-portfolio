import React from 'react';

const Experience = () => {
  const experiences = [
    {
      role: 'Software Development Intern',
      company: 'Bharat Electronics Limited (BEL)',
      date: 'Recent',
      description: [
        'Worked within an enterprise software development team, gaining hands-on exposure to real-world development workflows, coding standards, and collaborative engineering practices.',
        'Reviewed production-grade codebases and participated in code reviews, understanding code quality, optimization techniques, and best practices for maintainable software.',
        'Gained practical insights into team communication, project management processes, and industry-level development practices in a professional setting.'
      ]
    },
    {
      role: 'Frontend Development Trainee',
      company: 'Gyansatra Training Program',
      date: 'Previous',
      description: [
        'Completed hands-on frontend training, building responsive and interactive UI components using HTML, CSS, and JavaScript with focus on usability and performance.',
        'Learned MySQL schema design, normalization concepts, and CRUD operations, applying them in backend development for full-stack applications.',
        'Strengthened understanding of core web development concepts through practical projects and real-world problem-solving approaches.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#161616] relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#b224ef] rounded-full mix-blend-multiply filter blur-[150px] opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f66a42] rounded-full mix-blend-multiply filter blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            My <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-custom mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
            A timeline of my professional journey, highlighting my roles, responsibilities, and the value I've delivered.
          </p>
        </div>

        <div className="relative border-l-2 border-gray-800 ml-3 md:ml-6 space-y-12 pb-4">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-12 group">
              {/* Timeline Indicator */}
              <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-[#161616] border-2 border-gray-600 group-hover:border-[#b224ef] transition-colors duration-300 flex items-center justify-center">
                 <div className="h-1.5 w-1.5 rounded-full bg-transparent group-hover:bg-[#f66a42] transition-colors duration-300"></div>
              </div>

              {/* Card */}
              <div className="bg-[#1a1a1a]/80 backdrop-blur-xl border border-gray-800/60 rounded-2xl p-6 md:p-8 hover:border-[#b224ef]/50 transition-all duration-500 hover:shadow-[0_8px_30px_rgb(178,36,239,0.12)] hover:-translate-y-1 group-hover:bg-[#1a1a1a]">
                
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4 border-b border-gray-800/60 pb-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-gradient transition-all duration-300">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 mt-2">
                       <svg className="w-5 h-5 text-[#f66a42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                       </svg>
                       <p className="text-gray-300 font-medium text-lg">{exp.company}</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-gray-900/80 border border-gray-700/50 text-gray-300 text-sm font-medium w-fit whitespace-nowrap shadow-sm group-hover:border-gray-600 transition-colors">
                    <svg className="w-4 h-4 mr-2 text-[#b224ef]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {exp.date}
                  </span>
                </div>
                
                <ul className="space-y-3">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="flex-shrink-0 w-5 h-5 text-[#b224ef] mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="leading-relaxed text-gray-400 text-[15px] md:text-base group-hover:text-gray-300 transition-colors duration-300">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

