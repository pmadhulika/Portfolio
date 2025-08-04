import React, { useState } from 'react';
import { Award, Calendar, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const Certificates = () => {
  const { theme } = useTheme();
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const certificates = 
    [
  {
    title: "Salesforce Developer Virtual Internship",
    organization: "SmartInternz",
    duration: "May 2023 – July 2023",
    description: "Explored Salesforce platform, learned Apex programming, and worked on CRM-based use cases. Gained hands-on experience in developing custom applications and workflows on Salesforce.",
    skills: ["Salesforce", "Apex", "CRM", "Lightning Components"],
    certificateUrl: "https://drive.google.com/file/d/1msRzIopJdGRG25WVGUJTpSPUcgoMz0TG/view?usp=sharing",
    type: "Internship"
  },
  {
    title: "J.P. Morgan Excel Skills Job Simulation",
    organization: "Forage",
    duration: "Aug 2023 – Sep 2023",
    description: "Completed real-world Excel tasks including data formatting, visualization, and financial modeling. Gained exposure to professional-grade spreadsheet tools and analytical thinking.",
    skills: ["Excel", "Data Analysis", "Visualization"],
    certificateUrl: "https://drive.google.com/file/d/1rdnqRjZIxCF2_o1AB7tgx_XOiw7s6iWk/view?usp=sharing",
    type: "Certification"
  },
  {
    title: "Android Developer Virtual Internship",
    organization: "Google For Developers",
    duration: "Sep 2023 – Nov 2023",
    description: "Built Android apps using Java and Kotlin. Developed user-friendly interfaces and learned best practices in Android app architecture and deployment.",
    skills: ["Android", "Java", "Kotlin", "XML"],
    certificateUrl: "https://drive.google.com/file/d/1MyQ4rrhfOfO7brbrG1AIc6OqA2CwcNFM/view?usp=sharing",
    type: "Internship"
  },
  {
    title: "Palo Alto Cybersecurity Virtual Internship",
    organization: "Palo Alto Networks",
    duration: "Jan 2024 – Mar 2024",
    description: "Learned fundamental cybersecurity concepts including threat prevention, network security, and firewall configuration. Completed hands-on labs and simulations.",
    skills: ["Cybersecurity", "Network Security", "Firewalls", "Threat Prevention"],
    certificateUrl: "https://drive.google.com/file/d/144RS_nJpcNVEZtRgtNGpfDwhUNyR7fRb/view?usp=sharing",
    type: "Internship"
  },
  {
    title: "Cranes Varsity CyberSecurity Virtual Internship",
    organization: "Cranes Varsity",
    duration: "Feb 2024 – Mar 2024",
    description: "Strengthened understanding of ethical hacking, system vulnerabilities, and security protocols through hands-on cybersecurity training.",
    skills: ["Ethical Hacking", "Network Protocols", "System Security"],
    certificateUrl: "https://drive.google.com/file/d/1dzF035-AawmVrLEBiI_wVLGUM8mW0WeB/view?usp=sharing",
    type: "Internship"
  },
  {
    title: "Salesforce Administrator Virtual Internship",
    organization: "SmartInternz",
    duration: "May 2024 – June 2024",
    description: "Focused on administrative tasks in Salesforce including user management, security settings, workflows, and automation tools. Gained experience in configuring and managing Salesforce environments.",
    skills: ["Salesforce Admin", "Workflows", "Security", "CRM"],
    certificateUrl: "https://drive.google.com/file/d/1gZGlJNln98nOhvkhtXfcDedVTrV6ybg2/view?usp=sharing",
    type: "Internship"
  },
  {
    title: "Cloud Virtual Internship",
    organization: "AWS Academy",
    duration: "April 2024 – June 2024",
    description: "Completed virtual internship covering core AWS services like EC2, S3, IAM, and VPC. Understood cloud architecture, scalability, and cost-effective solutions.",
    skills: ["AWS", "EC2", "S3", "Cloud Architecture"],
    certificateUrl: "https://drive.google.com/file/d/1lcva2K8jRakXee7939ZkHXXCZwKw5Vsm/view?usp=sharing",
    type: "Internship"
  },
  {
    title: "Full Stack Developer Intern",
    organization: "Venzo Technologies",
    duration: "May 2024 – July 2024",
    description: "Worked on full-stack development projects using React and PostgreSQL. Contributed to building responsive web applications and followed agile practices.",
    skills: ["React",  "JavaScript", "PostgreSQL", "HTML", "CSS"],
    certificateUrl: "https://drive.google.com/file/d/1lX09VCzZQhHzgkV6faJF8JV_AqJ8JevA/view?usp=sharing",
    type: "Internship"
  },
  {
    title: "AI-ML Virtual Internship",
    organization: "AWS Academy",
    duration: "Jan 2025 – Mar 2025",
    description: "Explored AI and ML fundamentals with AWS tools like SageMaker. Worked on model training and evaluation with real-world datasets.",
    skills: ["Machine Learning", "Python", "AWS", "SageMaker"],
    certificateUrl: "https://drive.google.com/file/d/1rJcLyBAXWy2C0VkFUUHNnoGDwImOXd1m/view?usp=sharing",
    type: "Internship"
  },
 

  ];

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const openCertificate = (url: string) => {
    if (url !== "#") {
      window.open(url, '_blank');
    } else {
      alert("Certificate link would open here - Please add your actual certificate URL");
    }
  };

  return (
    <section id="certificates" className={`py-20 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Certificates & Internships
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto mb-6"></div>
          <p className={`max-w-2xl mx-auto transition-colors duration-300 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            A journey through internships and certifications that fuel my tech passion.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className={`rounded-2xl border hover:border-purple-500 transition-all duration-300 overflow-hidden ${
                theme === 'dark' 
                  ? 'bg-gray-700 border-gray-600' 
                  : 'bg-white border-gray-200 shadow-lg hover:shadow-xl'
              }`}
            >
              {/* Card Header */}
              <div
                className="p-6 cursor-pointer"
                onClick={() => toggleCard(index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-purple-500/20 rounded-lg">
                      <Award className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className={`text-xl font-semibold transition-colors duration-300 ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>
                          {cert.title}
                        </h3>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          cert.type === 'Internship' 
                            ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
                            : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                        }`}>
                          {cert.type}
                        </span>
                      </div>
                      <p className="text-purple-400 font-medium">{cert.organization}</p>
                      <div className={`flex items-center text-sm mt-1 transition-colors duration-300 ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        <Calendar className="w-4 h-4 mr-1" />
                        {cert.duration}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openCertificate(cert.certificateUrl);
                      }}
                      className="p-2 text-purple-400 hover:bg-purple-500/10 rounded-lg transition-colors"
                      title="View Certificate"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </button>
                    {expandedCard === index ? (
                      <ChevronUp className={`w-6 h-6 transition-colors duration-300 ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`} />
                    ) : (
                      <ChevronDown className={`w-6 h-6 transition-colors duration-300 ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`} />
                    )}
                  </div>
                </div>
              </div>

              {/* Expanded Content */}
              {expandedCard === index && (
                <div className={`px-6 pb-6 border-t transition-colors duration-300 ${
                  theme === 'dark' ? 'border-gray-600' : 'border-gray-200'
                }`}>
                  <div className="pt-6">
                    <p className={`leading-relaxed mb-4 transition-colors duration-300 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {cert.description}
                    </p>
                    
                    {/* Skills */}
                    <div className="mb-4">
                      <h4 className={`text-sm font-semibold mb-2 transition-colors duration-300 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        Skills Gained:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 text-sm bg-purple-500/20 text-purple-400 rounded-full border border-purple-500/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Certificate Action */}
                    <button
                      onClick={() => openCertificate(cert.certificateUrl)}
                      className="inline-flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                    >
                      <Award className="w-4 h-4" />
                      <span>View Certificate</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;