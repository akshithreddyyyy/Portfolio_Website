'use client';

export default function SkillsSection() {
  const skillCategories = [
    {
      category: "Frontend Development",
      icon: "ri-computer-line",
      color: "blue",
      skills: [
        { name: "React", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "HTML5/CSS3", level: 92 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Next.js", level: 82 }
      ]
    },
    {
      category: "Backend Development",
      icon: "ri-server-line",
      color: "green",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Python", level: 85 },
        { name: "Express.js", level: 90 },
        { name: "REST APIs", level: 92 },
        { name: "GraphQL", level: 78 },
        { name: "Microservices", level: 80 }
      ]
    },
    {
      category: "Database & Cloud",
      icon: "ri-cloud-line",
      color: "purple",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 82 },
        { name: "Redis", level: 75 },
        { name: "AWS", level: 88 },
        { name: "Docker", level: 80 },
        { name: "Kubernetes", level: 72 }
      ]
    },
    {
      category: "Tools & Others",
      icon: "ri-tools-line",
      color: "orange",
      skills: [
        { name: "Git", level: 90 },
        { name: "Linux", level: 85 },
        { name: "CI/CD", level: 78 },
        { name: "Jest/Testing", level: 82 },
        { name: "Figma", level: 75 },
        { name: "Agile/Scrum", level: 88 }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: { bg: "bg-blue-100", text: "text-blue-800", progress: "bg-blue-600", icon: "text-blue-600" },
      green: { bg: "bg-green-100", text: "text-green-800", progress: "bg-green-600", icon: "text-green-600" },
      purple: { bg: "bg-purple-100", text: "text-purple-800", progress: "bg-purple-600", icon: "text-purple-600" },
      orange: { bg: "bg-orange-100", text: "text-orange-800", progress: "bg-orange-600", icon: "text-orange-600" }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Skills & Expertise</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          A comprehensive overview of my technical skills and proficiency levels across various technologies and tools.
        </p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => {
          const colors = getColorClasses(category.color);
          
          return (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center space-x-3 mb-6">
                <div className={`p-3 ${colors.bg} rounded-lg`}>
                  <i className={`${category.icon} ${colors.icon} text-xl w-6 h-6 flex items-center justify-center`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800">{category.category}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className={`px-2 py-1 ${colors.bg} ${colors.text} text-xs rounded-full font-semibold`}>
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 ${colors.progress} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Additional Skills</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            "Problem Solving", "Team Leadership", "Project Management", "Code Reviews",
            "Technical Documentation", "Performance Optimization", "Security Best Practices",
            "API Design", "Database Design", "System Architecture", "DevOps", "Mobile Development"
          ].map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow duration-200 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}