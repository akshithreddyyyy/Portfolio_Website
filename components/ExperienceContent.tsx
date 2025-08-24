
'use client';

export default function ExperienceContent() {
  const experiences = [
    {
      title: "Web Trainee Designer",
      company: "Revive Tek Solutions Pvt. Ltd.",
      period: "May 2024 – July 2024",
      location: "Paid Internship",
      description: [
        "Design and Build company Web application as per Business Requirements.",
        "Involved in Front End Development which was done using Web Technologies such as HTML, CSS and JavaScript and jQuery.",
        "Worked with MySQL database and performed CRUD operations.",
        "Involved in version controlling the Changes using GIT and maintaining GITHUB repository.",
        "Performed software analysis and unit testing using Visual Studio. Understanding of current web technologies or programming practices through continuous learning, workshops, and participated in design meetings."
      ],
      technologies: ["HTML", "CSS", "JavaScript", "jQuery", "MySQL", "GIT", "Visual Studio"]
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Work Experience</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional experience in web development and technology
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{experience.title}</h3>
                  <p className="text-blue-600 font-medium mb-2">{experience.company}</p>
                </div>
                <div className="text-sm text-gray-600">
                  <p className="mb-1">{experience.period}</p>
                  <p className="flex items-center gap-1">
                    <i className="ri-briefcase-line"></i>
                    {experience.location}
                  </p>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {experience.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-600 leading-relaxed flex items-start gap-2">
                    <i className="ri-arrow-right-s-line text-blue-600 mt-1 flex-shrink-0"></i>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
