import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const About = () => {
  const { theme } = useTheme();

  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Information Technology",
      institution: "Sree Vidyanikethan Engineering College",
      year: "2021–2025",
      cgpa:"9.09",
      location: "Tirupati, Andhra Pradesh"
    },
    {
      degree: "Intermediate",
      field: "MPC (Mathematics, Physics, Chemistry)",
      institution: "Sri Chaitanya Academy Junior College",
      year: "2019–2021",
      percentage:"94.5%",
      location: "Tirupati, Andhra Pradesh"
    },
    {
      degree: "SSC",
      field: "General Studies",
      institution: "Gowtham School",
      year: "2018–2019",
      cgpa:"9.8",
      location: "Tirupati, Andhra Pradesh"
    }
  ];

  return (
    <section id="about" className={`py-20 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            About Me
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto mb-6"></div>
          <p className={`max-w-2xl mx-auto text-2xl italic font-semibold text-center transition-colors duration-300 ${
  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
}`}>
  Unfolding My Story
</p>

        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content - Centered */}
          <div className="flex justify-center">
            <div className={`rounded-2xl p-8 border w-full max-w-lg transition-all duration-300 ${
              theme === 'dark' 
                ? 'bg-gray-700 border-gray-600' 
                : 'bg-gray-50 border-gray-200'
            }`}>
              <h3 className="text-2xl font-semibold mb-4 text-purple-400 text-center">
                My Journey
              </h3>
              <p className={`leading-relaxed mb-4 text-justify transition-colors duration-300 ${
                theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
              }`}>
                I'm Paluri Madhulika, a recent Information Technology graduate from Sree Vidyanikethan Engineering College. 
                Throughout my academic journey, I've been driven by a passion for building impactful tech solutions. 
                From classroom concepts to real-time projects like Vibify and network intrusion detection systems, 
                I've gained hands-on experience across full-stack development, cloud technologies, and AI.
              </p>
              <p className={`leading-relaxed text-justify transition-colors duration-300 ${
                theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
              }`}>
                I'm deeply interested in creating user-focused applications, solving real-world problems through code, 
                and continuously learning in dynamic environments. With experience in technologies like React, Django, 
                Salesforce, and cloud deployment, I'm excited to step into the professional world and contribute meaningfully to innovative teams.
              </p>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6 text-purple-400 flex items-center">
              <GraduationCap className="w-6 h-6 mr-2" />
              Education
            </h3>
            
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className={`rounded-xl p-6 border hover:border-purple-500 transition-all duration-300 ${
                    theme === 'dark' 
                      ? 'bg-gray-700 border-gray-600' 
                      : 'bg-white border-gray-200'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className={`text-lg font-semibold transition-colors duration-300 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {edu.degree}
                    </h4>
                    <span className="flex items-center text-sm text-purple-400 bg-purple-500/20 px-3 py-1 rounded-full">
                      <Calendar className="w-4 h-4 mr-1" />
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-purple-400 font-medium mb-2">{edu.field}</p>
                  <p className={`mb-2 transition-colors duration-300 ${
                    theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                  }`}>{edu.institution}</p>
                  <div className="flex items-center justify-between">
                    <p className={`flex items-center text-sm transition-colors duration-300 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      <MapPin className="w-4 h-4 mr-1" />
                      {edu.location}
                    </p>
                    {edu.cgpa && (
                      <span className="text-sm text-green-400 font-medium">
                        CGPA: {edu.cgpa}
                      </span>
                    )}
                    {edu.percentage && (
                      <span className="text-sm text-green-400 font-medium">
                        {edu.percentage}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;