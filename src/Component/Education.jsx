import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const Education= () => {
  return (
    <div className="text-center md:px-12 px-6 py-16 md:py-20 rounded-2xl">
      {/* Education badge */}
      <button className="flex items-center justify-center space-x-2 border border-gray-500 px-6 py-2 rounded-full text-gray-500 mb-6 mx-auto">
        <FaGraduationCap />
        <span>EDUCATION</span>
      </button>

      {/* Date and Degree Badge */}
      <span className="text-gray-400 block">2024 - Present</span>
      <div className="inline-block bg-green-600 text-white px-4 py-1 rounded-full mb-2 mt-2">
        B.Sc. Honours in Mathematics
      </div>

      {/* Institute and Description */}
      <h3 className="text-2xl font-bold mt-2">MC College Sylhet</h3>
      <p className="text-gray-400 max-w-3xl mx-auto mt-2">
        I am currently pursuing my Bachelor of Science Honours in Mathematics at Murari Chand College, Sylhet.
        This journey has strengthened my analytical thinking, logical reasoning, and problem-solving mindset — all of which
        I bring into my work as a developer. Studying advanced mathematics challenges me to break down complex problems,
        think creatively, and find elegant solutions — skills that directly enhance how I approach building modern,
        efficient, and user-friendly web applications.
      </p>

      {/* Divider */}
      <div className="h-[2px] bg-gray-600 w-full mt-12"></div>
    </div>
  );
};

export default Education;
