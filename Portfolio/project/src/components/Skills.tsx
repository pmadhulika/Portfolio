import React from 'react';
import { Code, Database, Wrench } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const Skills = () => {
  const { theme } = useTheme();

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      color: "from-purple-600 to-pink-600",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      skills: ["HTML", "CSS", "JavaScript", "React JS"]
    },
    {
      title: "Backend Development", 
      icon: Database,
      color: "from-blue-600 to-cyan-600",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      skills: ["Java", "Python", "Django", "SQL"]
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      color: "from-green-600 to-teal-600",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
      skills: ["Git", "GitHub", "Render", "PowerBI"]
    }
  ];

  const softSkills = [
    "Problem Solving", "Team Collaboration", "Communication", 
    "Time Management", "Adaptability", "Leadership","Detail Oriented"
  ];

  return (
    <section id="skills" className={`py-20 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Skills
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto mb-6"></div>
          <p className={`max-w-2xl mx-auto transition-colors duration-300 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            A diverse set of technical and soft skills gained through academic projects and practical experience.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className={`${category.bgColor} backdrop-blur-sm rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300 border ${category.borderColor}`}
              >
                {/* Category Header */}
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className={`px-4 py-2 rounded-full text-center text-sm font-medium bg-gradient-to-r ${category.color} text-white shadow-md hover:shadow-lg transition-shadow duration-300`}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Soft Skills */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8 text-purple-400">
            Soft Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {softSkills.map((skill, index) => (
              <span
                key={index}
                className={`px-6 py-3 text-sm font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 ${
                  theme === 'dark' 
                    ? 'bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/30 text-white' 
                    : 'bg-white/80 backdrop-blur-md border border-gray-200 hover:bg-white hover:border-gray-300 text-gray-800'
                }`}
                style={{
                  backdropFilter: 'blur(10px)',
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;