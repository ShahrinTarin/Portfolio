import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaInfoCircle, FaTimes } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="w-11/12 w-full mx-auto rounded-xl border border-gray-500 md:p-6 lg:flex gap-8 hover:border-green-500 transition"
      >
        {/* Left: Image */}
        <div className="lg:w-1/2 p-4 flex items-center justify-center">
          <img
            src={project.image}
            alt={project.title}
            className="rounded-lg w-full h-full object-cover"
          />
        </div>

        {/* Right: Content */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <h2 className="text-3xl font-semibold mb-4 text-white">{project.title}</h2>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full border border-green-500 text-sm text-green-400"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-gray-300 mb-4">{project.description}</p>

          {/* Key Features */}
          <p className="text-purple-400 font-semibold mb-2">Key Features:</p>
          <ul className="text-gray-400 mb-6 list-disc list-inside space-y-1">
            {project.keyFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-purple-500 px-4 py-2 rounded-lg hover:bg-purple-700 hover:text-white transition"
            >
              Live Preview <FaExternalLinkAlt size={14} />
            </a>
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center gap-2 border border-purple-500 px-4 py-2 rounded-lg hover:bg-purple-700 hover:text-white transition"
            >
              Details <FaInfoCircle size={16} />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md overflow-y-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-[#111] text-gray-300 rounded-xl p-8 w-full max-w-5xl max-h-[90vh] overflow-y-auto relative"
          >
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
              aria-label="Close"
            >
              <FaTimes size={20} />
            </button>

            <h3 className="text-3xl font-bold mb-6">{project.title} — Details</h3>

            <div className="space-y-4">
              <p>
                <strong className="text-green-400">Tech Stack:</strong>{' '}
                {project.stack.join(', ')}
              </p>

              <p>
                <strong className="text-green-400">Description:</strong>{' '}
                {project.description}
              </p>

              <p>
                <strong className="text-green-400">Live Link:</strong>{' '}
                <a
                  href={project.liveUrl}
                  className="text-purple-400 underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.liveUrl}
                </a>
              </p>

              <p>
                <strong className="text-green-400">GitHub:</strong>{' '}
                <a
                  href={project.sourceUrl}
                  className="text-purple-400 underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.sourceUrl}
                </a>
              </p>

              {project.challenges && (
                <p>
                  <strong className="text-green-400">Challenges Faced:</strong>{' '}
                  {project.challenges}
                </p>
              )}

              {project.improvements && (
                <p>
                  <strong className="text-green-400">Future Plans:</strong>{' '}
                  {project.improvements}
                </p>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
