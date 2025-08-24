
'use client';

import { useState } from 'react';

export default function ProjectsContent() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Mobile App', 'Robotics', 'Web Development'];

  const projects = [
    {
      id: 1,
      title: "Spot and Play",
      description: "Android Application for finding and booking cricket turfs with real-time availability and slot management.",
      longDescription: "Developed a comprehensive Android application that allows users to discover cricket turfs in their area, check availability, and book time slots. Implemented location-based filtering and real-time status tracking for seamless user experience.",
      image: "https://readdy.ai/api/search-image?query=Modern%20cricket%20turf%20booking%20mobile%20app%20interface%20showing%20location%20map%20with%20cricket%20ground%20markers%20and%20booking%20slots%2C%20clean%20mobile%20UI%20design%20with%20green%20sports%20theme%20and%20user-friendly%20navigation&width=600&height=400&seq=1&orientation=landscape",
      technologies: ["HTML", "CSS", "React JS", "JavaScript", "Mobile Development"],
      category: "Mobile App",
      github: "#",
      demo: "#",
      features: [
        "Location-based turf discovery",
        "Real-time slot availability",
        "Booking management system",
        "User-friendly mobile interface"
      ]
    },
    {
      id: 2,
      title: "Automated Serving Robot",
      description: "Arduino-based robot capable of following predefined paths and serving customers autonomously.",
      longDescription: "Built an intelligent serving robot using Arduino board and IR sensors that can navigate through designated paths to accomplish serving tasks. Enhanced the program to improve path-following accuracy and task completion efficiency.",
      image: "https://readdy.ai/api/search-image?query=Arduino-based%20serving%20robot%20with%20IR%20sensors%20on%20wheels%20following%20a%20path%20in%20restaurant%20or%20cafe%20environment%2C%20modern%20robotics%20technology%20with%20clean%20background&width=600&height=400&seq=2&orientation=landscape",
      technologies: ["Arduino", "IR Sensors", "C Programming", "Hardware Integration"],
      category: "Robotics",
      github: "#",
      demo: "#",
      features: [
        "Autonomous path navigation",
        "IR sensor-based guidance",
        "Serving task automation",
        "Programmable route planning"
      ]
    },
    {
      id: 3,
      title: "Web Designing - CodSoft",
      description: "Collection of web projects including trading website landing page, personal portfolio, and calculator application.",
      longDescription: "Created multiple web applications during CodSoft internship including a professional trading website landing page, personal portfolio website, and a functional calculator. All projects built using modern web technologies with responsive design.",
      image: "https://readdy.ai/api/search-image?query=Modern%20web%20development%20portfolio%20showing%20trading%20website%20landing%20page%20and%20calculator%20app%20on%20computer%20screen%2C%20professional%20web%20design%20with%20clean%20layouts%20and%20responsive%20design%20elements&width=600&height=400&seq=3&orientation=landscape",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      category: "Web Development",
      github: "#",
      demo: "#",
      features: [
        "Trading website landing page",
        "Personal portfolio design",
        "Functional calculator app",
        "Responsive web design"
      ]
    },
    {
      id: 4,
      title: "Clothing Co.",
      description: "Full-stack E-commerce website for clothing retail with comprehensive shopping features and admin panel.",
      longDescription: "Developed a complete E-commerce platform for clothing retail using Java full-stack development. Features include product catalog, shopping cart, user authentication, payment processing, and administrative dashboard for inventory management.",
      image: "https://readdy.ai/api/search-image?query=Modern%20e-commerce%20clothing%20website%20interface%20showing%20product%20grid%20with%20fashionable%20clothes%2C%20shopping%20cart%20and%20checkout%20features%2C%20professional%20online%20store%20design%20with%20clean%20layout&width=600&height=400&seq=4&orientation=landscape",
      technologies: ["Java", "Spring Framework", "SQL", "Full Stack Development", "E-commerce"],
      category: "Web Development",
      github: "#",
      demo: "#",
      features: [
        "Product catalog management",
        "Shopping cart functionality",
        "User authentication system",
        "Admin dashboard",
        "Payment integration",
        "Inventory management"
      ]
    }
  ];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of my work showcasing various technologies and problem-solving approaches
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer whitespace-nowrap ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.demo}
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md text-center font-medium hover:bg-blue-700 transition-colors cursor-pointer"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-md text-center font-medium hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
