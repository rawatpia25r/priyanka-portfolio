import React from 'react';

const DownloadIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const ExternalIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const BackIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
);

const ResumePage = ({ onClose }) => {
  const resumePath = '/resume.pdf'; // Placeholder — replace with actual PDF later

  return (
    <div className="fixed inset-0 z-[100] bg-[#161616] overflow-y-auto animate-fadeIn">
      {/* Top bar */}
      <div className="sticky top-0 z-10 bg-[#161616]/95 backdrop-blur-sm border-b border-white/[0.04]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 font-medium text-sm"
          >
            <BackIcon />
            Back to Portfolio
          </button>
          <span className="text-[28px] font-bold text-white tracking-wide relative inline-block">
            Priyanka
            <svg className="absolute -bottom-1.5 right-0 w-10 text-[#e400ff]" viewBox="0 0 100 30" fill="currentColor">
              <path d="M0 15 Q 50 30 100 0 Q 50 20 0 15 Z" />
            </svg>
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-gradient">Resume</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-custom mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            You can preview or download my latest resume below.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href={resumePath}
            download
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-custom text-white font-semibold text-base shadow-[0_4px_20px_rgba(178,36,239,0.25)] hover:shadow-[0_8px_32px_rgba(178,36,239,0.4)] hover:-translate-y-0.5 hover:scale-[1.02] transition-all duration-300"
          >
            <DownloadIcon />
            Download Resume
          </a>
          <a
            href={resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full border-2 border-gray-500/50 text-white font-semibold text-base hover:border-[#b224ef]/60 hover:shadow-[0_8px_28px_rgba(178,36,239,0.15)] hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-white/[0.03] transition-all duration-300"
          >
            <ExternalIcon />
            Open in New Tab
          </a>
        </div>

        {/* PDF Viewer Placeholder */}
        <div className="relative rounded-2xl overflow-hidden border border-gray-800/50 bg-[#1a1a1a]/60 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.3)]">
          <div className="aspect-[8.5/11] w-full flex items-center justify-center">
            {/* Try to embed PDF — falls back to placeholder */}
            <object
              data={resumePath}
              type="application/pdf"
              className="w-full h-full"
            >
              {/* Fallback placeholder */}
              <div className="flex flex-col items-center justify-center h-full text-center px-6 py-20">
                <div className="w-20 h-20 rounded-full bg-[#b224ef]/10 flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-[#b224ef]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Resume PDF</h3>
                <p className="text-gray-500 text-sm max-w-sm mb-6">
                  The resume PDF will be displayed here once uploaded. Use the buttons above to download or open it.
                </p>
                <div className="flex gap-3">
                  <a
                    href={resumePath}
                    download
                    className="px-5 py-2.5 rounded-lg bg-gradient-custom text-white text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    Download PDF
                  </a>
                </div>
              </div>
            </object>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
