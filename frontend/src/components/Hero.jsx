import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-28 pb-12 px-4 sm:px-6 lg:px-8 relative bg-[#161616]">
      <div className="max-w-4xl mx-auto text-center z-10">
        <div className="mb-8 flex justify-center">
          <div className="w-48 h-48 md:w-[220px] md:h-[220px] rounded-full overflow-hidden">
            <img
              src="/priyanka.jpeg"
              alt="Priyanka Rawat"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-[54px] font-bold leading-tight tracking-tight mb-6 mt-6">
          <span className="text-gradient">I'm Priyanka Rawat,</span> <span className="text-white">a Passionate<br/>Full Stack Developer.</span>
        </h1>
        
        <p className="text-[17px] md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
          Aspiring full-stack developer building real-world projects with React Js, Node Js, MongoDB, and Tailwind Css.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-custom text-white font-medium text-lg hover:opacity-90 transition-opacity"
          >
            Connect With Me
          </a>
          <a
            href="#"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-white text-white font-medium text-lg hover:bg-white hover:text-[#161616] transition-colors"
            onClick={(e) => {
                e.preventDefault();
                alert("Resume download functionality will be added soon.");
            }}
          >
            My Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
