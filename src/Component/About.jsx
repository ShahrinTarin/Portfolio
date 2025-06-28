import React from 'react';
import { FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id='about' className=" mx-auto text-white text-center md:px-12 px-6 py-16 md:py-20 rounded-2xl bg-transparent shadow-lg">
      <motion.button
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: false, amount: 0.2 }}
        className="flex items-center justify-center space-x-2 border border-gray-500 px-6 py-2 rounded-full text-gray-400 mb-6 mx-auto hover:bg-green-600 hover:text-white hover:border-green-600 transition"
      >
        <FaUser />
        <span>ABOUT</span>
      </motion.button>

      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: false, amount: 0.2 }}
        className="text-5xl font-light mb-6"
      >
        Something <span className="text-green-500 font-bold">About me</span>
      </motion.h2>

      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.8, delay: 0.5 }}
       viewport={{ once: false, amount: 0.2 }}
        className="max-w-3xl mx-auto text-gray-400 leading-relaxed"
      >
            Assalamu Alaikum! I am Shahrin Akther, a dedicated and enthusiastic React front-end developer
        with a solid foundation in full-stack development. Over the past 9 months, I’ve been honing my skills
        in the MERN stack at Programming Hero, starting on December 31st, after spending time as a self-learner
        exploring the endless world of web development.
        <br /><br />
        I truly enjoy bringing ideas to life with modern, clean, and interactive user interfaces using React.js.
        I thrive on solving challenging coding problems and crafting smooth, engaging user experiences that make
        the web feel simple and powerful.
        <br /><br />
        Beyond programming, I have a love for solving math problems — numbers and logic have always fascinated me.
        When I’m not coding or crunching numbers, you’ll usually find me in the kitchen, experimenting with new recipes —
        cooking is my favorite hobby and a creative outlet that brings me joy.
        <br /><br />
        I’m always eager to learn, grow, and build meaningful projects that help people and sharpen my skills as a developer
        and problem solver.
      </motion.p>

      <motion.div
        whileInView={{ opacity: 1, scaleX: 1 }}
        initial={{ opacity: 0, scaleX: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        viewport={{ once: false, amount: 0.2 }}
        className="h-[2px] bg-gray-600 w-full mt-12 origin-left"
      ></motion.div>
    </section>
  );
};

export default About;
