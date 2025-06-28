import React from 'react';
import { motion } from 'framer-motion';
const Skills = () => {
    return (
        <section id="skills" className="py-16 md:py-20 text-center text-gray-300">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: false, amount: 0.2 }}
                className="text-5xl font-light mb-6"
            >
                Core <span className="text-green-500 font-bold">Skills</span>
            </motion.h2>

            <div className="max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-2 gap-10 text-left">

                {/* On mobile: stack label + badges together */}
                <div className="flex flex-col space-y-12">
                    <motion.div whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        viewport={{ once: false, amount: 0.2 }}>
                        <span className="block text-lg md:text-xl italic font-medium mb-4">Expert In</span>
                        <div className="flex flex-wrap gap-3 md:gap-4">
                            <SkillBadge name="JavaScript" />
                            <SkillBadge name="React" />
                            <SkillBadge name="React Router" />
                            <SkillBadge name="Node.js" />
                            <SkillBadge name="MongoDB" />
                        </div>
                    </motion.div>

                    <motion.div whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        viewport={{ once: false, amount: 0.2 }}>
                        <span className="block text-lg md:text-xl italic font-medium mb-4">Comfortable In</span>
                        <div className="flex flex-wrap gap-3 md:gap-4">
                            <SkillBadge name="Tailwind" />
                            <SkillBadge name="HTML" />
                            <SkillBadge name="CSS" />
                        </div>
                    </motion.div>

                    <motion.div whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        viewport={{ once: false, amount: 0.2 }}>
                        <span className="block text-lg md:text-xl italic font-medium mb-4">Learning</span>
                        <div className="flex flex-wrap gap-3 md:gap-4">
                            <SkillBadge name="Axios" />
                            <SkillBadge name="Firebase" />
                            <SkillBadge name="Express.js" />
                            <SkillBadge name="Next.js" />
                            <SkillBadge name="Three.js" />
                        </div>
                    </motion.div>

                    <motion.div whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        viewport={{ once: false, amount: 0.2 }}>
                        <span className="block text-lg md:text-xl italic font-medium mb-4">Tools</span>
                        <div className="flex flex-wrap gap-3 md:gap-4">
                            <SkillBadge name="Git" />
                            <SkillBadge name="GitHub" />
                            <SkillBadge name="Chrome Dev Tools" />
                            <SkillBadge name="VS Code" />
                        </div>
                </motion.div>
            </div>

        </div>
        </section >
    );
};

// ✅ Same gradient outline badge
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
