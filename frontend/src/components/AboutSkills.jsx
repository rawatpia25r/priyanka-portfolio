import React from 'react';

/* ── Skill Card Icons (SVG) ── */
const CodeIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const MonitorIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const ServerIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
  </svg>
);

const DatabaseIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
  </svg>
);

const WrenchIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.573-1.066z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

/* ── Skill Data ── */
const skillsData = [
  {
    category: 'Languages',
    skills: 'Java, JavaScript, Python, C',
    subtitle: '4 Programming Languages',
    Icon: CodeIcon,
  },
  {
    category: 'Frontend',
    skills: 'React.js, HTML5, CSS3, Bootstrap',
    subtitle: 'Responsive UI Development',
    Icon: MonitorIcon,
  },
  {
    category: 'Backend',
    skills: 'Node.js, Python Flask',
    subtitle: 'REST APIs & Server-side Development',
    Icon: ServerIcon,
  },
  {
    category: 'Databases',
    skills: 'MongoDB, MySQL, SQLite',
    subtitle: 'SQL & NoSQL Databases',
    Icon: DatabaseIcon,
  },
  {
    category: 'Tools',
    skills: 'GitHub, VS Code, LeetCode',
    subtitle: 'Modern Development Workflow',
    Icon: WrenchIcon,
  },
];

/* ── Tech Chips ── */
const techChips = [
  'Java',
  'JavaScript',
  'Python',
  'React.js',
  'Node.js',
  'MongoDB',
  'Tailwind CSS',
  'Bootstrap',
];

const AboutSkills = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#161616]">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-[45px] font-bold text-white mb-4">
            About <span className="text-gradient">me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-custom mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-12 items-center">
          {/* Left: Image */}
          <div className="w-full lg:w-[46%] flex-shrink-0">
            <div className="relative group w-full max-w-[450px] mx-auto lg:mx-0">
              {/* Soft accent glow behind the card */}
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-[#b224ef]/25 via-[#7579ff]/20 to-[#f66a42]/15 blur-2xl opacity-65 group-hover:opacity-85 transition-opacity duration-500 pointer-events-none" />
              {/* Gradient border card */}
              <div className="relative rounded-2xl p-1 bg-gradient-to-br from-[#b224ef]/60 via-[#7579ff]/40 to-[#f66a42]/30 shadow-[0_12px_40px_rgba(178,36,239,0.2),0_6px_20px_rgba(0,0,0,0.3)] group-hover:shadow-[0_16px_50px_rgba(178,36,239,0.3),0_8px_25px_rgba(0,0,0,0.4)] group-hover:from-[#b224ef]/80 group-hover:via-[#7579ff]/60 group-hover:to-[#f66a42]/40 transition-all duration-500 group-hover:scale-[1.02]">
                <div className="rounded-[14px] overflow-hidden bg-[#161616]">
                  <img 
                    src="/priyanka02.jpeg" 
                    alt="Priyanka" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content & Skills */}
          <div className="w-full lg:w-[55%] space-y-8 mt-2 lg:mt-0">
            {/* About Text */}
            <div className="text-gray-200 text-[15px] md:text-[16px] leading-relaxed space-y-4">
              <p>
                I am an enthusiastic Computer Science engineering student at Dev Bhoomi Uttarakhand University with a strong foundation in full-stack development.
              </p>
              {/* <p>
                I have practical experience building responsive web applications, developing RESTful APIs, and working with both relational and NoSQL databases. My goal is to leverage my skills in a collaborative environment to solve complex problems and build impactful software solutions.
              </p> */}
            </div>

            {/* Tech Stack Chips */}
            <div className="flex flex-wrap gap-2.5">
              {techChips.map((tech, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full text-sm font-medium border border-[#b224ef]/25 bg-[#b224ef]/[0.06] text-[#c9a0f0] hover:bg-[#b224ef]/[0.12] hover:border-[#b224ef]/40 hover:shadow-[0_4px_16px_rgba(178,36,239,0.15)] hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Skill Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {skillsData.map((item, index) => (
                <div
                  key={index}
                  className={`group/card bg-[#1c1c1c]/80 backdrop-blur-sm rounded-2xl p-7 sm:p-8 text-center border border-white/[0.06] hover:border-[#b224ef]/50 shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_32px_rgba(178,36,239,0.2),0_4px_20px_rgba(0,0,0,0.2)] hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center min-h-[180px] justify-center ${
                    index === 4 ? 'sm:col-span-2 sm:w-[calc(50%-10px)] sm:mx-auto w-full' : ''
                  }`}
                >
                  {/* Icon */}
                  <div className="mb-4 text-[#b224ef] group-hover/card:text-[#c96aff] transition-colors duration-500">
                    <item.Icon />
                  </div>
                  {/* Category Title */}
                  <h4 className="text-gradient font-bold text-xl mb-2">{item.category}</h4>
                  {/* Skills */}
                  <p className="text-gray-300 text-[15px] font-medium leading-relaxed">{item.skills}</p>
                  {/* Subtitle */}
                  <p className="text-gray-500 text-xs mt-3 font-medium tracking-wide">{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        {/* <div className="mt-16 flex flex-wrap justify-center items-center gap-y-8 divide-x divide-gray-600">
          <div className="text-center px-8 md:px-16">
            <span className="block text-gradient text-4xl font-bold mb-2">9.4</span>
            <span className="text-white text-xs md:text-sm uppercase tracking-wider font-medium">CGPA</span>
          </div>
          <div className="text-center px-8 md:px-16">
            <span className="block text-gradient text-4xl font-bold mb-2">2+</span>
            <span className="text-white text-xs md:text-sm uppercase tracking-wider font-medium">Major Projects</span>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default AboutSkills;
