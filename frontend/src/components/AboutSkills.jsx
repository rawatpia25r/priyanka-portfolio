import React from 'react';

const AboutSkills = () => {
  const skillsData = [
    { category: 'Languages', skills: 'Java, JavaScript, Python, C', level: 90 },
    { category: 'Frontend', skills: 'React.js, HTML5, CSS3', level: 85 },
    { category: 'Backend', skills: 'Node.js, Python Flask', level: 80 },
    { category: 'Databases', skills: 'MongoDB, MySQL, SQLite', level: 80 },
    { category: 'Tools', skills: 'GitHub, VS Code, LeetCode', level: 90 },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#161616]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-[45px] font-bold text-white">
            About <span className="text-gradient">me</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left: Image */}
          <div className="w-full lg:w-[35%] flex-shrink-0">
            <div className="w-full max-w-[320px] mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/priyanka02.jpeg" 
                alt="Priyanka" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right: Content & Skills */}
          <div className="w-full lg:w-[65%] space-y-8 mt-2 lg:mt-0">
            <div className="text-gray-200 text-[15px] md:text-[16px] leading-relaxed space-y-4">
              <p>
                I am an enthusiastic Computer Science engineering student at Dev Bhoomi Uttarakhand University with a strong foundation in full-stack development.
              </p>
              {/* <p>
                I have practical experience building responsive web applications, developing RESTful APIs, and working with both relational and NoSQL databases. My goal is to leverage my skills in a collaborative environment to solve complex problems and build impactful software solutions.
              </p> */}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillsData.map((item, index) => (
                <div key={index} className="bg-[#1c1c1c] rounded-xl p-5 text-center shadow-lg hover:shadow-xl transition-shadow border border-white/5">
                  <h4 className="text-gradient font-bold text-lg mb-1">{item.category}</h4>
                  <p className="text-gray-400 text-sm">{item.skills}</p>
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
