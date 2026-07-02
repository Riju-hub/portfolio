import React from 'react';
import { motion } from 'framer-motion';
import { aboutInfo } from '../assets/assets';

function About() {
  return ( 
    <section
      id='about'
      className='relative py-20 md:py-28 bg-neutral-900 text-white overflow-hidden'
    >
      {/* Subtle background accents */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-1/4 -left-32 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl'></div>
        <div className='absolute bottom-1/4 -right-32 w-72 h-72 bg-pink-600/10 rounded-full blur-3xl'></div>
      </div>

      <div className="relative container mx-auto px-6">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className='text-center mb-14 md:mb-20'
        >
          <span className='inline-block text-xs md:text-sm font-semibold tracking-widest uppercase text-purple-400 mb-3'>
            Get To Know Me
          </span>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight'>
            About <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500'>Me</span>
          </h2>
          <p className='text-gray-400 max-w-2xl mx-auto text-base md:text-lg'>
            Get to know more about my background and passion
          </p>
        </motion.div>
        
        {/* Two-Column Content Layout */}
        <div className='flex flex-col lg:flex-row items-start gap-12 lg:gap-16 max-w-6xl mx-auto'>
          
          {/* Left Column: My Journey Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className='w-full lg:w-2/5 lg:sticky lg:top-28'
          >
            <h3 className='text-2xl md:text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300'>
              My Journey
            </h3>

            <div className='space-y-5 mb-8'>
              <p className='text-gray-300 text-base md:text-lg leading-relaxed'>
                I am a Computer Science student and aspiring Software Engineer with a strong interest in <b className='text-white'>Full-Stack Development</b>, <b className='text-white'>Artificial Intelligence</b>, and <b className='text-white'>Machine Learning</b>.
              </p>
              <p className='text-gray-300 text-base md:text-lg leading-relaxed'>
                I enjoy building scalable web applications using the <b className='text-white'>MERN stack</b> and exploring data-driven solutions through <b className='text-white'>machine learning</b> and <b className='text-white'>deep learning</b>. I am continuously learning new technologies, working on real-world projects, and improving my problem-solving skills to create impactful software solutions.
              </p>
            </div>

            {/* Highlighted quote strip */}
            <div className='relative pl-5 py-1 border-l-2 border-purple-500'>
              <p className='text-gray-400 italic text-sm md:text-base leading-relaxed'>
                "Turning ideas into scalable software, one line of code at a time."
              </p>
            </div>
          </motion.div>
          
          {/* Right Column: Dynamic Info Cards Grid */}
          <div className='w-full lg:w-3/5'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6'>
              {aboutInfo.map((data, index) => (
                <motion.div 
                  key={data.id || index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="relative bg-neutral-800/50 p-6 rounded-2xl border border-neutral-800 backdrop-blur-sm transform hover:-translate-y-1.5 hover:border-purple-500/40 transition-all duration-300 cursor-pointer shadow-xl group overflow-hidden"
                >
                  {/* Hover glow */}
                  <div className='absolute -top-10 -right-10 w-24 h-24 bg-purple-500/0 group-hover:bg-purple-500/10 rounded-full blur-2xl transition-all duration-500'></div>

                  <div className="relative text-3xl mb-4 text-purple-400 group-hover:text-pink-400 transition-colors duration-300 w-12 h-12 flex items-center justify-center rounded-xl bg-neutral-900/60 group-hover:bg-neutral-900 border border-neutral-800">
                    {data.icon && <data.icon className={`${data.color} w-7 h-7`}/>}
                  </div>

                  <h3 className='relative text-lg font-bold mb-2 text-white group-hover:text-purple-300 transition-colors duration-300'>
                    {data.title}
                  </h3>
                  
                  <p className='relative text-gray-400 text-sm leading-relaxed'>
                    {data.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;