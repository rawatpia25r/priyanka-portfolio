import React from 'react';

/* ── Icon Components ── */
const SendIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const DocumentIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-28 pb-12 px-4 sm:px-6 lg:px-8 relative bg-[#161616]">
      <div className="max-w-4xl mx-auto text-center z-10">
        <div className="mb-8 flex justify-center">
          <div className="relative group mx-auto mb-6">
            {/* Soft accent glow behind the image */}
            <div className="absolute -inset-5 rounded-full bg-gradient-to-br from-[#b224ef]/35 via-[#7579ff]/25 to-[#f66a42]/20 blur-3xl opacity-75 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            {/* Gradient border ring */}
            <div className="relative w-56 h-56 md:w-[300px] md:h-[300px] lg:w-[320px] lg:h-[320px] rounded-full p-1 bg-gradient-to-br from-[#b224ef] via-[#7579ff] to-[#f66a42] shadow-[0_12px_50px_rgba(178,36,239,0.25),0_6px_30px_rgba(117,121,255,0.15),0_4px_15px_rgba(0,0,0,0.4)] group-hover:shadow-[0_16px_60px_rgba(178,36,239,0.35),0_8px_40px_rgba(117,121,255,0.25),0_6px_25px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:scale-[1.02] mx-auto">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#161616]">
                <img
                  src="/priyanka.jpeg"
                  alt="Priyanka Rawat"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-4xl md:text-[54px] font-bold leading-tight tracking-tight mb-4 mt-6">
          <span className="text-gradient">I'm Priyanka Rawat,</span> <span className="text-white">a Passionate<br />Full Stack Developer.</span>
        </h1>

        {/* Professional Tagline */}
        <p className="text-sm md:text-base text-gray-500 font-medium tracking-widest uppercase mb-8">
          Full Stack Developer &nbsp;•&nbsp; MERN Stack &nbsp;•&nbsp; Building Modern Web Applications
        </p>

        <p className="text-[17px] md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
          Aspiring full-stack developer building real-world projects with React Js, Node Js, MongoDB, and Tailwind Css.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-8">
          {/* Connect With Me */}
          <a
            href="#contact"
            className="hero-btn-primary group/btn w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full bg-gradient-custom text-white font-semibold text-[16px] tracking-wide shadow-[0_4px_20px_rgba(178,36,239,0.3)] hover:shadow-[0_8px_32px_rgba(178,36,239,0.5)] hover:-translate-y-1 transition-all duration-300"
          >
            <SendIcon />
            Connect With Me
          </a>
          {/* My Resume */}
          <a
            href="/resume"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn-secondary group/btn w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white font-semibold text-[16px] tracking-wide hover:border-[#b224ef]/50 hover:bg-white/10 hover:shadow-[0_8px_28px_rgba(178,36,239,0.2)] hover:-translate-y-1 transition-all duration-300"
          >
            <DocumentIcon />
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
