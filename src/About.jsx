import React from "react";

const About = () => {
  return (
    <section className="relative w-full py-20 overflow-hidden bg-black text-white">
      {/* 🌌 Neon background effects */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-purple-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-indigo-500 rounded-full blur-3xl opacity-20 animate-ping"></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 animate-fadeInLeft">
          <div className="border-4 border-cyan-400 rounded-lg 
            shadow-[0_0_25px_#00f6ff] hover:shadow-[0_0_45px_#00f6ff] transition">
            <img
              src="/ab.jpg"
              alt="About Us"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Right Side - Text */}
        <div className="w-full md:w-1/2 animate-fadeInRight text-center md:text-left">
          <h2 className="text-4xl font-extrabold mb-6 text-cyan-400 drop-shadow-[0_0_20px_#00f6ff]">
            About Us
          </h2>
          <p className="text-gray-200 leading-relaxed mb-8">
            Sky Nova is a leading streaming network with 13+ years of experience, offering over 31,000 channels worldwide. Trusted by more than 400K clients, we deliver top-quality entertainment: live TV, movies, sports, and more anytime, anywhere.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="bg-cyan-500 text-black px-8 py-3 rounded 
              shadow-[0_0_15px_#00f6ff] hover:bg-cyan-400 hover:shadow-[0_0_25px_#00f6ff] transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
