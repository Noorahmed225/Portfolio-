import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaBook, FaMusic } from 'react-icons/fa';

const About = () => {
  // Education details
  const education = [
    {
      id: 1,
      degree: 'Bachelor in Computer Science',
      institution: 'Jain college of engineering belagavi',
      year: '2023 - 2026',
      description: 'Relevant coursework: Data Structures Algorithms, Web Development, Database Systems',
    },
    {
      id: 2,
      degree: 'Diploma',
      institution: 'K.H.Kabbur Instituttion of Engineering College Dharwad.',
      year: '2021 - 2023',
      description: 'I completed my polytechnic in mechatronics from K.H.Kabbur Instituttion of Engineering College Dharwad.',
    },
    {
      id: 3,
      degree: 'High School',
      institution: 'Rotary english medium high school dharwad.',
      description: 'I completed my schooling in 2020 from Rotary english medium high school Dharwad.',
    },
    // Add more education items as needed
  ];

  // Skills with proficiency levels
  const skills = [
    { id: 1, name: 'HTML/CSS', level: 100 },
    { id: 2, name: 'JavaScript', level: 100 },
    { id: 3, name: 'React', level: 100 },
    { id: 4, name: 'Node.js', level: 100 },
    { id: 5, name: 'Python', level: 100 },
    { id: 6, name: 'SQL', level: 100 },
  ];

  // Interests with icons
  const interests = [
    { id: 1, name: 'Programming', icon: <FaLaptopCode className="text-primary" size={24} /> },
    { id: 2, name: 'Learning', icon: <FaBook className="text-primary" size={24} /> },
    { id: 3, name: 'Music', icon: <FaMusic className="text-primary" size={24} /> },
    // Add more interests as needed
  ];

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
    <section id="about" className="py-20 bg-light">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Bio */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.h3 
              className="text-2xl font-bold mb-4 text-dark"
              variants={itemVariants}
            >
              Who I Am
            </motion.h3>
            <motion.p 
              className="text-gray-700 mb-6"
              variants={itemVariants}
            >
              I am a passionate student pursuing a degree in Computer Science with a focus on web development and software engineering. 
              I enjoy solving complex problems and creating user-friendly applications that make a positive impact.
            </motion.p>
            <motion.p 
              className="text-gray-700 mb-6"
              variants={itemVariants}
            >
              My journey in technology began when I join engineering, where I developed my first website. 
              Since then, I've been constantly learning and improving my skills through coursework, personal projects, and online resources.
            </motion.p>
            
            {/* Education */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <FaGraduationCap className="mr-2 text-primary" size={20} />
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.id} className="border-l-2 border-primary pl-4 py-1">
                    <h4 className="text-lg font-semibold">{edu.degree}</h4>
                    <p className="text-gray-600">{edu.institution}</p>
                    <p className="text-gray-500 text-sm">{edu.year}</p>
                    <p className="text-gray-700 mt-1">{edu.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          {/* Skills and Interests */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {/* Skills */}
            <motion.div className="mb-10" variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6 text-dark">Skills</h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.id} className="mb-2">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-primary h-2.5 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* Interests */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6 text-dark">Interests</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {interests.map((interest) => (
                  <div 
                    key={interest.id} 
                    className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300"
                  >
                    <div className="mb-2">{interest.icon}</div>
                    <h4 className="font-medium text-gray-700">{interest.name}</h4>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;