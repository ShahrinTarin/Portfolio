import React from 'react';
import { FaUser } from 'react-icons/fa';

const About = () => {
  return (
    <section className="mb-16 mx-auto text-white text-center md:px-12 px-6 py-16 md:py-20 rounded-2xl">
      <button className="flex items-center justify-center space-x-2 border border-gray-500 px-6 py-2 rounded-full text-gray-500 mb-6 mx-auto">
        <FaUser />
        <span>ABOUT</span>
      </button>

      <h2 className="text-5xl font-light mb-4">
        Something <span className="text-green-500 font-bold">About me</span>
      </h2>

      <p className="max-w-3xl mx-auto text-gray-400 leading-relaxed">
        Assalamu Alaikum! I am Shahrin Akther, a dedicated and enthusiastic React front-end developer with a strong
        understanding of full-stack development. Over the past 9 months, I have been honing my skills in MERN stack
        web development, with a special focus on building modern, interactive front-end applications using React.js.
        I’m passionate about creating clean, efficient user experiences and continuously learning new technologies to grow as a developer.
      </p>
         <div className="h-[2px] bg-gray-600 w-full mt-12"></div>
    </section>
  );
};

export default About;
