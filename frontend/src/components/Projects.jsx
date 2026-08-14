import React from 'react';

/* ── Inline SVG Illustrations ── */
const ResumeAnalyzerIllustration = () => (
  <svg viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="ra-grad1" x1="0" y1="0" x2="400" y2="220">
        <stop offset="0%" stopColor="#b224ef" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#7579ff" stopOpacity="0.08" />
      </linearGradient>
      <linearGradient id="ra-grad2" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#b224ef" />
        <stop offset="100%" stopColor="#7579ff" />
      </linearGradient>
      <linearGradient id="ra-bar1" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#b224ef" />
        <stop offset="100%" stopColor="#f66a42" />
      </linearGradient>
    </defs>
    <rect width="400" height="220" fill="url(#ra-grad1)" rx="12" />
    
    {/* Resume Document */}
    <rect x="40" y="30" width="120" height="160" rx="8" fill="#1a1a2e" stroke="#2a2a4a" strokeWidth="1.5" />
    <rect x="55" y="50" width="90" height="6" rx="3" fill="#b224ef" opacity="0.6" />
    <rect x="55" y="64" width="70" height="4" rx="2" fill="#3a3a5a" />
    <rect x="55" y="74" width="85" height="4" rx="2" fill="#3a3a5a" />
    <rect x="55" y="84" width="60" height="4" rx="2" fill="#3a3a5a" />
    <rect x="55" y="100" width="90" height="5" rx="2.5" fill="#7579ff" opacity="0.5" />
    <rect x="55" y="112" width="80" height="4" rx="2" fill="#3a3a5a" />
    <rect x="55" y="122" width="75" height="4" rx="2" fill="#3a3a5a" />
    <rect x="55" y="132" width="85" height="4" rx="2" fill="#3a3a5a" />
    <rect x="55" y="148" width="90" height="5" rx="2.5" fill="#7579ff" opacity="0.5" />
    <rect x="55" y="160" width="70" height="4" rx="2" fill="#3a3a5a" />
    <rect x="55" y="170" width="65" height="4" rx="2" fill="#3a3a5a" />

    {/* AI Scan Line */}
    <line x1="38" y1="110" x2="162" y2="110" stroke="url(#ra-grad2)" strokeWidth="2" opacity="0.7">
      <animate attributeName="y1" values="40;180;40" dur="3s" repeatCount="indefinite" />
      <animate attributeName="y2" values="40;180;40" dur="3s" repeatCount="indefinite" />
    </line>

    {/* Score Circle */}
    <circle cx="250" cy="80" r="42" fill="none" stroke="#2a2a4a" strokeWidth="6" />
    <circle cx="250" cy="80" r="42" fill="none" stroke="url(#ra-grad2)" strokeWidth="6" strokeDasharray="200 264" strokeLinecap="round" transform="rotate(-90 250 80)">
      <animate attributeName="strokeDasharray" values="0 264;200 264" dur="2s" fill="freeze" />
    </circle>
    <text x="250" y="76" textAnchor="middle" fill="white" fontSize="22" fontWeight="700" fontFamily="Outfit, sans-serif">85</text>
    <text x="250" y="93" textAnchor="middle" fill="#9a9aaa" fontSize="10" fontFamily="Outfit, sans-serif">ATS Score</text>

    {/* Analytics Bars */}
    <rect x="200" y="145" width="0" height="10" rx="5" fill="url(#ra-bar1)" opacity="0.9">
      <animate attributeName="width" values="0;100" dur="1.5s" fill="freeze" />
    </rect>
    <text x="310" y="154" fill="#9a9aaa" fontSize="10" fontFamily="Outfit, sans-serif">Skills Match</text>

    <rect x="200" y="163" width="0" height="10" rx="5" fill="url(#ra-grad2)" opacity="0.8">
      <animate attributeName="width" values="0;75" dur="1.8s" fill="freeze" />
    </rect>
    <text x="285" y="172" fill="#9a9aaa" fontSize="10" fontFamily="Outfit, sans-serif">Keywords</text>

    <rect x="200" y="181" width="0" height="10" rx="5" fill="#f66a42" opacity="0.7">
      <animate attributeName="width" values="0;60" dur="2s" fill="freeze" />
    </rect>
    <text x="270" y="190" fill="#9a9aaa" fontSize="10" fontFamily="Outfit, sans-serif">Format</text>

    {/* Floating Tags */}
    <rect x="320" y="35" width="55" height="22" rx="11" fill="#b224ef" opacity="0.15" stroke="#b224ef" strokeWidth="0.5" strokeOpacity="0.3">
      <animate attributeName="y" values="35;28;35" dur="4s" repeatCount="indefinite" />
    </rect>
    <text x="347" y="50" textAnchor="middle" fill="#b224ef" fontSize="9" fontFamily="Outfit, sans-serif" opacity="0.8">
      React
      <animate attributeName="y" values="50;43;50" dur="4s" repeatCount="indefinite" />
    </text>

    <rect x="330" y="70" width="50" height="22" rx="11" fill="#7579ff" opacity="0.15" stroke="#7579ff" strokeWidth="0.5" strokeOpacity="0.3">
      <animate attributeName="y" values="70;62;70" dur="3.5s" repeatCount="indefinite" />
    </rect>
    <text x="355" y="85" textAnchor="middle" fill="#7579ff" fontSize="9" fontFamily="Outfit, sans-serif" opacity="0.8">
      AI API
      <animate attributeName="y" values="85;77;85" dur="3.5s" repeatCount="indefinite" />
    </text>
  </svg>
);

const CodeItIllustration = () => (
  <svg viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="ci-grad1" x1="0" y1="0" x2="400" y2="220">
        <stop offset="0%" stopColor="#7579ff" stopOpacity="0.12" />
        <stop offset="100%" stopColor="#f66a42" stopOpacity="0.08" />
      </linearGradient>
      <linearGradient id="ci-grad2" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#7579ff" />
        <stop offset="100%" stopColor="#b224ef" />
      </linearGradient>
      <linearGradient id="ci-accent" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#f66a42" />
        <stop offset="100%" stopColor="#b224ef" />
      </linearGradient>
    </defs>
    <rect width="400" height="220" fill="url(#ci-grad1)" rx="12" />
    
    {/* Code Editor Window */}
    <rect x="30" y="25" width="200" height="170" rx="8" fill="#1a1a2e" stroke="#2a2a4a" strokeWidth="1.5" />
    {/* Title Bar */}
    <rect x="30" y="25" width="200" height="24" rx="8" fill="#222240" />
    <circle cx="46" cy="37" r="4" fill="#ff5f57" opacity="0.8" />
    <circle cx="58" cy="37" r="4" fill="#febc2e" opacity="0.8" />
    <circle cx="70" cy="37" r="4" fill="#28c840" opacity="0.8" />
    <text x="130" y="41" textAnchor="middle" fill="#6a6a8a" fontSize="9" fontFamily="Outfit, sans-serif">main.js</text>
    
    {/* Code Lines */}
    <text x="42" y="66" fill="#6a6a8a" fontSize="9" fontFamily="monospace">1</text>
    <text x="58" y="66" fill="#b224ef" fontSize="9" fontFamily="monospace">const</text>
    <text x="90" y="66" fill="#7579ff" fontSize="9" fontFamily="monospace">solve</text>
    <text x="118" y="66" fill="#e5e5e5" fontSize="9" fontFamily="monospace">= (n) =&gt; {'{'}</text>

    <text x="42" y="80" fill="#6a6a8a" fontSize="9" fontFamily="monospace">2</text>
    <text x="66" y="80" fill="#b224ef" fontSize="9" fontFamily="monospace">if</text>
    <text x="80" y="80" fill="#e5e5e5" fontSize="9" fontFamily="monospace">(n &lt;= 1)</text>
    <text x="134" y="80" fill="#b224ef" fontSize="9" fontFamily="monospace">return</text>
    <text x="172" y="80" fill="#f66a42" fontSize="9" fontFamily="monospace">n;</text>

    <text x="42" y="94" fill="#6a6a8a" fontSize="9" fontFamily="monospace">3</text>
    <text x="66" y="94" fill="#b224ef" fontSize="9" fontFamily="monospace">return</text>
    <text x="106" y="94" fill="#7579ff" fontSize="9" fontFamily="monospace">solve</text>
    <text x="134" y="94" fill="#e5e5e5" fontSize="9" fontFamily="monospace">(n-1)</text>

    <text x="42" y="108" fill="#6a6a8a" fontSize="9" fontFamily="monospace">4</text>
    <text x="74" y="108" fill="#e5e5e5" fontSize="9" fontFamily="monospace">+</text>
    <text x="84" y="108" fill="#7579ff" fontSize="9" fontFamily="monospace">solve</text>
    <text x="112" y="108" fill="#e5e5e5" fontSize="9" fontFamily="monospace">(n-2);</text>

    <text x="42" y="122" fill="#6a6a8a" fontSize="9" fontFamily="monospace">5</text>
    <text x="58" y="122" fill="#e5e5e5" fontSize="9" fontFamily="monospace">{'}'}</text>

    <text x="42" y="140" fill="#6a6a8a" fontSize="9" fontFamily="monospace">6</text>
    
    {/* Terminal / Output */}
    <rect x="42" y="148" width="178" height="36" rx="4" fill="#0d0d1a" stroke="#2a2a4a" strokeWidth="1" />
    <text x="50" y="162" fill="#28c840" fontSize="8" fontFamily="monospace">$ Output: 55</text>
    <text x="50" y="174" fill="#7579ff" fontSize="8" fontFamily="monospace">✓ All tests passed</text>
    
    {/* Cursor blink */}
    <rect x="68" y="132" width="7" height="12" fill="#7579ff" opacity="0.7">
      <animate attributeName="opacity" values="0.7;0;0.7" dur="1.2s" repeatCount="indefinite" />
    </rect>

    {/* Leaderboard Panel */}
    <rect x="255" y="25" width="120" height="170" rx="8" fill="#1a1a2e" stroke="#2a2a4a" strokeWidth="1.5" />
    <text x="315" y="48" textAnchor="middle" fill="#e5e5e5" fontSize="11" fontWeight="600" fontFamily="Outfit, sans-serif">Leaderboard</text>
    <line x1="265" y1="55" x2="365" y2="55" stroke="#2a2a4a" strokeWidth="1" />

    {/* Leaderboard Items */}
    <rect x="265" y="64" width="100" height="26" rx="6" fill="#b224ef" opacity="0.12" />
    <text x="276" y="81" fill="#f66a42" fontSize="12" fontWeight="700" fontFamily="Outfit, sans-serif">🥇</text>
    <text x="296" y="80" fill="#e5e5e5" fontSize="10" fontFamily="Outfit, sans-serif">Priyanka</text>
    <text x="355" y="80" textAnchor="end" fill="#b224ef" fontSize="9" fontWeight="600" fontFamily="Outfit, sans-serif">2450</text>

    <rect x="265" y="96" width="100" height="26" rx="6" fill="transparent" />
    <text x="276" y="113" fill="#e5e5e5" fontSize="12" fontFamily="Outfit, sans-serif">🥈</text>
    <text x="296" y="112" fill="#9a9aaa" fontSize="10" fontFamily="Outfit, sans-serif">DevUser</text>
    <text x="355" y="112" textAnchor="end" fill="#7579ff" fontSize="9" fontWeight="600" fontFamily="Outfit, sans-serif">2100</text>

    <rect x="265" y="128" width="100" height="26" rx="6" fill="transparent" />
    <text x="276" y="145" fill="#e5e5e5" fontSize="12" fontFamily="Outfit, sans-serif">🥉</text>
    <text x="296" y="144" fill="#9a9aaa" fontSize="10" fontFamily="Outfit, sans-serif">Coder42</text>
    <text x="355" y="144" textAnchor="end" fill="#f66a42" fontSize="9" fontWeight="600" fontFamily="Outfit, sans-serif">1890</text>

    <rect x="265" y="160" width="100" height="26" rx="6" fill="transparent" />
    <text x="279" y="177" fill="#9a9aaa" fontSize="10" fontFamily="Outfit, sans-serif">4</text>
    <text x="296" y="176" fill="#9a9aaa" fontSize="10" fontFamily="Outfit, sans-serif">JSNinja</text>
    <text x="355" y="176" textAnchor="end" fill="#9a9aaa" fontSize="9" fontFamily="Outfit, sans-serif">1650</text>

    {/* Floating Brackets */}
    <text x="240" y="85" fill="#b224ef" fontSize="26" fontFamily="monospace" opacity="0.25">
      {'</>'}
      <animate attributeName="y" values="85;75;85" dur="4s" repeatCount="indefinite" />
    </text>
    <text x="245" y="170" fill="#f66a42" fontSize="20" fontFamily="monospace" opacity="0.2">
      { '{ }' }
      <animate attributeName="y" values="170;162;170" dur="3.5s" repeatCount="indefinite" />
    </text>
  </svg>
);

/* ── Icon Components ── */
const GitHubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
  </svg>
);

/* ── Project Data ── */
const projects = [
  {
    title: 'Resume Analyzer',
    description:
      'An AI-powered Resume Analyzer that evaluates resumes, provides ATS compatibility scores, identifies missing skills, and suggests improvements to increase interview chances.',
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'AI API', 'PDF Processing'],
    features: [
      'ATS Resume Analysis',
      'Skill Gap Detection',
      'Resume Score with Insights',
      'AI-Powered Suggestions',
      'PDF Upload & Parsing',
    ],
    github: 'https://github.com/rawatpia25r/Resume-Analyzer',
    liveDemo: 'https://resume-analyzer-32a4.onrender.com',
    Illustration: ResumeAnalyzerIllustration,
    accentFrom: '#b224ef',
    accentTo: '#7579ff',
  },
  {
    title: 'CodeIt',
    description:
      'A modern coding platform where users can solve programming problems, compile code in multiple languages, track progress, and compete on leaderboards.',
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Judge0 API'],
    features: [
      'Online Code Compiler',
      'Curated Coding Problems',
      'Secure Authentication',
      'Real-time Leaderboard',
      'User Dashboard & Profile',
    ],
    github: 'https://github.com/Harikesh312/CodeIt',
    liveDemo: 'https://codeit-vzw0.onrender.com',
    Illustration: CodeItIllustration,
    accentFrom: '#7579ff',
    accentTo: '#f66a42',
  },
];

/* ── Project Card Component ── */
const ProjectCard = ({ project, index }) => {
  const { title, description, techStack, features, github, liveDemo, Illustration, accentFrom, accentTo } = project;

  return (
    <div
      id={`project-card-${index}`}
      className="project-card bg-[#1a1a2e]/60 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-800/50 flex flex-col h-full"
    >
      {/* Glow overlay */}
      <div className="card-glow" />

      {/* Illustration / Thumbnail Area with hover zoom + overlay */}
      <div className="project-thumb-wrapper h-[220px] bg-[#12121f] group/thumb relative">
        <div className="w-full h-full transition-transform duration-500 group-hover/thumb:scale-[1.05]">
          <Illustration />
        </div>
        {/* Dark overlay that fades on hover */}
        <div className="absolute inset-0 bg-[#12121f]/30 group-hover/thumb:bg-transparent transition-all duration-500 pointer-events-none z-[3]" />
      </div>

      {/* Content Area */}
      <div className="p-6 sm:p-8 flex flex-col flex-grow relative z-10">
        {/* Title */}
        <h3 className="text-2xl sm:text-[26px] font-bold text-white mb-3 tracking-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-[15px] leading-relaxed mb-5">
          {description}
        </p>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map((tech, i) => (
            <span
              key={i}
              className="tech-badge px-3 py-1.5 rounded-full text-xs font-medium tracking-wide border"
              style={{
                color: i % 2 === 0 ? accentFrom : accentTo,
                borderColor: `${i % 2 === 0 ? accentFrom : accentTo}30`,
                backgroundColor: `${i % 2 === 0 ? accentFrom : accentTo}0d`,
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Key Features */}
        <div className="mb-8 flex-grow">
          <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-3">
            Key Features
          </h4>
          <ul className="space-y-2.5">
            {features.map((feature, i) => (
              <li key={i} className="feature-item flex items-start gap-2.5">
                <span
                  className="mt-0.5"
                  style={{ color: accentFrom }}
                >
                  <CheckIcon />
                </span>
                <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-auto pt-4">
          {liveDemo && (
            <a
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-live-demo flex-1 flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-white font-semibold text-[15px] shadow-[0_4px_15px_rgba(0,0,0,0.3)]"
              style={{
                background: `linear-gradient(135deg, ${accentFrom}, ${accentTo})`,
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <ExternalLinkIcon />
                Live Demo
              </span>
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-github flex-1 flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-gray-200 font-semibold text-[15px] border border-gray-700/60 bg-white/5 backdrop-blur-sm hover:bg-white/10 shadow-[0_4px_15px_rgba(0,0,0,0.2)]"
            >
              <GitHubIcon />
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

/* ── Projects Section ── */
const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#111111] relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-[#b224ef] rounded-full mix-blend-multiply filter blur-[180px] opacity-[0.07] pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-[500px] h-[500px] bg-[#7579ff] rounded-full mix-blend-multiply filter blur-[180px] opacity-[0.06] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-custom mx-auto rounded-full" />
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
            Real-world applications built with modern technologies, demonstrating full-stack expertise and production-quality code.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
