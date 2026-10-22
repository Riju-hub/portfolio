// import React from 'react';
// import { motion } from 'framer-motion';
// import { ProjectDetails as projectsData } from '../assets/assets';
// import ProjectCard from './ProjectCard';
// import { FaArrowRight, FaGithub } from 'react-icons/fa';

// function Projects() {
//   const projectList = projectsData || [];

//   return ( 
//     <section
//       id="projects"
//       className="relative py-24 md:py-32 bg-[#08080a] text-white overflow-hidden selection:bg-purple-500/30 font-sans"
//     >
//       {/* GPU-Accelerated Static Radial Glow Mesh (Zero paint cost during scroll) */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none transform-gpu">
//         <div 
//           className="absolute -top-40 -left-40 w-[500px] h-[500px]" 
//           style={{ background: 'radial-gradient(circle, rgba(147, 51, 234, 0.15) 0%, rgba(0, 0, 0, 0) 70%)' }} 
//         />
//         <div 
//           className="absolute top-1/2 -right-40 w-[500px] h-[500px]" 
//           style={{ background: 'radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, rgba(0, 0, 0, 0) 70%)' }} 
//         />
//         <div 
//           className="absolute -bottom-20 left-1/3 w-[500px] h-[500px]" 
//           style={{ background: 'radial-gradient(circle, rgba(79, 70, 229, 0.12) 0%, rgba(0, 0, 0, 0) 70%)' }} 
//         />
//       </div>

//       <div className="relative container mx-auto px-6 max-w-7xl z-10">

//         {/* Section Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, ease: 'easeOut' }}
//           viewport={{ once: true, amount: 0.2 }}
//           className="text-center mb-16 md:mb-20"
//         >
//           {/* Static Clean Radar Badge */}
//           <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-neutral-900/90 border border-purple-500/30 text-xs font-mono font-medium tracking-wider uppercase mb-5 shadow-lg">
//             <div className="relative flex items-center justify-center w-2.5 h-2.5">
//               <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 shadow-sm" />
//             </div>
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-200">
//               Featured Portfolio
//             </span>
//           </div>

//           <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-5 tracking-tight text-white">
//             My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-300">Projects</span>
//           </h2>
//           <p className="text-neutral-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-normal">
//             A selection of production-ready full-stack applications, distributed platforms, and machine learning models.
//           </p>
//         </motion.div>
        
//         {/* Responsive Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto items-stretch">
//           {projectList.map((project, index) => (
//             <motion.div
//               key={project.id || project.title || index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.45, ease: 'easeOut', delay: (index % 3) * 0.06 }}
//               viewport={{ once: true, amount: 0.15 }}
//               className="transform-gpu"
//             >
//               <ProjectCard {...project} />
//             </motion.div>
//           ))}
//         </div>

//         {/* View More CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 15 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.4, ease: "easeOut" }}
//           viewport={{ once: true, amount: 0.3 }}
//           className="text-center mt-16"
//         >
//           <a 
//             href="https://github.com/Riju-hub/" 
//             target="_blank" 
//             rel="noopener noreferrer" 
//             className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-neutral-900/90 border border-white/10 hover:border-purple-500/50 text-neutral-200 hover:text-white font-semibold text-sm shadow-xl hover:shadow-purple-600/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
//           >
//             <FaGithub className="text-purple-400 text-lg group-hover:rotate-12 transition-transform duration-200" />
//             <span>Explore All Repositories on GitHub</span>
//             <FaArrowRight size={12} className="text-purple-400 group-hover:translate-x-1.5 transition-transform duration-200" />
//           </a>
//         </motion.div>

//       </div>
//     </section>
//   );
// }

// export default Projects;







import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectDetails as projectsData } from '../assets/assets';
import ProjectCard from './ProjectCard';
import { FaArrowRight, FaGithub, FaChevronDown } from 'react-icons/fa';

function Projects() {
  const projectList = projectsData || [];
  const [showAllMobile, setShowAllMobile] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen (< 640px matching Tailwind's 'sm' breakpoint)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Show only 3 on mobile unless expanded; always show all on sm+ screens
  const visibleProjects = isMobile && !showAllMobile 
    ? projectList.slice(0, 3) 
    : projectList;

  return ( 
    <section
      id="projects"
      className="relative py-20 sm:py-24 md:py-32 bg-[#08080a] text-white overflow-hidden selection:bg-purple-500/30 font-sans"
    >
      {/* GPU-Accelerated Static Radial Glow Mesh */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none transform-gpu">
        <div 
          className="absolute -top-40 -left-40 w-[500px] h-[500px]" 
          style={{ background: 'radial-gradient(circle, rgba(147, 51, 234, 0.15) 0%, rgba(0, 0, 0, 0) 70%)' }} 
        />
        <div 
          className="absolute top-1/2 -right-40 w-[500px] h-[500px]" 
          style={{ background: 'radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, rgba(0, 0, 0, 0) 70%)' }} 
        />
        <div 
          className="absolute -bottom-20 left-1/3 w-[500px] h-[500px]" 
          style={{ background: 'radial-gradient(circle, rgba(79, 70, 229, 0.12) 0%, rgba(0, 0, 0, 0) 70%)' }} 
        />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 max-w-7xl z-10">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          {/* Static Clean Radar Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-neutral-900/90 border border-purple-500/30 text-xs font-mono font-medium tracking-wider uppercase mb-5 shadow-lg">
            <div className="relative flex items-center justify-center w-2.5 h-2.5">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 shadow-sm" />
            </div>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-200">
              Featured Portfolio
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black mb-4 tracking-tight text-white">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-300">Projects</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed font-normal">
            A selection of production-ready full-stack applications, distributed platforms, and machine learning models.
          </p>
        </motion.div>
        
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto items-stretch">
          <AnimatePresence>
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.id || project.title || index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: (index % 3) * 0.05 }}
                className="transform-gpu"
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Mobile-Only "View More" / "View Less" Toggle Button */}
        {isMobile && projectList.length > 3 && (
          <div className="flex justify-center mt-8 sm:hidden">
            <button
              onClick={() => setShowAllMobile((prev) => !prev)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-neutral-900 border border-purple-500/40 text-purple-300 hover:text-white font-medium text-xs tracking-wider uppercase font-mono shadow-lg active:scale-95 transition-all duration-200"
            >
              <span>{showAllMobile ? 'Show Fewer Projects' : `View More Projects (+${projectList.length - 3})`}</span>
              <FaChevronDown
                className={`transition-transform duration-300 ${showAllMobile ? 'rotate-180' : ''}`}
                size={11}
              />
            </button>
          </div>
        )}

        {/* Global GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-14 sm:mt-16"
        >
          <a 
            href="https://github.com/Riju-hub/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group inline-flex items-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-neutral-900/90 border border-white/10 hover:border-purple-500/50 text-neutral-200 hover:text-white font-semibold text-xs sm:text-sm shadow-xl hover:shadow-purple-600/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <FaGithub className="text-white-400 text-base sm:text-lg group-hover:rotate-12 transition-transform duration-200" />
            <span>Explore All Repositories on GitHub</span>
            <FaArrowRight size={11} className="text-purple-400 group-hover:translate-x-1.5 transition-transform duration-200" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default Projects;