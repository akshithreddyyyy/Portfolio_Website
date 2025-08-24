'use client';

import { useState } from 'react';

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "fullstack",
      description: "A comprehensive e-commerce solution with advanced features including real-time inventory management, payment processing, and analytics dashboard.",
      image: "https://readdy.ai/api/search-image?query=Modern%20e-commerce%20website%20interface%20showing%20product%20listings%2C%20shopping%20cart%2C%20and%20clean%20design%20with%20blue%20and%20white%20color%20scheme%2C%20professional%20web%20design%20mockup&width=600&height=400&seq=ecommerce-project&orientation=landscape",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      features: [
        "User authentication & authorization",
        "Product catalog with search & filters",
        "Shopping cart & checkout process",
        "Payment integration with Stripe",
        "Admin dashboard with analytics",
        "Responsive design"
      ],
      liveUrl: "https://ecommerce-demo.com",
      githubUrl: "https://github.com/johndoe/ecommerce-platform",
      status: "Completed"
    },
    {
      id: 2,
      title: "Task Management App",
      category: "frontend",
      description: "A collaborative task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface.",
      image: "https://readdy.ai/api/search-image?query=Clean%20task%20management%20application%20interface%20with%20kanban%20boards%2C%20colorful%20cards%2C%20and%20modern%20UI%20design%2C%20project%20management%20dashboard%20mockup&width=600&height=400&seq=taskapp-project&orientation=landscape",
      technologies: ["React", "TypeScript", "Firebase", "Material-UI"],
      features: [
        "Kanban-style task boards",
        "Real-time collaboration",
        "Team member management",
        "Due date tracking",
        "File attachments",
        "Activity notifications"
      ],
      liveUrl: "https://taskapp-demo.com",
      githubUrl: "https://github.com/johndoe/task-management",
      status: "Completed"
    },
    {
      id: 3,
      title: "Weather Analytics API",
      category: "backend",
      description: "RESTful API service providing weather data analytics with machine learning predictions and comprehensive documentation.",
      image: "https://readdy.ai/api/search-image?query=Weather%20analytics%20dashboard%20with%20charts%2C%20graphs%2C%20and%20data%20visualization%2C%20clean%20API%20documentation%20interface%2C%20modern%20tech%20background&width=600&height=400&seq=weather-api-project&orientation=landscape",
      technologies: ["Python", "FastAPI", "PostgreSQL", "ML Libraries", "Docker"],
      features: [
        "Real-time weather data processing",
        "ML-based weather predictions",
        "RESTful API with OpenAPI docs",
        "Rate limiting & authentication",
        "Data caching with Redis",
        "Containerized deployment"
      ],
      liveUrl: "https://weather-api-docs.com",
      githubUrl: "https://github.com/johndoe/weather-api",
      status: "Completed"
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      category: "fullstack",
      description: "Analytics dashboard for social media management with multi-platform integration and automated reporting features.",
      image: "https://readdy.ai/api/search-image?query=Social%20media%20analytics%20dashboard%20with%20colorful%20charts%2C%20engagement%20metrics%2C%20and%20modern%20interface%20design%2C%20digital%20marketing%20analytics%20mockup&width=600&height=400&seq=social-dashboard-project&orientation=landscape",
      technologies: ["Next.js", "Express.js", "MongoDB", "Chart.js", "OAuth"],
      features: [
        "Multi-platform social media integration",
        "Real-time analytics & reporting",
        "Automated post scheduling",
        "Engagement tracking",
        "Custom dashboard widgets",
        "Export reports to PDF"
      ],
      liveUrl: "https://social-dashboard-demo.com",
      githubUrl: "https://github.com/johndoe/social-dashboard",
      status: "In Progress"
    },
    {
      id: 5,
      title: "Mobile Banking App",
      category: "mobile",
      description: "Secure mobile banking application with biometric authentication and comprehensive financial management tools.",
      image: "https://readdy.ai/api/search-image?query=Mobile%20banking%20app%20interface%20showing%20account%20balance%2C%20transaction%20history%2C%20and%20secure%20login%20screens%2C%20modern%20fintech%20app%20design%20mockup&width=600&height=400&seq=banking-app-project&orientation=landscape",
      technologies: ["React Native", "Node.js", "PostgreSQL", "JWT", "Biometrics"],
      features: [
        "Biometric authentication",
        "Account balance & transactions",
        "Money transfer & payments",
        "Bill payment integration",
        "Spending analytics",
        "Push notifications"
      ],
      liveUrl: "https://banking-app-demo.com",
      githubUrl: "https://github.com/johndoe/mobile-banking",
      status: "Completed"
    },
    {
      id: 6,
      title: "AI Content Generator",
      category: "ai",
      description: "AI-powered content generation tool using machine learning models for creating marketing copy and blog posts.",
      image: "https://readdy.ai/api/search-image?query=AI%20content%20generation%20interface%20with%20text%20editor%2C%20AI%20assistant%2C%20and%20modern%20writing%20tool%20design%2C%20artificial%20intelligence%20application%20mockup&width=600&height=400&seq=ai-content-project&orientation=landscape",
      technologies: ["Python", "OpenAI API", "React", "FastAPI", "PostgreSQL"],
      features: [
        "AI-powered text generation",
        "Multiple content templates",
        "SEO optimization suggestions",
        "Plagiarism detection",
        "Export to various formats",
        "Usage analytics"
      ],
      liveUrl: "https://ai-content-demo.com",
      githubUrl: "https://github.com/johndoe/ai-content-generator",
      status: "In Progress"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'fullstack', label: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
    { id: 'frontend', label: 'Frontend', count: projects.filter(p => p.category === 'frontend').length },
    { id: 'backend', label: 'Backend', count: projects.filter(p => p.category === 'backend').length },
    { id: 'mobile', label: 'Mobile', count: projects.filter(p => p.category === 'mobile').length },
    { id: 'ai', label: 'AI/ML', count: projects.filter(p => p.category === 'ai').length }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">My Projects</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore my portfolio of projects showcasing various technologies and problem-solving approaches.
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
              selectedCategory === category.id
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {category.label} ({category.count})
          </button>
        ))}
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div key={project.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  project.status === 'Completed' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {project.status}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {project.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2 text-sm">
                      <i className="ri-check-line text-green-600 mt-0.5 w-3 h-3 flex items-center justify-center flex-shrink-0"></i>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                  {project.features.length > 3 && (
                    <li className="text-sm text-gray-500">
                      +{project.features.length - 3} more features
                    </li>
                  )}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-md font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 cursor-pointer whitespace-nowrap"
                >
                  <i className="ri-external-link-line w-4 h-4 flex items-center justify-center"></i>
                  <span className="text-sm font-medium">Live Demo</span>
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors duration-200 cursor-pointer whitespace-nowrap"
                >
                  <i className="ri-github-line w-4 h-4 flex items-center justify-center"></i>
                  <span className="text-sm font-medium">Code</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <i className="ri-folder-open-line text-gray-400 text-4xl mb-4 w-16 h-16 flex items-center justify-center mx-auto"></i>
          <p className="text-gray-500">No projects found in this category.</p>
        </div>
      )}
    </div>
  );
}