
'use client';

export default function EducationContent() {
  const education = [
    {
      degree: "Bachelor's Degree in Computer Science and Engineering",
      institution: "CMR Institute of Technology",
      period: "Oct 2022 – May 2025",
      location: "Hyderabad, India",
      grade: "CGPA: 7.0/10",
      description: "Currently pursuing Bachelor's degree in Computer Science and Engineering with focus on software development, data structures, and algorithms.",
      highlights: [
        "Active participation in coding competitions",
        "Member of technical clubs",
        "Strong foundation in programming concepts",
        "Project-based learning approach"
      ]
    },
    {
      degree: "Diploma in Mechanical Engineering",
      institution: "VNR VJIET",
      period: "June 2019 – March 2022",
      location: "Hyderabad, India",
      grade: "CGPA: 8.21/10",
      description: "Completed diploma in Mechanical Engineering with excellent academic performance and practical skills.",
      highlights: [
        "Achieved high CGPA of 8.21",
        "Excellence in technical subjects",
        "Hands-on experience with engineering projects",
        "Strong analytical and problem-solving skills"
      ]
    }
  ];

  const activities = [
    {
      title: "College Cultural Events Organizer",
      description: "Organized various college cultural events and activities",
      type: "Leadership",
      icon: "ri-calendar-event-line"
    },
    {
      title: "Blood Bank Volunteer",
      description: "Volunteered in Street Cause for the Blood Bank to help community",
      type: "Community Service",
      icon: "ri-heart-line"
    }
  ];

  const certifications = [
    {
      title: "Excel Essential Training (Microsoft 365)",
      provider: "Microsoft",
      status: "Completed",
      skills: ["Excel", "Data Analysis", "Microsoft 365"]
    },
    {
      title: "Python Essential Training",
      provider: "Training Institute",
      status: "Completed", 
      skills: ["Python", "Programming", "Software Development"]
    },
    {
      title: "C Language Training",
      provider: "Training Institute",
      status: "Completed",
      skills: ["C Programming", "Data Structures", "Algorithms"]
    },
    {
      title: "SAP S4/HANA Training",
      provider: "SAP",
      status: "Completed",
      skills: ["SAP", "Enterprise Software", "Business Applications"]
    },
    {
      title: "JAVA Full Stack Development",
      provider: "Training Institute", 
      status: "Completed",
      skills: ["Java", "Spring Framework", "Full Stack Development", "Database"]
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Education & Learning</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My academic journey and continuous learning path in computer science and technology
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Academic Background</h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{edu.degree}</h3>
                    <p className="text-blue-600 font-medium mb-2">{edu.institution}</p>
                    <p className="text-gray-600 mb-2">{edu.description}</p>
                  </div>
                  <div className="lg:text-right lg:ml-6">
                    <p className="text-sm font-medium text-gray-700 mb-1">{edu.period}</p>
                    <p className="text-sm text-gray-600 mb-1 flex items-center lg:justify-end gap-1">
                      <i className="ri-map-pin-line"></i>
                      {edu.location}
                    </p>
                    <p className="text-sm font-medium text-green-600">{edu.grade}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Key Highlights:</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {edu.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="text-gray-600 text-sm flex items-start gap-2">
                        <i className="ri-star-line text-yellow-500 mt-1 flex-shrink-0"></i>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Extra Curricular Activities</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {activities.map((activity, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <i className={`${activity.icon} text-blue-600 text-xl`}></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{activity.title}</h3>
                    <p className="text-gray-600 mb-2">{activity.description}</p>
                    <span className="px-2 py-1 bg-green-100 text-green-600 rounded text-xs font-medium">
                      {activity.type}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800 flex-1">{cert.title}</h3>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-600">
                    {cert.status}
                  </span>
                </div>
                
                <div className="mb-4">
                  <p className="text-blue-600 font-medium mb-1">{cert.provider}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-blue-100 text-blue-600 rounded text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
