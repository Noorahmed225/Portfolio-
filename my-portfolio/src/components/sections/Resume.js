import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaBriefcase } from 'react-icons/fa';

const Resume = () => {
  // Sample work experience data - replace with your actual experience
  const experiences = [
    {
      id: 1,
      title: 'Fresher',
      company: '',
      period: 'Present',
      description: 'Iam fresher doing projects to gain realtime experience in web development and exploring other languages also.',
    },

    // Add more experiences as needed
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
    <section id="resume" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">Resume</h2>
        
        <div className="flex justify-center mb-10">
          <motion.a
            href="/resume.pdf" // Replace with actual path to your resume PDF
            download="YourName_Resume.pdf" // Replace with your name
            className="btn-primary flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload />
            <span>Download Resume</span>
          </motion.a>
        </div>
        
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Work Experience */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center mb-6">
              <FaBriefcase className="text-primary mr-2" size={24} />
              <h3 className="text-2xl font-bold text-dark">Work Experience</h3>
            </div>
            
            <div className="space-y-6">
              {experiences.map((exp) => (
                <motion.div 
                  key={exp.id} 
                  className="relative pl-8 border-l-2 border-gray-200 pb-6"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <h4 className="text-xl font-semibold text-dark">{exp.title}</h4>
                  <p className="text-gray-700">{exp.company}</p>
                  <p className="text-gray-500 text-sm mb-2">{exp.period}</p>
                  <p className="text-gray-600">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Education section removed as requested */}
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;