import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../assets/assets';
import ProjectCard from './ProjectCard';
import { FaArrowRight } from 'react-icons/fa';

function Projects() {
  useEffect(() => {
    // Fixed typo: Added the missing "n" to Bhabasindhu
    document.title = "Bhabasindhu | Projects";
  }, []);

  return ( 
    <motion.div
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8, ease: "easeOut" }} // Toned down from 1s to 0.8s for snappier performance
      viewport={{ once: true, amount: 0.1 }} // Switched once to true so it doesn't re-trigger jarringly when scrolling back up
      id="projects"
      className='py-20 bg-neutral-900 text-white' // Standardized theme dark styling
    >
      <div className="container mx-auto px-6 mt-10">
        <h2 className='text-3xl md:text-4xl font-extrabold text-center mb-4 tracking-tight'>
          My <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500'>Projects</span>
        </h2>
        
        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16 text-base md:text-lg'>
          A selection of my recent full-stack applications and intelligent systems
        </p>
        
        {/* Responsive Grid System */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
          {projects.map((project) => (
            <ProjectCard 
              key={project.id || project.title} // Secure mapping fallback key structure
              {...project}
            />
          ))}
        </div>

        {/* Uncommented and upgraded the "View More" link action item if you want to feature it cleanly */}
        
        <div className='text-center mt-16'>
          <a href="https://github.com/Riju-hub/" target="_blank" rel="noopener noreferrer" className='inline-flex items-center px-6 py-3 border border-purple-500 text-purple-400 rounded-lg font-medium hover:bg-purple-500/10 transition duration-300 gap-2'>
            <span>View More Projects on GitHub</span>
            <FaArrowRight size={14}/>
          </a>
        </div> 
       
      </div>
    </motion.div>
  );
}

export default Projects;