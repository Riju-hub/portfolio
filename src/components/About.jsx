import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { aboutInfo } from '../assets/assets';

function About() {
  useEffect(() => {
    document.title = "Bhabasindhu | About";
  }, []);

  return ( 
    <motion.div
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{duration:0.5,ease:"easeOut"}}
      viewport={{once:false,amount:0.2}}
      id='about'
      className='py-20 bg-neutral-900 text-white'
    >
      <div className="container mx-auto px-6 mt-10">
        
        {/* Heading */}
        <h2 className='text-3xl md:text-4xl font-extrabold text-center mb-4 tracking-tight'>
          About <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500'>Me</span>
        </h2>
        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16 text-base md:text-lg'>
          Get to know more about my background and passion
        </p>
        
        {/* Symmetrical Two-Column Content Layout */}
        <div className='flex flex-col lg:flex-row items-start gap-12 max-w-6xl mx-auto'>
          
          {/* Left Column: My Journey Text */}
          <div className='w-full lg:w-1/2 lg:sticky lg:top-28'>
            <h3 className='text-2xl md:text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300'>
              My Journey
            </h3>
            <p className='text-gray-300 mb-6 text-base md:text-lg leading-relaxed'>
              I am a Computer Science student and aspiring Software Engineer with a strong interest in <b>Full-Stack Development</b>, <b>Artificial Intelligence</b>, and <b>Machine Learning</b>. 
            </p>
            <p className='text-gray-300 text-base md:text-lg leading-relaxed'>
              I enjoy building scalable web applications using the <b>MERN stack</b> and exploring data-driven solutions through <b>machine learning</b> and <b>deep learning</b>. I am continuously learning new technologies, working on real-world projects, and improving my problem-solving skills to create impactful software solutions.
            </p>
          </div>
          
          {/* Right Column: Dynamic Info Cards Grid */}
          <div className='w-full lg:w-1/2'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
              {aboutInfo.map((data, index) => (
                <div 
                  key={data.id || index} 
                  className="bg-neutral-800/50 p-6 rounded-2xl border border-neutral-800 backdrop-blur-sm transform hover:-translate-y-1.5 transition-all duration-300 cursor-pointer shadow-xl group"
                >
                  {/* Icon Wrapper Container */}
                  <div className="text-3xl mb-4 text-purple-400 group-hover:text-pink-400 transition-colors duration-300">
                    {/* Dynamic Component Check Fallback */}
                    {data.icon && <data.icon />}
                  </div>

                  <h3 className='text-lg font-bold mb-2 text-white group-hover:text-purple-300 transition-colors duration-300'>
                    {data.title}
                  </h3>
                  
                  <p className='text-gray-400 text-sm leading-relaxed'>
                    {data.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}

export default About;