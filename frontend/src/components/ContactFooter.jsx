import React from 'react';

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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    className={`group bg-[#1a1a1a]/80 backdrop-blur-sm rounded-xl p-5 border border-white/[0.06] hover:border-[${card.color}]/30 shadow-[0_2px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.25)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center ${
                      card.href ? 'cursor-pointer' : ''
                    } ${index === contactCards.length - 1 ? 'sm:col-span-2 sm:max-w-[280px] sm:mx-auto' : ''}`}
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `${card.color}12`,
                        color: card.color,
                      }}
                    >
                      {card.icon}
                    </div>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">
                      {card.title}
                    </p>
                    <p className="text-white text-sm font-medium group-hover:text-gray-200 transition-colors break-all">
                      {card.value}
                    </p>
                  </CardTag>
                );
              })}
            </div>

            {/* Right: Contact Form */}
            <div className="bg-[#1a1a1a]/80 backdrop-blur-sm p-8 rounded-2xl border border-white/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.2)]">
              <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-[#111111] border border-gray-700/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#b224ef] transition-colors"
                    placeholder="Priyanka Rawat"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-[#111111] border border-gray-700/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#b224ef] transition-colors"
                    placeholder="rawatpia@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    className="w-full bg-[#111111] border border-gray-700/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#b224ef] transition-colors resize-none"
                    placeholder="Hello Priyanka..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-gradient-custom text-white font-bold py-3.5 px-4 rounded-lg hover:opacity-90 hover:shadow-[0_4px_20px_rgba(178,36,239,0.3)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
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
    </>
  );
};

export default ContactFooter;
