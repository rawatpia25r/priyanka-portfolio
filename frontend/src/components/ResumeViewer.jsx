import React from 'react';

const DownloadIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const BackIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
);

const ResumeViewer = () => {
  const resumePath = '/resume.pdf';

  return (
    <div className="h-screen w-screen bg-[#161616] text-white flex flex-col overflow-hidden font-sans">
      {/* Top bar / Header (70px height) */}
      <div className="shrink-0 h-[70px] bg-[#161616] border-b border-white/[0.04] flex items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Left: Back Button */}
        <div className="flex-1 flex justify-start">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 font-medium text-sm"
          >
            <BackIcon />
            <span className="hidden sm:inline">Back to Portfolio</span>
            <span className="sm:hidden">Back</span>
          </a>
        </div>

        {/* Center: Title & Subtitle */}
        <div className="flex-1 flex flex-col items-center justify-center text-center whitespace-nowrap">
          <h1 className="text-lg sm:text-xl font-bold text-white tracking-wide">
            Resume <span className="text-gray-400 font-normal mx-1">|</span> Priyanka Rawat
          </h1>
          <p className="text-[10px] sm:text-[11px] text-gray-400 uppercase tracking-widest mt-0.5">
            Full Stack Developer &bull; MERN Stack Developer
          </p>
        </div>

        {/* Right: Download Button */}
        <div className="flex-1 flex justify-end">
          <a
            href={resumePath}
            download
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-gradient-to-r from-[#b224ef] to-[#7579ff] text-white font-semibold text-xs sm:text-sm hover:shadow-[0_4px_15px_rgba(178,36,239,0.4)] hover:-translate-y-1 transition-all duration-300"
          >
            <DownloadIcon />
            <span className="hidden sm:inline">Download Resume</span>
            <span className="sm:hidden">Download</span>
          </a>
        </div>
      </div>

      {/* Full Width & Full Height PDF Viewer */}
      <div className="flex-1 w-full bg-[#1a1a1a]">
        <iframe
          src={`${resumePath}#toolbar=0`}
          title="Resume PDF Viewer"
          className="w-full h-full border-none"
        />
      </div>
    </div>
  );
};

export default ResumeViewer;
