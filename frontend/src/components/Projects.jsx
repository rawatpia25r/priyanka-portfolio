import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Resume Analyzer',
      tech: 'React.js, Node.js, MongoDB',
      description: [
        'Built a full-stack ATS resume analyzer using React.js, Node.js, and MongoDB to evaluate resumes and improve keyword-based job matching.',
        'Developed RESTful APIs to parse resumes, extract structured data, and calculate ATS keyword compatibility scores efficiently.',
        'Implemented real-time resume analysis system to deliver instant feedback and enhance overall user experience.',
        'Designed a responsive and user-friendly interface with drag-and-drop file upload for seamless interaction across devices.',
        'Optimized backend performance by minimizing redundant API calls and improving data processing speed for faster response times.'
      ],
      link: '#'
    },
    {
      title: 'Live Coding Interview Platform',
      tech: 'React.js, Flask, SQLite',
      description: [
        'Built a real-time collaborative full-stack coding platform using React and Flask to simulate technical interview environments and enable seamless interviewer–candidate interaction.',
        'Designed scalable system architecture to support multiple concurrent users with efficient session handling and state synchronization mechanisms.',
        'Developed a low-latency React frontend ensuring smooth, uninterrupted performance during live coding sessions.',
        'Implemented SQLite database for structured data storage, enabling reliable persistence and quick data retrieval.'
      ],
      link: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#111111]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-custom mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-800 hover:border-[#7579ff]/50 transition-all duration-300 group flex flex-col h-full hover:-translate-y-2"
            >
              <div className="h-2 bg-gradient-custom w-full"></div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#b224ef] group-hover:to-[#7579ff] transition-all">
                  {project.title}
                </h3>
                <p className="text-[#b224ef] font-medium text-sm mb-6 uppercase tracking-wider">
                  {project.tech}
                </p>
                <ul className="space-y-3 mb-8 flex-grow">
                  {project.description.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-[#7579ff] mr-2 mt-1">▹</span>
                      <span className="text-gray-400 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <a 
                    href={project.link}
                    className="inline-flex items-center text-white hover:text-[#7579ff] font-medium transition-colors"
                  >
                    View Source <span className="ml-2">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
