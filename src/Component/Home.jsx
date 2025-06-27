import React from 'react';
import About from './About';
import Projects from './Projects';
import Hero from './Hero';
import Education from './Education';

const Home = () => {
    return (
        <div className='text-[#80ed99] w-full'>
          <Hero></Hero>
          <About></About>
          <Education></Education>
        </div>
    );
};

export default Home;