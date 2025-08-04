import React from 'react';
import { Github } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const Projects = () => {
  const { theme } = useTheme();

  const projects = [
  {
    title: "Vibify - Music Streaming Website",
    description: "A full-stack music platform inspired by Spotify, offering genre-based playlists, custom background, user-friendly design, and a unique logo. Built to enhance music discovery with a seamless UI.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    githubUrl: "https://github.com/pmadhulika/Vibify", // replace with actual link
    image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    title: "Hosting Django Website Using Amazon EC2",
    description: "Demonstrated cloud deployment by hosting a Django web application on Amazon EC2. Focused on setting up scalable, reliable infrastructure and environment configuration.",
    technologies: ["Django", "AWS EC2", "Linux", "Cloud Hosting"],
    githubUrl: "https://github.com/pmadhulika/Hosting-Django-Website-Using-Amazon-EC2", // replace with actual link
    image: "/clpud.jpg"
  },
  {
    title: "Library Management System",
    description: "An efficient system built with advanced data structures to manage and streamline library operations. Focuses on optimizing storage, retrieval, and accurate record keeping.",
    technologies: ["Java", "Data Structures", "OOP"],
    githubUrl: "https://github.com/pmadhulika/Library-Management-System", // replace with actual link
    image: "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    title: "Smart Security System (Simulation)",
    description: "A residential security network simulated using Cisco Packet Tracer. Includes sensor nodes, cameras, and real-time alerts to showcase modern security integration.",
    technologies: ["Cisco Packet Tracer", "Networking", "IoT Simulation"],
    githubUrl: "https://github.com/pmadhulika/Smart-Security-System", // replace with actual link
    image: "/The-top-5-Smart-Home-Security-Systems.jpg"
  },
  {
    title: "Covid Data Analysis using Data Visualization",
    description: "It focuses on analyzing the spread and impact of COVID-19 using real-world data and visual storytelling through data visualization.",
    technologies: ["Python","Numpy","Matplotlib"],
    githubUrl: "https://github.com/pmadhulika/Covid-Data-Analysis-using-Data-Visualization", // replace with actual link
    image: "/COVID-19-Update.jpg"
  },
  {
    title: "Online Shopping Cart",
    description: "A web-based shopping system with database-backed product and cart management. Focused on interactive user experience and structured data flow.",
    technologies: ["HTML", "CSS", "JavaScript", "SQL"],
    githubUrl: "https://github.com/pmadhulika/Online-Shopping-Cart", // replace with actual link
    image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  ];

  const openGithub = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section id="projects" className={`py-20 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Projects
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto mb-6"></div>
          <p className={`max-w-2xl mx-auto transition-colors duration-300 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            A showcase of my development projects demonstrating practical application of various technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group rounded-2xl overflow-hidden border hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-[1.02] ${
                theme === 'dark' 
                  ? 'bg-gray-800 border-gray-700' 
                  : 'bg-white border-gray-200 shadow-lg hover:shadow-xl'
              }`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className={`text-xl font-semibold mb-3 group-hover:text-purple-400 transition-colors ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.title}
                </h3>
                <p className={`mb-4 leading-relaxed text-sm transition-colors duration-300 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-purple-500/20 text-purple-400 rounded-full border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <button
                  onClick={() => openGithub(project.githubUrl)}
                  className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 w-full justify-center"
                >
                  <Github className="w-4 h-4" />
                  <span>View Code</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;