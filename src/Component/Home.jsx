import React from 'react';
import About from './About';
import Projects from './Projects';
import Hero from './Hero';
import Education from './Education';
import Skills from './Skills';

const Home = () => {
    return (
        <div className='text-[#80ed99] w-full'>
          <Hero></Hero>
          <About></About>
          <Education></Education>
          <Skills></Skills>
        </div>
    );
};

export default Home;