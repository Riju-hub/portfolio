import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaExternalLinkAlt, FaGithub, FaArrowRight, FaEye } from 'react-icons/fa';

const ProjectCard = ({ id, title, description, image, tech = [], demo, code }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    const projectId = id || title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    navigate(`/project/${projectId}`);
  };

  return ( 
    <div 
      onClick={handleCardClick}
      className="group relative bg-neutral-900/80 overflow-hidden rounded-3xl border border-white/10 hover:border-purple-500/40 hover:-translate-y-1.5 transition-all duration-200 cursor-pointer shadow-2xl flex flex-col h-full transform-gpu"
    >
      {/* Top Border Glow Accent Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      {/* Image Container with Floating Overlay */}
      <div className="relative overflow-hidden w-full h-52 sm:h-56 bg-neutral-950">
        <img 
          src={image} 
          alt={title} 
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
        />
        
        {/* Soft Vignette Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-neutral-950/20 to-transparent opacity-90" />

        {/* Quick Details Floating Pill Badge */}
        <div className="absolute top-3.5 right-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <span className="px-3 py-1.5 rounded-xl bg-neutral-950/90 border border-white/20 text-[11px] font-mono text-purple-300 flex items-center gap-1.5 shadow-lg">
            <FaEye className="text-purple-400" /> View Details
          </span>
        </div>
      </div>

      {/* Card Content Area */}
      <div className="p-6 sm:p-7 flex flex-col flex-1 z-10 justify-between">
        <div>
          <h3 className="text-xl font-bold mb-2.5 text-white group-hover:text-purple-300 transition-colors duration-200">
            {title}
          </h3>
          
          <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
            {description}
          </p>
        </div>

        <div>
          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tech.map((item, index) => (
              <span 
                key={index} 
                className="px-3 py-1 bg-neutral-950/90 border border-neutral-800/90 rounded-xl text-[11px] font-mono text-purple-300/90 tracking-wide hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-white transition-all duration-150"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 pt-4 border-t border-neutral-800/80" onClick={(e) => e.stopPropagation()}>
            {demo ? (
              <a 
                href={demo} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex-1 flex items-center justify-center gap-2 text-center py-2.5 px-3.5 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 rounded-xl font-semibold text-white hover:shadow-lg hover:shadow-purple-600/30 transition-all duration-200 text-xs sm:text-sm"
              >
                <FaExternalLinkAlt size={11} /> Live Demo
              </a>
            ) : (
              <span className="flex-1 flex items-center justify-center gap-2 text-center py-2.5 px-3.5 bg-neutral-950/60 border border-neutral-800/80 rounded-xl font-medium text-neutral-500 text-xs sm:text-sm cursor-not-allowed">
                No Demo
              </span>
            )}

            {code ? (
              <a 
                href={code} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex-1 flex items-center justify-center gap-2 text-center py-2.5 px-3.5 bg-neutral-950 border border-neutral-800 hover:border-purple-500/40 text-neutral-200 hover:text-purple-300 rounded-xl font-semibold transition-all duration-200 text-xs sm:text-sm"
              >
                <FaGithub size={13} /> Code
              </a>
            ) : (
              <span className="flex-1 flex items-center justify-center gap-2 text-center py-2.5 px-3.5 bg-neutral-950/60 border border-neutral-800/80 rounded-xl font-medium text-neutral-600 text-xs sm:text-sm cursor-not-allowed">
                Private
              </span>
            )}
          </div>

          {/* Details Link Indicator */}
          <div className="mt-4 pt-3 flex items-center justify-end text-[11px] font-mono text-purple-400">
            <span className="flex items-center gap-1.5 group-hover:translate-x-1 transition-transform duration-200">
              Full Breakdown <FaArrowRight size={10} />
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;