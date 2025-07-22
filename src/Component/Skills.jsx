import React from "react";
import { motion } from "framer-motion";
import { FaTools, FaLaptopCode, FaFigma, FaGitAlt } from "react-icons/fa";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiGraphql,
  SiPrisma,
  SiDocker,
  SiPostman,
  SiVisualstudiocode,
  SiJest,
  SiVercel,
  SiGithub,
} from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      label: "Expert In",
      skills: [
        { name: "React", icon: <SiReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "TypeScript", icon: <SiTypescript /> },
      ],
    },
    {
      label: "Comfortable In",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Prisma", icon: <SiPrisma /> },
        { name: "GraphQL", icon: <SiGraphql /> },
        { name: "Jest", icon: <SiJest /> },
      ],
    },
    {
      label: "Learning",
      skills: [
        { name: "Docker", icon: <SiDocker /> },
        { name: "Postman", icon: <SiPostman /> },
      ],
    },
    {
      label: "Tools",
      skills: [
        { name: "VS Code", icon: <SiVisualstudiocode /> },
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <SiGithub /> },
        { name: "Figma", icon: <FaFigma /> },
        { name: "Vercel", icon: <SiVercel /> },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 px-6 md:px-12 bg-[#0f172a] text-gray-300 text-center"
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

      <div className="space-y-12">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl md:text-2xl italic font-medium mb-6 text-left">
              {category.label}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {category.skills.map((skill, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center bg-[#1e1e1e] border border-lime-400 rounded-lg p-6 shadow-md hover:shadow-lime-400 transition duration-300"
                >
                  <div className="text-4xl text-green-400 mb-2">{skill.icon}</div>
                  <span className="text-white font-semibold">{skill.name}</span>
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
