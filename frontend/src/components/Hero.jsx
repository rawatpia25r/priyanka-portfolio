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
          <div className="relative group">
            {/* Soft accent glow behind the image */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-[#b224ef]/25 via-[#7579ff]/15 to-[#f66a42]/10 blur-2xl opacity-60 group-hover:opacity-85 transition-opacity duration-700 pointer-events-none" />
            {/* Gradient border ring — enlarged ~18% */}
            <div className="relative w-56 h-56 md:w-[260px] md:h-[260px] rounded-full p-[3px] bg-gradient-to-br from-[#b224ef] via-[#7579ff] to-[#f66a42] shadow-[0_8px_40px_rgba(178,36,239,0.18),0_4px_20px_rgba(117,121,255,0.1),0_2px_12px_rgba(0,0,0,0.35)] group-hover:shadow-[0_12px_50px_rgba(178,36,239,0.28),0_6px_24px_rgba(117,121,255,0.15),0_4px_16px_rgba(0,0,0,0.4)] transition-all duration-500 group-hover:scale-[1.02]">
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
        
        <h1 className="text-4xl md:text-[54px] font-bold leading-tight tracking-tight mb-6 mt-6">
          <span className="text-gradient">I'm Priyanka Rawat,</span> <span className="text-white">a Passionate<br/>Full Stack Developer.</span>
        </h1>
        
        <p className="text-[17px] md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
          Aspiring full-stack developer building real-world projects with React Js, Node Js, MongoDB, and Tailwind Css.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-8">
          {/* Connect With Me — premium gradient button */}
          <a
            href="#contact"
            className="hero-btn-primary group/btn w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full bg-gradient-custom text-white font-semibold text-[17px] tracking-wide shadow-[0_4px_20px_rgba(178,36,239,0.25)] hover:shadow-[0_8px_32px_rgba(178,36,239,0.4)] hover:-translate-y-0.5 hover:scale-[1.02] transition-all duration-300"
          >
            <SendIcon />
            Connect With Me
          </a>
          {/* My Resume — outlined premium button */}
          <a
            href="#"
            className="hero-btn-secondary group/btn w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full border-2 border-gray-500/50 text-white font-semibold text-[17px] tracking-wide hover:border-[#b224ef]/60 hover:shadow-[0_8px_28px_rgba(178,36,239,0.15)] hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-white/[0.03] transition-all duration-300"
            onClick={(e) => {
                e.preventDefault();
                alert("Resume download functionality will be added soon.");
            }}
          >
            <DocumentIcon />
            My Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
