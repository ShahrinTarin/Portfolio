import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp, FaDownload, FaHome } from 'react-icons/fa';
import { motion } from 'framer-motion';
const Hero = () => {
    return (
        <>
            <style>{`
        .icon-bounce {
          animation: bounce 3s infinite ease-in-out;
          display: inline-block;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .card-glow:hover {
          box-shadow:
            0 4px 15px rgba(59, 130, 246, 0.3),
            0 0 15px rgba(59, 130, 246, 0.2);
        }
      `}</style>
           <section id='home' className='py-16'>
             <motion.button whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: false, amount: 0.2 }} className="flex items-center space-x-2 border border-gray-500 px-6 py-2 rounded-full text-gray-500 mb-6  hover:bg-green-600 hover:text-white hover:border-green-600 transition">
                    <FaHome className='icon-bounce '  />
                    <span className="tracking-widest hover:text-white text-gray-500">INTRODUCE</span>
                </motion.button>
             <div className="flex flex-col-reverse gap-12 md:flex-row items-center justify-between  bg-transparent"> 
                <div className="md:w-10/12">
                    <motion.h1 whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: false, amount: 0.2 }} className="text-6xl font-light mb-6">Hi, I'm
                        Shahrin <span className="font-normal">Akther</span>
                    </motion.h1>
                    <motion.h2 whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: false, amount: 0.2 }}  className="text-3xl mb-4">
                        <span className="text-[#80ed99]">Web</span> <span className="text-[#80edc9]">Developer</span>
                    </motion.h2>
                    <motion.p whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: false, amount: 0.2 }} className="mb-8 text-base max-w-xl text-[#999999]">
                        Frontend Web Developer specializing in Javascript, React.js, Express.js and other modern Javascript libraries.. Proficient in crafting dynamic and responsive user interfaces that elevate user experiences. Skilled in leveraging modern frontend technologies to build visually stunning and highly functional web applications.
                    </motion.p>
                    <motion.a whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: false, amount: 0.2 }} href="#home" class="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                        <span class="w-full h-full bg-gradient-to-br from-[#80ed99] via-[#54ebff] to-[#122c12] group-hover:from-[#122c12] group-hover:via-[#54ebff] group-hover:to-[#80ed99] absolute"></span>
                        <span class="relative px-4 py-2 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                            <span class="relative text-white flex items-center"> Download Resume <FaDownload className="ml-2 icon-bounce" /></span>
                        </span>
                    </motion.a>
                    <motion.div whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: false, amount: 0.2 }} className="flex space-x-6 mt-8 text-2xl">
                        <a target="_blank" href="https://github.com/ShahrinTarin"><FaGithub size={40} /></a>
                        <a target="_blank" href="https://www.linkedin.com/in/shahrintarin-rahman-897362340/"><FaLinkedin size={40} /></a>
                        <a target="_blank" href="https://www.facebook.com/profile.php?id=61570044629513"><FaFacebook size={40} /></a>
                    </motion.div>
                </div>

                <div className="md:w-1/2 flex justify-center mt-12 md:mt-0">
                    <div className="relative md:w-96 w-70 h-70 md:h-96 rounded-full bg-gradient-to-tr from-[#80ed99]to-[#80ed99] flex items-center justify-center">
                        <img src='https://i.ibb.co/sdmrXmLC/9700-4-04.jpg' alt="Profile" className="md:w-96 w-70 h-70 md:h-96 object-cover rounded-full border-4 border-[#80ed99]" />
                    </div>
                </div>
            </div>
           </section>
        </>
    );
};

export default Hero;