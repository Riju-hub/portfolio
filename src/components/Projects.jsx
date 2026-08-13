
import React from 'react';
import { motion } from 'framer-motion';
import { ProjectDetails as projectsData } from '../assets/assets';
import ProjectCard from './ProjectCard';
import { FaArrowRight, FaGithub } from 'react-icons/fa';
import { HiFolder } from 'react-icons/hi2';
import { FaFolderPlus, FaCodeBranch } from 'react-icons/fa6';
import { LuFolderGit2 } from 'react-icons/lu';

function Projects() {
  const projectList = projectsData || [];

  return ( 
    <section
      id="projects"
      className="relative py-24 md:py-32 bg-[#08080a] text-white overflow-hidden selection:bg-purple-500/30 font-sans"
    >
      {/* Background Ambient Glow Mesh */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[160px] animate-pulse" />
        <div 
          className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[160px] animate-pulse" 
          style={{ animationDelay: '2s' }} 
        />
        <div className="absolute -bottom-20 left-1/3 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[160px]" />
      </div>

      <div className="relative container mx-auto px-6 max-w-7xl z-10">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16 md:mb-20"
        >
          {/* Animated Glowing Radar Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-neutral-900/80 border border-purple-500/30 text-xs font-mono font-medium tracking-wider uppercase mb-5 shadow-[0_0_20px_rgba(168,85,247,0.15)] backdrop-blur-md">
            <div className="relative flex items-center justify-center w-2.5 h-2.5">
              <motion.span 
                animate={{ opacity: [0.2, 0.8, 0.2], scale: [0.8, 1.8, 0.8] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full bg-purple-400/60 blur-[1px]"
              />
              <motion.span 
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 shadow-sm"
              />
            </div>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-200">
              Featured Portfolio
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-5 tracking-tight text-white">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-300">Projects</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-normal">
            A selection of production-ready full-stack applications, distributed platforms, and machine learning models.
          </p>
        </motion.div>
        
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto items-stretch">
          {projectList.map((project, index) => (
            <motion.div
              key={project.id || project.title || index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: (index % 3) * 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mt-16"
        >
          <a 
            href="https://github.com/Riju-hub/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-neutral-900/80 border border-white/10 hover:border-purple-500/50 text-neutral-200 hover:text-white font-semibold text-sm backdrop-blur-xl shadow-xl hover:shadow-purple-600/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            <FaGithub className="text-purple-400 text-lg group-hover:rotate-12 transition-transform duration-300" />
            <span>Explore All Repositories on GitHub</span>
            <FaArrowRight size={12} className="text-purple-400 group-hover:translate-x-1.5 transition-transform duration-300" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default Projects;