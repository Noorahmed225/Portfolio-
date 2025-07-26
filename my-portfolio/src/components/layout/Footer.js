import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { id: 'github', icon: <FaGithub size={20} />, url: 'https://github.com/yourusername' },
    { id: 'linkedin', icon: <FaLinkedin size={20} />, url: 'https://linkedin.com/in/yourusername' },
    { id: 'email', icon: <FaEnvelope size={20} />, url: 'mailto:your.email@example.com' },
  ];

  return (
    <footer className="bg-dark text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">Student Portfolio</p>
            <p className="text-sm text-gray-400">© {currentYear} All Rights Reserved</p>
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
                aria-label={link.id}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;