import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';
import { FaFolderOpen } from 'react-icons/fa';
const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/Projects.json')
      .then((response) => response.json())
      .then((data) => setProjects(data.projects))
      .catch((error) => console.error('Error loading projects:', error));
  }, []);

  return (
    <>
      <style>{`
        .icon-bounce {
          animation: bounce 3s infinite ease-in-out;
          display: inline-block;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .card-glow:hover {
          box-shadow:
            0 4px 15px rgba(59, 130, 246, 0.3),
            0 0 15px rgba(59, 130, 246, 0.2);
        }
      `}</style>
      <section id='projects' className="py-20 w-11/12 mx-auto space-y-12">
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: false, amount: 0.2 }}
          className="flex items-center justify-center space-x-2 border border-gray-500 px-6 py-2 rounded-full text-gray-500 mb-6 mx-auto hover:bg-green-600 hover:text-white hover:border-green-600 transition"
        >
          <FaFolderOpen className='icon-bounce' />
          <span>PROJECTS</span>
        </motion.button>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
          className="h-[2px] bg-gray-600 w-full mt-12 origin-left"
        ></motion.div>
      </section></>
  );
};

export default ProjectsSection;
