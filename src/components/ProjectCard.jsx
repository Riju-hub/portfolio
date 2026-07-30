// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaExternalLinkAlt, FaGithub, FaArrowRight } from 'react-icons/fa';

// const ProjectCard = ({ id, title, description, image, tech, demo, code }) => {
//   const navigate = useNavigate();

//   const handleCardClick = () => {
//     // Fallback slug generation if id is missing
//     const projectId = id || title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
//     navigate(`/project/${projectId}`);
//   };

//   return ( 
//     <div 
//       onClick={handleCardClick}
//       className='group relative bg-dark-300 overflow-hidden rounded-2xl border border-neutral-800 hover:border-purple-500/40 hover:-translate-y-2 transition-all duration-300 cursor-pointer shadow-xl flex flex-col h-full'
//     >
      
//       {/* Image with overlay */}
//       <div className='relative overflow-hidden'>
//         <img 
//           src={image} 
//           alt={title} 
//           className='w-full h-52 sm:h-56 md:h-60 object-cover group-hover:scale-110 transition-transform duration-500'
//         />
//         <div className='absolute inset-0 bg-gradient-to-t from-dark-300 via-transparent to-transparent opacity-80'></div>
//       </div>

//       <div className='p-6 flex flex-col flex-1'>
//         <h3 className='text-lg sm:text-xl font-bold mb-2 text-white group-hover:text-purple-300 transition-colors duration-300'>
//           {title}
//         </h3>
//         <p className='text-gray-400 text-sm md:text-base mb-4 leading-relaxed flex-1'>
//           {description}
//         </p>

//         {/* Tech tags */}
//         <div className='flex flex-wrap gap-2 mb-5'>
//           {tech.map((item, index) => (
//             <span key={index} className='px-3 py-1 bg-dark-400 border border-neutral-700 rounded-full text-xs md:text-sm text-[#84cfff] font-medium'>
//               {item}
//             </span>
//           ))}
//         </div>

//         {/* Action buttons - e.stopPropagation prevents triggering navigate when clicking demo/code */}
//         <div className='flex items-center gap-3 mt-auto' onClick={(e) => e.stopPropagation()}>
//           {demo ? (
//             <a 
//               href={demo} 
//               target="_blank" 
//               rel="noopener noreferrer" 
//               className='flex-1 flex items-center justify-center gap-2 text-center px-3 py-2 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg font-medium text-white hover:shadow-lg hover:shadow-purple-600/30 transition duration-300 text-xs sm:text-sm'
//             >
//               <FaExternalLinkAlt size={12} /> Live Demo
//             </a>
//           ) : (
//             <span className='flex-1 flex items-center justify-center gap-2 text-center px-3 py-2 bg-neutral-800 rounded-lg font-medium text-gray-500 text-xs sm:text-sm cursor-not-allowed'>
//               No Demo
//             </span>
//           )}

//           {code ? (
//             <a 
//               href={code} 
//               target="_blank" 
//               rel="noopener noreferrer" 
//               className='flex-1 flex items-center justify-center gap-2 text-center px-3 py-2 border border-purple-500/60 text-purple-300 rounded-lg font-medium hover:bg-purple-500/10 transition duration-300 text-xs sm:text-sm'
//             >
//               <FaGithub size={14} /> Code
//             </a>
//           ) : (
//             <span className='flex-1 flex items-center justify-center gap-2 text-center px-3 py-2 border border-neutral-800 text-gray-600 rounded-lg font-medium text-xs sm:text-sm cursor-not-allowed'>
//               Private
//             </span>
//           )}
//         </div>

//         {/* Details Link Indicator */}
//         <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-end">
//           <span className="text-xs font-semibold text-purple-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
//             View Full Details <FaArrowRight size={10} />
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaExternalLinkAlt, FaGithub, FaArrowRight } from 'react-icons/fa';

const ProjectCard = ({ id, title, description, image, tech = [], demo, code }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    // Prefer explicit ID, fallback to slug if ID is missing
    const projectId = id || title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    navigate(`/project/${projectId}`);
  };

  return ( 
    <div 
      onClick={handleCardClick}
      className='group relative bg-neutral-900/80 backdrop-blur-md overflow-hidden rounded-2xl border border-neutral-800/80 hover:border-purple-500/40 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer shadow-xl flex flex-col h-full'
    >
      {/* Subtle Card Hover Glow */}
      <div className='absolute -top-10 -right-10 w-28 h-28 bg-purple-600/0 group-hover:bg-purple-600/15 rounded-full blur-2xl transition-all duration-500 pointer-events-none' />

      {/* Image with Gradient Overlay */}
      <div className='relative overflow-hidden w-full h-52 sm:h-56 md:h-60 bg-neutral-950'>
        <img 
          src={image} 
          alt={title} 
          className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-90' />
      </div>

      <div className='p-6 flex flex-col flex-1 z-10'>
        <h3 className='text-lg sm:text-xl font-bold mb-2 text-white group-hover:text-purple-300 transition-colors duration-300'>
          {title}
        </h3>
        
        <p className='text-neutral-400 text-sm leading-relaxed mb-5 flex-1 line-clamp-3'>
          {description}
        </p>

        {/* Tech Badges */}
        <div className='flex flex-wrap gap-2 mb-6'>
          {tech.map((item, index) => (
            <span 
              key={index} 
              className='px-3 py-1 bg-purple-950/40 border border-purple-500/20 rounded-full text-xs text-purple-300 font-mono tracking-wide backdrop-blur-sm'
            >
              {item}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className='flex items-center gap-3 mt-auto' onClick={(e) => e.stopPropagation()}>
          {demo ? (
            <a 
              href={demo} 
              target="_blank" 
              rel="noopener noreferrer" 
              className='flex-1 flex items-center justify-center gap-2 text-center px-3.5 py-2.5 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl font-semibold text-white hover:shadow-lg hover:shadow-purple-600/30 transition duration-300 text-xs sm:text-sm'
            >
              <FaExternalLinkAlt size={11} /> Live Demo
            </a>
          ) : (
            <span className='flex-1 flex items-center justify-center gap-2 text-center px-3.5 py-2.5 bg-neutral-950/60 border border-neutral-800/80 rounded-xl font-medium text-neutral-500 text-xs sm:text-sm cursor-not-allowed'>
              No Demo
            </span>
          )}

          {code ? (
            <a 
              href={code} 
              target="_blank" 
              rel="noopener noreferrer" 
              className='flex-1 flex items-center justify-center gap-2 text-center px-3.5 py-2.5 bg-neutral-950 border border-neutral-800 hover:border-purple-500/40 text-neutral-200 hover:text-purple-300 rounded-xl font-semibold transition duration-300 text-xs sm:text-sm'
            >
              <FaGithub size={14} /> Code
            </a>
          ) : (
            <span className='flex-1 flex items-center justify-center gap-2 text-center px-3.5 py-2.5 bg-neutral-950/60 border border-neutral-800/80 rounded-xl font-medium text-neutral-600 text-xs sm:text-sm cursor-not-allowed'>
              Private
            </span>
          )}
        </div>

        {/* Details Link Indicator */}
        <div className="mt-4 pt-3 border-t border-neutral-800/60 flex items-center justify-end">
          <span className="text-xs font-semibold text-purple-400 flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
            View Full Details <FaArrowRight size={10} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;