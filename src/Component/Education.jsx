import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <div className="text-center md:px-12 px-6 py-16  rounded-2xl">
      {/* Education badge */}
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: false, amount: 0.2 }}
        className="flex items-center justify-center space-x-2 border border-gray-500 px-6 py-2 rounded-full text-gray-500 mb-6 mx-auto hover:bg-green-600 hover:text-white hover:border-green-600 transition"
      >
        <FaGraduationCap />
        <span>EDUCATION</span>
      </motion.button>

      {/* Date and Degree Badge */}
      <motion.span
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: false, amount: 0.2 }}
        className="text-gray-400 block"
      >
        2024 - Present
      </motion.span>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: false, amount: 0.2 }}
        className="inline-block bg-green-600 text-white px-4 py-1 rounded-full mb-2 mt-2"
      >
        B.Sc. Honours in Mathematics
      </motion.div>

      {/* Institute and Description */}
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: false, amount: 0.2 }}
        className="text-2xl font-bold mt-2"
      >
        MC College Sylhet
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: false, amount: 0.2 }}
        className="text-gray-400 max-w-3xl mx-auto mt-2"
      >
        I am currently pursuing my Bachelor of Science Honours in Mathematics at Murari Chand College, Sylhet.
        This journey has strengthened my analytical thinking, logical reasoning, and problem-solving mindset — all of which
        I bring into my work as a developer. Studying advanced mathematics challenges me to break down complex problems,
        think creatively, and find elegant solutions — skills that directly enhance how I approach building modern,
        efficient, and user-friendly web applications.
      </motion.p>

      {/* Divider */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: false, amount: 0.2 }}
        className="h-[2px] bg-gray-600 w-full mt-12 origin-left"
      ></motion.div>
    </div>
  );
};

export default Education;
