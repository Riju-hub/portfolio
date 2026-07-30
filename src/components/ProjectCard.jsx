import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const ProjectCard = ({ title, description, image, tech, demo, code }) => {
  return ( 
    <div className='group relative bg-dark-300 overflow-hidden rounded-2xl border border-neutral-800 hover:border-purple-500/40 hover:-translate-y-2 transition-all duration-300 cursor-pointer shadow-xl flex flex-col h-full'>
      
      {/* Image with overlay */}
      <div className='relative overflow-hidden'>
        <img 
          src={image} 
          alt={title} 
          className='w-full h-52 sm:h-56 md:h-60 object-cover group-hover:scale-110 transition-transform duration-500'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-dark-300 via-transparent to-transparent opacity-80'></div>
      </div>

      <div className='p-6 flex flex-col flex-1'>
        <h3 className='text-lg sm:text-xl font-bold mb-2 text-white group-hover:text-purple-300 transition-colors duration-300'>
          {title}
        </h3>
        <p className='text-gray-400 text-sm md:text-base mb-4 leading-relaxed flex-1'>
          {description}
        </p>

        {/* Tech tags */}
        <div className='flex flex-wrap gap-2 mb-5'>
          {tech.map((item, index) => (
            <span key={index} className='px-3 py-1 bg-dark-400 border border-neutral-700 rounded-full text-xs md:text-sm text-[#84cfff] font-medium'>
              {item}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className='flex gap-3 mt-auto'>
          {demo ? (
            <a 
              href={demo} 
              target="_blank" 
              rel="noopener noreferrer" 
              className='flex-1 flex items-center justify-center gap-2 text-center px-4 py-2.5 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg font-medium text-white hover:shadow-lg hover:shadow-purple-600/30 transition duration-300 text-sm'
            >
              <FaExternalLinkAlt size={12} /> Live Demo
            </a>
          ) : (
            <span className='flex-1 flex items-center justify-center gap-2 text-center px-4 py-2.5 bg-neutral-800 rounded-lg font-medium text-gray-500 text-sm cursor-not-allowed'>
              Demo Unavailable
            </span>
          )}

          {code ? (
            <a 
              href={code} 
              target="_blank" 
              rel="noopener noreferrer" 
              className='flex-1 flex items-center justify-center gap-2 text-center px-4 py-2.5 border border-purple-500/60 text-purple-300 rounded-lg font-medium hover:bg-purple-500/10 transition duration-300 text-sm'
            >
              <FaGithub size={14} /> GitHub
            </a>
          ) : (
            <span className='flex-1 flex items-center justify-center gap-2 text-center px-4 py-2.5 border border-neutral-800 text-gray-600 rounded-lg font-medium text-sm cursor-not-allowed'>
              Private
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;