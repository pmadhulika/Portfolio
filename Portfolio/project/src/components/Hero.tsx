import React from 'react';
import { Download, Mail, ArrowRight } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const Hero = () => {
  const { theme } = useTheme();

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
  window.open('https://drive.google.com/file/d/1MKcLY-Ed167vQX3Ljt0RJqrRALp9fCW0/view?usp=sharing', '_blank');
};


  return (
    <section
  id="home"
  className={`relative overflow-hidden min-h-screen flex items-center justify-center pt-20 transition-colors duration-300 ${
    theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
  }`}
>
  {/* 🌈 Animated Background */}
  <div className="absolute inset-0 z-0 pointer-events-none">
    <div className="w-[700px] h-[700px] bg-purple-500 opacity-20 rounded-full blur-3xl absolute -top-40 -left-40 animate-pulse"></div>
    <div className="w-[600px] h-[600px] bg-blue-500 opacity-20 rounded-full blur-2xl absolute -bottom-32 -right-32 animate-ping"></div>
  </div>

 
      {/* Profile Image, Text, Buttons... */}

      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Profile Image */}
          {/* Profile Image */}
{/* Profile Image */}
<div className="relative mb-8">
  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-purple-500 p-1 bg-purple-500">
    <img
  src="/profile1.jpg"
  alt="Paluri Madhulika"
  className="w-full h-full object-cover object-[center_20%] scale-110"
/>

  </div>
</div>



          {/* Greeting */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              
              <span className="text-purple-500">
                Paluri Madhulika
              </span>
            </h1>
           <p className={`text-xl md:text-2xl mb-2 italic transition-colors duration-300 ${
             theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
           }`}>
  Compiling Knowledge, Deploying Dreams
</p>

            <p className={`text-lg max-w-2xl mx-auto transition-colors duration-300 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Passionate fresher with expertise in modern web technologies. 
              Ready to create innovative solutions and grow in the tech industry.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={downloadResume}
              className="group flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              <span>Download Resume</span>
            </button>
            
            <button
              onClick={scrollToContact}
              className="group flex items-center space-x-2 border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              <span>Get In Touch</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;