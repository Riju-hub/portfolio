import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../assets/assets';

function Skills() {
  return ( 
    <section
      id='skills'
      className='relative py-20 md:py-28 bg-dark-100 text-white overflow-hidden'
    >
      {/* Subtle background accents */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-0 right-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl'></div>
        <div className='absolute bottom-0 left-1/4 w-72 h-72 bg-pink-600/10 rounded-full blur-3xl'></div>
      </div>

      <div className='relative container mx-auto px-6'>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className='text-center mb-14 md:mb-20'
        >
          <span className='inline-block text-xs md:text-sm font-semibold tracking-widest uppercase text-purple-400 mb-3'>
            What I Bring
          </span>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight'>
            My <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500'>Skills</span>
          </h2>
          <p className='text-gray-400 max-w-2xl mx-auto text-base md:text-lg'>
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto'>
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id || index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: (index % 3) * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className='relative bg-dark-300 rounded-2xl p-6 md:p-7 border border-neutral-800 hover:border-purple-500/40 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer shadow-xl group overflow-hidden'
            >
              {/* Hover glow */}
              <div className='absolute -top-10 -right-10 w-24 h-24 bg-purple-500/0 group-hover:bg-purple-500/10 rounded-full blur-2xl transition-all duration-500'></div>

              {/* Header */}
              <div className='relative flex items-center gap-4 mb-4'>
                <div className='w-14 h-14 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300'>
                  <skill.icon className={`${skill.color} w-7 h-7`} />
                </div>
                <h3 className='text-lg md:text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300'>
                  {skill.title}
                </h3>
              </div>

              {/* Description */}
              <p className='relative text-gray-400 text-sm md:text-base mb-6 leading-relaxed'>
                {skill.description}
              </p>

              {/* Tags */}
              <div className='relative flex flex-wrap gap-2'>
                {skill.tags.map((tech) => (
                  <span
                    key={tech}
                    className='bg-dark-400 border border-neutral-700 rounded-full px-3 py-1 text-xs md:text-sm text-[#84cfff] font-medium tracking-wide'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;