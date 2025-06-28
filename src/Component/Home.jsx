import React from 'react';
import About from './About';

import Hero from './Hero';
import Education from './Education';
import Skills from './Skills';
import ProjectsSection from './ProjectsSection';

const Home = () => {
    return (
        <div className='text-[#80ed99] w-full'>
          <Hero></Hero>
          <About></About>
          <Education></Education>
          <Skills></Skills>
          <ProjectsSection></ProjectsSection>
        </div>
    );
};

export default Home;