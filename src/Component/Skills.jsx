import React from 'react';
import { motion } from 'framer-motion';
import { FaTools } from 'react-icons/fa';

const Skills = () => {
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
      <section id="skills" className="md:py-20 md:px-12 px-6 py-16 text-center text-gray-300">
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: false, amount: 0.2 }}
          className="flex items-center justify-center space-x-2 border border-gray-500 px-6 py-2 rounded-full text-gray-500 mb-6 mx-auto hover:bg-green-600 hover:text-white hover:border-green-600 transition"
        >
          <FaTools className='icon-bounce' />
          <span>SKILLS</span>
        </motion.button>
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-5xl font-light mb-6"
        >
          Core <span className="text-green-500 font-bold">Skills</span>
        </motion.h2>

        <div className="max-w-7xl mx-auto flex flex-col space-y-6 md:space-y-10 text-left">

          {/** Each block uses flex-row justify-between + badges justify-start */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-col md:flex-row md:items-center md:justify-between"
          >
            <span className="block text-lg md:text-xl italic font-medium mb-2 md:mb-0">
              Expert In
            </span>
            <div className="flex flex-wrap justify-start gap-3 md:gap-4">
              <SkillBadge name="JavaScript" />
              <SkillBadge name="React" />
              <SkillBadge name="React Router" />
              <SkillBadge name="Node.js" />
              <SkillBadge name="MongoDB" />
            </div>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-col md:flex-row md:items-center md:justify-between"
          >
            <span className="block text-lg md:text-xl italic font-medium mb-2 md:mb-0">
              Comfortable In
            </span>
            <div className="flex flex-wrap justify-start gap-3 md:gap-4">
              <SkillBadge name="Tailwind" />
              <SkillBadge name="HTML" />
              <SkillBadge name="CSS" />
              <SkillBadge name="Axios" />
              <SkillBadge name="Firebase" />
              <SkillBadge name="Express.js" />
            </div>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-col md:flex-row md:items-center md:justify-between"
          >
            <span className="block text-lg md:text-xl italic font-medium mb-2 md:mb-0">
              Learning
            </span>
            <div className="flex flex-wrap justify-start gap-3 md:gap-4">
              <SkillBadge name="Next.js" />
              <SkillBadge name="Three.js" />
            </div>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-col md:flex-row md:items-center md:justify-between"
          >
            <span className="block text-lg md:text-xl italic font-medium mb-2 md:mb-0">
              Tools
            </span>
            <div className="flex flex-wrap justify-start gap-3 md:gap-4">
              <SkillBadge name="Git" />
              <SkillBadge name="GitHub" />
              <SkillBadge name="Chrome Dev Tools" />
              <SkillBadge name="VS Code" />
            </div>
          </motion.div>

        </div>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
          className="h-[2px] bg-gray-600 w-full mt-12 origin-left"
        ></motion.div>
      </section>
    </>
  );
};

const SkillBadge = ({ name }) => (
  <span className="
    relative inline-block p-[2px] rounded-full 
    bg-gradient-to-r from-[#80ed99] to-[#38b000]
  ">
    <span className="
      block rounded-full bg-black px-4 py-1 text-[#80ed99]
      hover:bg-gradient-to-r hover:from-[#80ed99] hover:to-[#38b000] hover:text-black transition
    ">
      {name}
    </span>
  </span>
);

export default Skills;
