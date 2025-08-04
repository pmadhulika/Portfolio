import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const Footer = () => {
  const { theme } = useTheme();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/pmadhulika',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/pmadhulika',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:palurimadhulika@gmail.com',
      label: 'Email'
    }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className={`border-t transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-black border-gray-700' 
        : 'bg-gray-900 border-gray-300'
    }`}>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          {/* Logo/Name */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-purple-500 mb-3">
              Paluri Madhulika
            </h3>
            <p className={`text-lg transition-colors duration-300 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-300'
            }`}>
              Aspring Full Stack Developer
            </p>
          </div>

          {/* Let's Build Section */}
           <div className="mb-10">
            <blockquote className={`text-xl italic max-w-3xl mx-auto leading-relaxed transition-colors duration-300 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-200'
            }`}>
             Behind every line of code is a dream waiting to be launched.
            </blockquote>
          </div>
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-10">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-xl hover:bg-purple-600 transition-all duration-300 transform hover:scale-110 ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-gray-700'
                  }`}
                  aria-label={link.label}
                >
                  <Icon className={`w-6 h-6 hover:text-white transition-colors ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-300'
                  }`} />
                </a>
              );
            })}
          </div>

          {/* Quote */}
         
          {/* Made with Love */}
          <div className={`flex items-center justify-center space-x-2 mb-8 text-lg transition-colors duration-300 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-300'
          }`}>
            <span>Made with</span>
            <Heart className="w-5 h-5 text-red-500 animate-pulse" />
            <span>and lots of 🍵</span>
          </div>

          {/* Copyright */}
          <div className={`pt-8 border-t transition-colors duration-300 ${
            theme === 'dark' ? 'border-gray-700' : 'border-gray-600'
          }`}>
            <p className={`transition-colors duration-300 ${
              theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
            }`}>
              © {currentYear} Paluri Madhulika. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;