
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '../assets/assets';
import { FaLaptopCode, FaCheck } from 'react-icons/fa6';
import { HiSparkles, HiCpuChip, HiCommandLine } from 'react-icons/hi2';
import { FaTerminal } from 'react-icons/fa6';

const categories = [
  { key: 'all', label: 'All Capabilities' },
  { key: 'web', label: 'Full-Stack Web' },
  { key: 'ai', label: 'AI & Data Science' },
  { key: 'devops', label: 'DevOps & Databases' }
];

function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredSkills = activeTab === 'all' 
    ? skills 
    : skills.filter(s => s.category === activeTab);

  return ( 
    <section
      id="skills"
      className="relative py-24 md:py-32 bg-[#08080a] text-white overflow-hidden selection:bg-purple-500/30 font-sans"
    >
      {/* Background Ambient Glows & Gradient Mesh */}
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
          className="text-center mb-12 md:mb-16"
        >
          {/* Glowing Animated Radar Badge */}
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
              Technical Arsenal
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-5 tracking-tight text-white">
            Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-300">Stack & Skills</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-normal">
            Technologies, frameworks, and architectures I leverage to develop production-grade platforms.
          </p>
        </motion.div>

        {/* Dynamic Sliding Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-14 p-1.5 rounded-2xl bg-neutral-950/60 border border-white/10 backdrop-blur-xl max-w-fit mx-auto">
          {categories.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`relative px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-mono transition-all duration-300 cursor-pointer ${
                  isActive ? 'text-white font-semibold' : 'text-neutral-400 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabPill"
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl shadow-lg shadow-purple-600/30 border border-purple-400/30"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Bento Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => {
              const IconComponent = skill.icon;

              return (
                <motion.div
                  layout
                  key={skill.id || skill.title}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: index * 0.04 }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className={`relative bg-neutral-900/60 rounded-3xl p-6 sm:p-7 border border-white/10 backdrop-blur-xl transition-all duration-300 ${skill.borderColor || 'hover:border-purple-500/40'} shadow-2xl group overflow-hidden flex flex-col justify-between`}
                >
                  {/* Top Border Glow Line */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

                  {/* Radial Hover Glow Background */}
                  <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full blur-3xl transition-all duration-500 pointer-events-none ${skill.bgGlow || 'bg-purple-600/10 group-hover:bg-purple-600/20'}`} />

                  <div>
                    {/* Header: Icon + Title */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-purple-500/30 transition-all duration-300 shadow-inner">
                        {IconComponent && <IconComponent className={`${skill.color || 'text-purple-400'} text-2xl`} />}
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                        {skill.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6">
                      {skill.description}
                    </p>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-800/80">
                    {skill.tags.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-neutral-950/90 border border-neutral-800/90 rounded-xl text-[11px] font-mono text-purple-300/90 tracking-wide hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-white transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}

export default Skills;