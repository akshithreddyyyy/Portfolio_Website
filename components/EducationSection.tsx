'use client';

export default function EducationSection() {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Stanford University",
      period: "2017 - 2019",
      location: "Stanford, CA",
      gpa: "3.9/4.0",
      coursework: [
        "Advanced Algorithms and Data Structures",
        "Machine Learning and AI",
        "Distributed Systems",
        "Software Engineering Principles"
      ],
      achievements: [
        "Dean's List for 4 consecutive semesters",
        "Research Assistant in AI Lab",
        "Published 2 research papers"
      ]
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      school: "University of California, Berkeley",
      period: "2013 - 2017",
      location: "Berkeley, CA",
      gpa: "3.7/4.0",
      coursework: [
        "Object-Oriented Programming",
        "Database Systems",
        "Computer Networks",
        "Web Development"
      ],
      achievements: [
        "Graduated Magna Cum Laude",
        "President of Computer Science Club",
        "Winner of Annual Hackathon 2016"
      ]
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-SAA-123456"
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2022",
      credentialId: "GCP-PD-789012"
    },
    {
      name: "React Developer Certification",
      issuer: "Meta",
      date: "2021",
      credentialId: "META-RD-345678"
    }
  ];

  return (
    <div className="space-y-10">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Education</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
      </div>
      
      <div className="space-y-8">
        <h3 className="text-2xl font-semibold text-gray-800 flex items-center space-x-2">
          <i className="ri-graduation-cap-line text-blue-600 w-6 h-6 flex items-center justify-center"></i>
          <span>Academic Background</span>
        </h3>
        
        {education.map((edu, index) => (
          <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border-l-4 border-blue-600">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
              <div className="flex-1">
                <h4 className="text-xl font-bold text-gray-800 mb-2">{edu.degree}</h4>
                <h5 className="text-lg font-semibold text-blue-600 mb-1">{edu.school}</h5>
                <p className="text-gray-600 flex items-center space-x-1">
                  <i className="ri-map-pin-line w-4 h-4 flex items-center justify-center"></i>
                  <span>{edu.location}</span>
                </p>
              </div>
              <div className="text-right mt-4 lg:mt-0">
                <p className="text-gray-600 font-medium">{edu.period}</p>
                <p className="text-green-600 font-bold">GPA: {edu.gpa}</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h6 className="font-semibold text-gray-800 mb-2">Relevant Coursework</h6>
                <ul className="space-y-1">
                  {edu.coursework.map((course, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <i className="ri-book-line text-blue-600 mt-1 w-4 h-4 flex items-center justify-center flex-shrink-0"></i>
                      <span className="text-gray-600 text-sm">{course}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h6 className="font-semibold text-gray-800 mb-2">Achievements</h6>
                <ul className="space-y-1">
                  {edu.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <i className="ri-award-line text-yellow-600 mt-1 w-4 h-4 flex items-center justify-center flex-shrink-0"></i>
                      <span className="text-gray-600 text-sm">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-gray-800 flex items-center space-x-2">
          <i className="ri-medal-line text-blue-600 w-6 h-6 flex items-center justify-center"></i>
          <span>Certifications</span>
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
              <h4 className="font-bold text-gray-800 mb-2">{cert.name}</h4>
              <p className="text-blue-600 font-semibold text-sm mb-1">{cert.issuer}</p>
              <p className="text-gray-500 text-sm mb-2">Issued: {cert.date}</p>
              <p className="text-xs text-gray-400">ID: {cert.credentialId}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}