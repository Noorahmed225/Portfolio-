import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  // Sample project data - replace with your actual projects
  const projectsData = [
    {
      id: 1,
      title: 'E-commerce Website',
      description: 'A full-stack e-commerce platform with user authentication, product catalog, and payment integration.',
      image: 'https://via.placeholder.com/600x400',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      category: 'web',
      github: 'https://github.com/yourusername/project1',
      demo: 'https://project1-demo.example.com',
    },
    {
      id: 2,
      title: 'Weather App',
      description: 'A weather application that provides real-time weather information based on user location or search.',
      image: 'https://via.placeholder.com/600x400',
      technologies: ['JavaScript', 'HTML/CSS', 'Weather API'],
      category: 'web',
      github: 'https://github.com/yourusername/project2',
      demo: 'https://project2-demo.example.com',
    },
    {
      id: 3,
      title: 'Task Management System',
      description: 'A task management application with features like task creation, assignment, status tracking, and notifications.',
      image: 'https://via.placeholder.com/600x400',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      category: 'mobile',
      github: 'https://github.com/yourusername/project3',
      demo: 'https://project3-demo.example.com',
    },
    // Add more projects as needed
  ];

  // Filter projects based on selected category
  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>
        
        {/* Filter buttons */}
        <div className="flex justify-center mb-10">
          <div className="flex space-x-2 bg-white p-1 rounded-lg shadow-md">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-md transition duration-300 ${filter === 'all' ? 'bg-primary text-white' : 'hover:bg-gray-100'}`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('web')}
              className={`px-4 py-2 rounded-md transition duration-300 ${filter === 'web' ? 'bg-primary text-white' : 'hover:bg-gray-100'}`}
            >
              Web
            </button>
            <button
              onClick={() => setFilter('mobile')}
              className={`px-4 py-2 rounded-md transition duration-300 ${filter === 'mobile' ? 'bg-primary text-white' : 'hover:bg-gray-100'}`}
            >
              Mobile
            </button>
            <button
              onClick={() => setFilter('other')}
              className={`px-4 py-2 rounded-md transition duration-300 ${filter === 'other' ? 'bg-primary text-white' : 'hover:bg-gray-100'}`}
            >
              Other
            </button>
          </div>
        </div>
        
        {/* Projects grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {filteredProjects.map((project) => (
            <motion.div 
              key={project.id} 
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
              variants={itemVariants}
            >
              <div className="relative overflow-hidden group">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center space-x-4">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white bg-dark p-2 rounded-full hover:bg-primary transition duration-300"
                      aria-label="GitHub Repository"
                    >
                      <FaGithub size={20} />
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white bg-dark p-2 rounded-full hover:bg-primary transition duration-300"
                      aria-label="Live Demo"
                    >
                      <FaExternalLinkAlt size={20} />
                    </a>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-dark">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-600">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;