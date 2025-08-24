'use client';

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      location: "San Francisco, CA",
      description: [
        "Lead development of enterprise web applications serving 100k+ users",
        "Architected microservices infrastructure using Node.js and Docker",
        "Mentored junior developers and conducted code reviews",
        "Improved application performance by 40% through optimization"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"]
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      location: "Remote",
      description: [
        "Built responsive web applications using React and Express.js",
        "Implemented RESTful APIs and integrated third-party services",
        "Collaborated with design team to create intuitive user interfaces",
        "Deployed applications on cloud platforms with CI/CD pipelines"
      ],
      technologies: ["React", "Express.js", "MongoDB", "Firebase", "Jest"]
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency Pro",
      period: "2019 - 2020",
      location: "New York, NY",
      description: [
        "Developed custom WordPress themes and plugins",
        "Created interactive web experiences using JavaScript and CSS3",
        "Optimized websites for performance and SEO",
        "Worked closely with clients to understand requirements"
      ],
      technologies: ["JavaScript", "WordPress", "PHP", "SASS", "MySQL"]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Work Experience</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
      </div>
      
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
            <div className="bg-white border-l-4 border-blue-600 pl-8 py-6 shadow-lg rounded-r-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                  <h4 className="text-lg font-semibold text-blue-600">{exp.company}</h4>
                </div>
                <div className="text-right">
                  <p className="text-gray-600 font-medium">{exp.period}</p>
                  <p className="text-gray-500 text-sm flex items-center justify-end space-x-1">
                    <i className="ri-map-pin-line w-4 h-4 flex items-center justify-center"></i>
                    <span>{exp.location}</span>
                  </p>
                </div>
              </div>
              
              <ul className="space-y-2 mb-4">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <i className="ri-check-line text-green-600 mt-1 w-4 h-4 flex items-center justify-center flex-shrink-0"></i>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {index < experiences.length - 1 && (
              <div className="absolute left-0 top-full w-0.5 h-8 bg-blue-200"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}