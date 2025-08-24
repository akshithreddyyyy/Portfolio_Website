"use client";

export default function SkillsContent() {
  const skillCategories = [
    {
      title: "Programming and Scripting Languages",
      icon: "ri-code-line",
      skills: [
        { name: "Java", level: 90 },
        { name: "Python", level: 85 },
        { name: "C", level: 65 },
        { name: "C++", level: 60 },
      ],
    },
    {
      title: "Web Design Technologies",
      icon: "ri-layout-line",
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "jQuery", level: 80 },
        { name: "Bootstrap", level: 85 },
        { name: "JSON", level: 80 },
      ],
    },
    {
      title: "Operating Systems",
      icon: "ri-computer-line",
      skills: [
        { name: "LINUX", level: 80 },
        { name: "Windows", level: 85 },
      ],
    },
    {
      title: "Tools and Technologies",
      icon: "ri-tools-line",
      skills: [
        { name: "Eclipse", level: 80 },
        { name: "GIT", level: 85 },
        { name: "Visual Studio", level: 80 },
        { name: "Webservices (SOAP/REST)", level: 75 },
        { name: "IntelliJ IDEA", level: 85 },
      ],
    },
    {
      title: "Databases",
      icon: "ri-database-line",
      skills: [{ name: "MySQL", level: 80 }],
    },
  ];

  // ✅ Type fixed: level is number, return type is string
  const getColorClass = (level: number): string => {
    if (level >= 85) return "bg-green-500";
    if (level >= 80) return "bg-blue-500";
    if (level >= 75) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Technical Skills
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Programming languages, technologies and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <i className={`${category.icon} text-blue-600 text-xl`}></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-1000 ${getColorClass(
                          skill.level
                        )}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
