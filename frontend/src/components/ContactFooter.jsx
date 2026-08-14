import React, { useRef, useState, useEffect, useCallback } from 'react';
import emailjs from '@emailjs/browser';

/* ── Icon Components ── */
const MailIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const LocationIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const GitHubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
  </svg>
);

/* ── Contact Card Data ── */
const contactCards = [
  {
    icon: <MailIcon />,
    title: 'Email',
    value: 'rawatpriya2501@gmail.com',
    href: 'mailto:rawatpriya2501@gmail.com',
    color: '#7579ff',
  },
  {
    icon: <PhoneIcon />,
    title: 'Phone',
    value: '8532020734',
    href: 'tel:8532020734',
    color: '#f66a42',
  },
  {
    icon: <LocationIcon />,
    title: 'Location',
    value: 'Dehradun, Uttarakhand',
    href: null,
    color: '#b224ef',
  },
  {
    icon: <GitHubIcon />,
    title: 'GitHub',
    value: 'rawatpia25r',
    href: 'https://github.com/rawatpia25r',
    color: '#e5e5e5',
    external: true,
  },
  {
    icon: <LinkedInIcon />,
    title: 'LinkedIn',
    value: 'Priyanka Rawat',
    href: 'https://www.linkedin.com/in/priyanka-rawat-9638bb297',
    color: '#0077b5',
    external: true,
  },
];

const ContactFooter = () => {
  const form = useRef(null);
  const [sending, setSending] = useState(false);
  const [popup, setPopup] = useState({ show: false, type: '', closing: false });
  const [imageError, setImageError] = useState(false);
  const autoCloseTimerRef = useRef(null);

  const closePopup = useCallback(() => {
    setPopup((prev) => ({ ...prev, closing: true }));
    setTimeout(() => {
      setPopup({ show: false, type: '', closing: false });
    }, 250);
  }, []);

  // Auto-close popup after 4 seconds
  useEffect(() => {
    if (popup.show && !popup.closing) {
      autoCloseTimerRef.current = setTimeout(() => {
        closePopup();
      }, 4000);
      return () => clearTimeout(autoCloseTimerRef.current);
    }
  }, [popup.show, popup.closing, closePopup]);

  const sendEmail = async (e) => {
    e.preventDefault();
    console.log('FORM SUBMITTED');

    setSending(true);

    try {
      const response = await emailjs.sendForm(
        'service_aezaotk',
        'template_kqbplbh',
        form.current,
        {
          publicKey: 'iLLUO7fXq-m8TSsdn',
        }
      );

      console.log('EMAIL SENT:', response.status, response.text);
      setPopup({ show: true, type: 'success', closing: false });
      form.current.reset();
    } catch (error) {
      console.error('EMAILJS ERROR:', error);
      console.error('ERROR TEXT:', error?.text);
      setPopup({ show: true, type: 'error', closing: false });
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      {/* ── Contact Section ── */}
      <section id="contact" className="bg-[#111111] pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-custom mx-auto rounded-full"></div>
            <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left: Contact Form */}
            <div className="bg-[#1a1a1a]/80 backdrop-blur-sm p-8 rounded-2xl border border-white/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.2)] order-2 lg:order-1 relative z-10">
              <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>
              <form ref={form} className="space-y-4" onSubmit={sendEmail}>
                <div>
                  <label htmlFor="from_name" className="block text-sm font-medium text-gray-400 mb-1">Your Name</label>
                  <input 
                    type="text" 
                    id="from_name" 
                    name="from_name"
                    className="w-full bg-[#111111] border border-gray-700/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#b224ef] transition-colors"
                    placeholder="Priyanka Rawat"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="from_email" className="block text-sm font-medium text-gray-400 mb-1">Your Email</label>
                  <input 
                    type="email" 
                    id="from_email" 
                    name="from_email"
                    className="w-full bg-[#111111] border border-gray-700/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#b224ef] transition-colors"
                    placeholder="rawatpia@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows="4" 
                    className="w-full bg-[#111111] border border-gray-700/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#b224ef] transition-colors resize-none"
                    placeholder="Hello Priyanka..."
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  disabled={sending}
                  className="w-full bg-gradient-custom text-white font-bold py-3.5 px-4 rounded-xl shadow-[0_4px_20px_rgba(178,36,239,0.25)] hover:shadow-[0_8px_32px_rgba(178,36,239,0.4)] hover:-translate-y-1 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-[0_4px_20px_rgba(178,36,239,0.25)]"
                >
                  {sending ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Right: 3D Earth Visual */}
            <div className="flex justify-center items-center order-1 lg:order-2">
              <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center">
                {/* Subtle background glow for the Earth */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#b224ef]/10 via-transparent to-[#7579ff]/10 rounded-full blur-3xl animate-pulse"></div>
                {/* The 3D Earth image */}
                {!imageError ? (
                  <img 
                    src="/earth_globe.png" 
                    alt="Global Connection - 3D Earth" 
                    className="relative z-10 w-full h-full object-contain animate-[float_6s_ease-in-out_infinite] opacity-90 drop-shadow-[0_0_40px_rgba(178,36,239,0.2)]"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="relative z-10 flex flex-col items-center justify-center h-3/4 w-3/4 text-center p-6 border-2 border-dashed border-gray-600 rounded-full bg-[#111111]/80 backdrop-blur-sm">
                    <span className="text-red-400 font-bold mb-2 text-lg">Asset Missing</span>
                    <span className="text-gray-300 text-sm leading-relaxed">
                      Please place<br/>
                      <code className="text-[#b224ef] font-mono font-bold bg-gray-800/50 px-2 py-1 rounded mt-1 mb-1 inline-block">earth_globe.png</code><br/>
                      in <code className="text-gray-400 font-mono text-xs">frontend/public/</code>
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Connection Timeline */}
          <div className="relative w-full max-w-6xl mx-auto mt-12 md:mt-20 mb-8 select-none">
             {/* Connecting Line (Desktop) */}
             <div className="absolute top-[39px] left-[5%] w-[90%] h-[3px] bg-gradient-to-r from-transparent via-gray-700/80 to-transparent hidden lg:block z-0">
               {/* Glowing animated line segment */}
               <div className="absolute top-0 left-1/4 w-1/2 h-full bg-gradient-to-r from-transparent via-[#b224ef]/60 to-transparent animate-[shimmer_3s_infinite]"></div>
             </div>
             
             {/* Nodes Container */}
             <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center lg:items-start gap-12 md:gap-10 lg:gap-4 relative z-10">
              {contactCards.map((card, index) => {
                const CardTag = card.href ? 'a' : 'div';
                const linkProps = card.href
                  ? {
                      href: card.href,
                      ...(card.external ? { target: '_blank', rel: 'noopener noreferrer' } : {}),
                    }
                  : {};

                return (
                  <CardTag
                    key={index}
                    {...linkProps}
                    className={`group relative flex flex-col items-center gap-4 ${card.href ? 'cursor-pointer' : ''} w-full md:w-[40%] lg:w-1/5 lg:min-w-[150px]`}
                  >
                    {/* Node Dot / Icon */}
                    <div 
                      className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-[#111111] border-2 border-gray-600 flex items-center justify-center transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-110 group-hover:border-transparent relative z-10 overflow-hidden shrink-0 shadow-lg"
                      style={{
                        boxShadow: `0 0 0 8px #111111` // creates a gap effect on the line
                      }}
                    >
                      {/* Hover gradient border background trick */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                           style={{ background: `linear-gradient(135deg, ${card.color}, transparent)` }}></div>
                      
                      <div className="absolute inset-[2px] rounded-full bg-[#161616] flex items-center justify-center">
                        <div className="transition-colors duration-300 drop-shadow-md group-hover:drop-shadow-[0_0_12px_currentColor] [&>svg]:w-7 [&>svg]:h-7 lg:[&>svg]:w-8 lg:[&>svg]:h-8" style={{ color: card.color }}>
                          {card.icon}
                        </div>
                      </div>
                    </div>
                    
                    {/* Text Container */}
                    <div className="text-center px-2 relative z-10 w-full">
                      <p className="text-sm lg:text-base text-gray-400 font-bold uppercase tracking-widest mb-2 group-hover:text-gray-200 transition-colors">
                        {card.title}
                      </p>
                      <p className="text-gray-200 text-base lg:text-lg font-semibold transition-colors duration-300 break-words group-hover:text-white">
                        {card.value}
                      </p>
                    </div>

                    {/* Mobile vertical connection line */}
                    {index !== contactCards.length - 1 && (
                      <div className="absolute top-[75px] w-[2px] h-14 bg-gradient-to-b from-gray-600 to-transparent md:hidden opacity-50 left-1/2 -translate-x-1/2"></div>
                    )}
                  </CardTag>
                );
              })}
             </div>
          </div>
        </div>
      </section>

      {/* ── Premium Footer ── */}
      <footer className="bg-[#0d0d0d] border-t border-white/[0.04] py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Left: Credit */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm font-medium">
                Designed & Developed by{' '}
                <span className="text-gradient font-semibold">Priyanka Rawat</span>
              </p>
              <p className="text-gray-600 text-xs mt-1">
                © {new Date().getFullYear()} All Rights Reserved.
              </p>
            </div>

            {/* Center: Tech */}
            <p className="text-gray-600 text-xs tracking-wider">
              Built with <span className="text-gray-500">React</span> • <span className="text-gray-500">Vite</span> • <span className="text-gray-500">Tailwind CSS</span>
            </p>

            {/* Right: Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/rawatpia25r"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-gray-500 hover:text-white hover:border-[#b224ef]/40 hover:bg-[#b224ef]/10 hover:-translate-y-0.5 transition-all duration-300"
              >
                <GitHubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/priyanka-rawat-9638bb297"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-gray-500 hover:text-[#0077b5] hover:border-[#0077b5]/40 hover:bg-[#0077b5]/10 hover:-translate-y-0.5 transition-all duration-300"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
      </footer>
      {/* ── Popup Modal ── */}
      {popup.show && (
        <div
          className={`fixed inset-0 z-[9999] flex items-center justify-center px-4 ${popup.closing ? 'popup-overlay-exit' : 'popup-overlay-enter'}`}
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(6px)' }}
          onClick={closePopup}
          role="dialog"
          aria-modal="true"
          aria-label={popup.type === 'success' ? 'Message sent successfully' : 'Message could not be sent'}
        >
          <div
            className={`relative w-full max-w-sm rounded-2xl p-8 text-center border shadow-2xl ${popup.closing ? 'popup-content-exit' : 'popup-content-enter'}`}
            style={{
              backgroundColor: '#1a1a1a',
              borderColor: popup.type === 'success' ? 'rgba(178, 36, 239, 0.25)' : 'rgba(239, 68, 68, 0.25)',
              boxShadow: popup.type === 'success'
                ? '0 20px 60px rgba(178, 36, 239, 0.2), 0 8px 24px rgba(0, 0, 0, 0.5)'
                : '0 20px 60px rgba(239, 68, 68, 0.15), 0 8px 24px rgba(0, 0, 0, 0.5)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Icon */}
            <div className="popup-icon-animate mb-5">
              {popup.type === 'success' ? (
                <div
                  className="w-16 h-16 mx-auto rounded-full flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, rgba(178, 36, 239, 0.15), rgba(117, 121, 255, 0.15))' }}
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                    <path
                      className="popup-checkmark-draw"
                      d="M5 13l4 4L19 7"
                      stroke="url(#successGrad)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <defs>
                      <linearGradient id="successGrad" x1="5" y1="7" x2="19" y2="17">
                        <stop stopColor="#b224ef" />
                        <stop offset="1" stopColor="#7579ff" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              ) : (
                <div
                  className="w-16 h-16 mx-auto rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(239, 68, 68, 0.12)' }}
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                    <path d="M18 6L6 18" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M6 6l12 12" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>
              )}
            </div>

            {/* Title */}
            <h4 className="text-xl font-bold text-white mb-2">
              {popup.type === 'success' ? 'Message Sent Successfully!' : 'Message Could Not Be Sent'}
            </h4>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {popup.type === 'success'
                ? "Your message has been sent successfully. I'll get back to you soon."
                : 'Something went wrong while sending your message. Please try again.'}
            </p>

            {/* OK Button */}
            <button
              onClick={closePopup}
              className="px-8 py-2.5 rounded-lg font-semibold text-white text-sm transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5"
              style={{
                background: popup.type === 'success'
                  ? 'linear-gradient(to right, #b224ef, #f66a42)'
                  : 'linear-gradient(to right, #ef4444, #dc2626)',
                boxShadow: popup.type === 'success'
                  ? '0 4px 20px rgba(178, 36, 239, 0.3)'
                  : '0 4px 20px rgba(239, 68, 68, 0.3)',
              }}
              aria-label="Close popup"
            >
              OK
            </button>

            {/* Auto-close progress bar */}
            <div className="mt-4 mx-auto w-24 h-0.5 rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}>
              <div
                className="h-full rounded-full"
                style={{
                  background: popup.type === 'success'
                    ? 'linear-gradient(to right, #b224ef, #7579ff)'
                    : 'linear-gradient(to right, #ef4444, #dc2626)',
                  animation: 'popupProgress 4s linear forwards',
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactFooter;
