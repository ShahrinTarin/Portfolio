import React from "react";
import { motion } from "framer-motion";
import { FaTools, FaCube } from "react-icons/fa";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiAxios,
  SiFirebase,
  SiExpress,
  SiNextdotjs,
  SiGithub,
  SiGit,
  SiVercel,
  SiVisualstudiocode,
  SiGooglechrome,
} from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      label: "Expert In",
      skills: [
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "React", icon: <SiReact /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "MongoDB", icon: <SiMongodb /> },
      ],
    },
    {
      label: "Comfortable In",
      skills: [
        { name: "Tailwind", icon: <SiTailwindcss /> },
        { name: "HTML5", icon: <SiHtml5 /> },
        { name: "CSS3", icon: <SiCss3 /> },
        { name: "Axios", icon: <SiAxios /> },
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "Express.js", icon: <SiExpress /> },
      ],
    },
    {
      label: "Learning",
      skills: [
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Three.js", icon: <FaCube /> },
      ],
    },
    {
      label: "Tools",
      skills: [
        { name: "Git", icon: <SiGit /> },
        { name: "GitHub", icon: <SiGithub /> },
        { name: "VS Code", icon: <SiVisualstudiocode /> },
        { name: "Chrome DevTools", icon: <SiGooglechrome /> },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 px-6 md:px-12 bg-[#0f172a] text-white text-center"
    >
      {/* Button */}
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex items-center justify-center space-x-2 border border-gray-500 px-6 py-2 rounded-full text-gray-500 mb-6 mx-auto hover:bg-green-600 hover:text-white hover:border-green-600 transition"
      >
        <FaTools className="animate-pulse" />
        <span>SKILLS</span>
      </motion.button>

      {/* Heading */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-light mb-12"
      >
        Core <span className="text-green-500 font-bold">Skills</span>
      </motion.h2>

      {/* Skills Section */}
      <div className="space-y-16">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-left text-lime-400">
              {category.label}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {category.skills.map((skill, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center bg-[#1f2937] border border-lime-500 rounded-2xl p-6 shadow-lg hover:shadow-lime-500 transition duration-300"
                >
                  <div className="text-5xl text-green-400 mb-3">{skill.icon}</div>
                  <span className="text-white font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
