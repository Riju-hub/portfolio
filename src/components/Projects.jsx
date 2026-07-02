import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../assets/assets';
import ProjectCard from './ProjectCard';
import { FaArrowRight } from 'react-icons/fa';

function Projects() {
  return ( 
    <section
      id="projects"
      className='relative py-20 md:py-28 bg-neutral-900 text-white overflow-hidden'
    >
      {/* Background accents */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-1/3 -left-32 w-72 h-72 bg-pink-600/10 rounded-full blur-3xl'></div>
        <div className='absolute bottom-1/3 -right-32 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl'></div>
      </div>

      <div className="relative container mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className='text-center mb-14 md:mb-20'
        >
          <span className='inline-block text-xs md:text-sm font-semibold tracking-widest uppercase text-purple-400 mb-3'>
            Portfolio
          </span>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight'>
            My <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500'>Projects</span>
          </h2>
          <p className='text-gray-400 max-w-2xl mx-auto text-base md:text-lg'>
            A selection of my recent full-stack applications and intelligent systems
          </p>
        </motion.div>
        
        {/* Responsive Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto'>
          {projects.map((project, index) => (
            <motion.div
              key={project.id || project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: (index % 3) * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

        {/* View more CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className='text-center mt-16'
        >
          <a 
            href="https://github.com/Riju-hub/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className='inline-flex items-center px-6 py-3 border border-purple-500 text-purple-400 rounded-lg font-medium hover:bg-purple-500/10 hover:-translate-y-0.5 transition duration-300 gap-2'
          >
            <span>View More Projects on GitHub</span>
            <FaArrowRight size={14}/>
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default Projects;