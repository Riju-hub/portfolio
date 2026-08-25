import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '../assets/assets';

const categories = [
  { key: 'all', label: 'All Capabilities' },
  { key: 'web', label: 'Full-Stack Web' },
  { key: 'ai', label: 'AI & Data Science' },
  { key: 'devops', label: 'DevOps & Databases' }
];

const highlights = [
  { label: 'Core Paradigm', value: 'Decoupled MERN & AI Pipelines' },
  { label: 'Runtime & APIs', value: 'Node.js / Express REST & WebSockets' },
  { label: 'Data Science', value: 'Python (PyTorch, Pandas, Scikit-Learn)' },
  { label: 'Infrastructure', value: 'Git Versioning, Vercel & Cloud Deployments' }
];

function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredSkills = activeTab === 'all' 
    ? skills 
    : skills.filter((s) => s.category === activeTab);

  return ( 
    <section
      id="skills"
      className="relative py-24 md:py-32 bg-[#08080a] text-white overflow-hidden selection:bg-purple-500/30 font-sans"
    >
      {/* GPU-Accelerated Static Radial Glow Mesh (Zero paint cost during scroll) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none transform-gpu">
        <div 
          className="absolute -top-40 -left-40 w-[500px] h-[500px]" 
          style={{ background: 'radial-gradient(circle, rgba(147, 51, 234, 0.14) 0%, rgba(0, 0, 0, 0) 70%)' }}
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

      <div className="relative container mx-auto px-6 max-w-7xl z-10">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12 md:mb-16"
        >
          {/* Static Radar Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-neutral-900/90 border border-purple-500/30 text-xs font-mono font-medium tracking-wider uppercase mb-5 shadow-lg">
            <div className="relative flex items-center justify-center w-2.5 h-2.5">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 shadow-sm" />
            </div>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-200">
              Technical Arsenal
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-5 tracking-tight text-white">
            Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-300">Stack &amp; Skills</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-normal">
            Production-tested frameworks, architectural patterns, and computational toolkits I use to ship scalable platforms.
          </p>
        </motion.div>

        {/* Modern Engineering Summary Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-6xl mx-auto">
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut', delay: i * 0.04 }}
              viewport={{ once: true, amount: 0.2 }}
              className="p-4 rounded-2xl bg-neutral-900/80 border border-white/10 shadow-lg transform-gpu hover:border-purple-500/30 transition-colors duration-150"
            >
              <span className="text-[10px] font-mono uppercase tracking-widest text-purple-400 block mb-1">
                {h.label}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-neutral-200 leading-snug">
                {h.value}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12 p-1.5 rounded-2xl bg-neutral-950/80 border border-white/10 max-w-fit mx-auto shadow-xl">
          {categories.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`relative px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-mono transition-colors duration-150 cursor-pointer ${
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

        {/* Bento Grid Layout for Skills */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => {
              const IconComponent = skill.icon;

              return (
                <motion.div
                  layout
                  key={skill.id || skill.title}
                  initial={{ opacity: 0, scale: 0.96, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: 15 }}
                  transition={{ duration: 0.35, ease: 'easeOut', delay: index * 0.03 }}
                  whileHover={{ y: -3 }}
                  className={`relative bg-neutral-900/80 rounded-3xl p-6 sm:p-7 border border-white/10 transition-all duration-150 ${skill.borderColor || 'hover:border-purple-500/40'} shadow-xl group overflow-hidden flex flex-col justify-between transform-gpu`}
                >
                  {/* Subtle Top Border Line Accent */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

                  <div>
                    {/* Header: Icon + Category Badge + Title */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:border-purple-500/30 transition-all duration-150 shadow-inner">
                        {IconComponent && <IconComponent className={`${skill.color || 'text-purple-400'} text-xl`} />}
                      </div>

                      <div className="flex items-center gap-1.5">
                        {skill.level && (
                          <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 bg-neutral-950/90 px-2.5 py-1 rounded-full border border-neutral-800">
                            {skill.level}
                          </span>
                        )}
                        <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-purple-300 bg-purple-950/40 px-2.5 py-1 rounded-full border border-purple-500/30">
                          {skill.badge || (skill.category === 'web' ? 'Full-Stack' : skill.category === 'ai' ? 'Intelligence' : 'Infrastructure')}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-baseline justify-between mb-2">
                      <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-150">
                        {skill.title}
                      </h3>
                      {skill.proficiency && (
                        <span className="text-xs font-mono text-neutral-400 font-medium">
                          {skill.proficiency}
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6">
                      {skill.description}
                    </p>
                  </div>

                  {/* Tech Tags with Interactive Hover Accent */}
                  <div>
                    <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider mb-2.5">
                      Tooling &amp; Frameworks:
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-neutral-800/80">
                      {skill.tags.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-neutral-950/90 border border-neutral-800/90 rounded-xl text-[11px] font-mono text-purple-300/90 tracking-wide hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-white transition-all duration-150"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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