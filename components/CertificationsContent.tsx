
'use client';

export default function CertificationsContent() {
  const certifications = [
    {
      title: "Excel Essential Training (Microsoft 365) Certificate",
      issuer: "Microsoft",
      issueDate: "2024",
      description: "Comprehensive training on Microsoft Excel 365 features, formulas, data analysis, and advanced functionalities.",
      skills: ["Microsoft Excel", "Data Analysis", "Spreadsheets", "Office 365"]
    },
    {
      title: "Python Essential Training Certification",
      issuer: "Training Institute",
      issueDate: "2024",
      description: "Essential Python programming concepts, data structures, object-oriented programming, and practical applications.",
      skills: ["Python Programming", "Data Structures", "OOP", "Programming Logic"]
    },
    {
      title: "C Language Training Certification",
      issuer: "Training Institute",
      issueDate: "2023",
      description: "Fundamental C programming concepts, memory management, pointers, and system-level programming.",
      skills: ["C Programming", "Memory Management", "Pointers", "System Programming"]
    },
    {
      title: "SAP S4/HANA Training Certification",
      issuer: "SAP",
      issueDate: "2024",
      description: "Training on SAP S/4HANA system, business processes, and enterprise resource planning solutions.",
      skills: ["SAP S/4HANA", "ERP Systems", "Business Processes", "Enterprise Solutions"]
    },
    {
      title: "JAVA Full Stack Certification",
      issuer: "Training Institute",
      issueDate: "2024",
      description: "Complete Java full stack development including frontend, backend, databases, and frameworks.",
      skills: ["Java", "Spring Framework", "Full Stack Development", "Web Applications"]
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Certifications</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional certifications that validate my technical expertise and continuous learning
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Professional Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{cert.title}</h3>
                  <p className="text-blue-600 font-medium text-sm mb-1">{cert.issuer}</p>
                  <p className="text-gray-500 text-sm">{cert.issueDate}</p>
                </div>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{cert.description}</p>

                <div className="flex flex-wrap gap-1">
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

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Continuous Learning</h3>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            I believe in continuous learning and staying updated with the latest technologies. 
            These certifications represent my commitment to professional development and expertise in various technologies.
          </p>
          <div className="flex justify-center gap-8 mt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">5</div>
              <div className="text-sm text-gray-600">Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">4</div>
              <div className="text-sm text-gray-600">Technology Areas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
