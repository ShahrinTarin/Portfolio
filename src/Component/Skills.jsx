import React from "react";
import { motion } from "framer-motion";
import { FaGitAlt, FaFigma, FaCode, FaTools } from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiVercel,
  SiGithub,
} from "react-icons/si";

const Skill = () => {
  const allSkills = [
    { name: "React", icon: <SiReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },

    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },

    { name: "VS Code", icon: <FaCode /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <SiGithub /> },
    { name: "Figma", icon: <FaFigma /> },
    { name: "Vercel", icon: <SiVercel /> },
  ];

  return (
    <section
      id="skills"
      className="pt-16 pb-10 px-6 md:px-12  text-gray-300 text-center"
    >
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex items-center justify-center space-x-2 border border-gray-500 px-6 py-2 rounded-full text-gray-500 mb-6 mx-auto hover:bg-green-600 hover:text-white hover:border-green-600 transition"
      >
        <FaTools className="icon-bounce" />
        <span>SKILLS</span>
      </motion.button>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-light mb-12"
      >
        Core <span className="text-green-500 font-bold">Skills</span>
      </motion.h2>
      <div className="overflow-hidden  py-6">
        <motion.div
          className="flex space-x-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
          style={{ width: "200%" }} // double width for duplication
        >
          {/* original skill cards */}
          {allSkills.map((skill, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center bg-[#1e1e1e] border border-green-400 rounded-lg p-6 shadow-md min-w-[140px]
                hover:scale-105 hover:border-green-500 hover:shadow-lg
                transition-transform transition-shadow duration-300 cursor-pointer"
            >
              <div className="text-5xl text-green-400 mb-3">{skill.icon}</div>
              <span className="text-white font-semibold">{skill.name}</span>
            </div>
          ))}

          {/* duplicate skill cards for seamless scroll */}
          {allSkills.map((skill, i) => (
            <div
              key={"dup-" + i}
              className="flex flex-col items-center justify-center bg-[#1e1e1e] border border-green-400 rounded-lg p-6 shadow-md min-w-[140px]
                hover:scale-105 hover:border-green-500 hover:shadow-lg
                transition-transform transition-shadow duration-300 cursor-pointer"
            >
              <div className="text-5xl text-green-400 mb-3">{skill.icon}</div>
              <span className="text-white font-semibold">{skill.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skill;
