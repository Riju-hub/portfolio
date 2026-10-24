import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '../assets/assets';
import { HiSparkles } from 'react-icons/hi2';

const categories = [
  { key: 'all', label: 'All Capabilities' },
  { key: 'web', label: 'Full-Stack Web' },
  { key: 'ai', label: 'AI & Data Science' },
  { key: 'devops', label: 'DevOps & Databases' }
];

const highlights = [
  { label: 'Core Architecture', value: 'Decoupled MERN & AI Pipelines', accent: 'text-cyan-400' },
  { label: 'APIs & Streaming', value: 'FastAPI, Express & WebSockets', accent: 'text-purple-400' },
  { label: 'Intelligence Layer', value: 'PyTorch, Gemini & RAG Systems', accent: 'text-pink-400' },
  { label: 'Infrastructure', value: 'Vercel, Render & Supabase', accent: 'text-emerald-400' }
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredSkills = activeTab === 'all' 
    ? skills 
    : skills.filter((s) => s.category === activeTab);

  return ( 
    <section
      id="skills"
      className="relative py-20 sm:py-28 md:py-36 bg-[#08080a] text-zinc-100 overflow-hidden font-sans selection:bg-purple-500/20 selection:text-purple-300"
    >
      {/* 1. Zero-Repaint Static Background Layer: Cached on GPU as a dedicated compositor layer */}
      <div 
        className="absolute inset-0 overflow-hidden pointer-events-none -z-10 transform-gpu will-change-transform"
        aria-hidden="true"
      >
        <div 
          className="absolute -top-32 -left-32 w-80 sm:w-[500px] h-80 sm:h-[500px]" 
          style={{ background: 'radial-gradient(circle, rgba(147, 51, 234, 0.12) 0%, rgba(8, 8, 10, 0) 70%)' }}
        />
        <div 
          className="absolute top-1/2 -right-32 w-80 sm:w-[500px] h-80 sm:h-[500px]" 
          style={{ background: 'radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, rgba(8, 8, 10, 0) 70%)' }} 
        />
        <div 
          className="absolute -bottom-32 left-1/3 w-80 sm:w-[500px] h-80 sm:h-[500px]" 
          style={{ background: 'radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, rgba(8, 8, 10, 0) 70%)' }} 
        />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 max-w-7xl z-10">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12 sm:mb-16 md:mb-20 px-2 transform-gpu"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-purple-500/30 text-purple-300 text-xs font-mono mb-4 tracking-wide shadow-lg">
            <HiSparkles className="text-purple-400 text-xs" />
            <span className="font-semibold uppercase tracking-wider">Technical Arsenal</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black mb-4 tracking-tight text-white">
            Tech <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">Stack &amp; Skills</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed font-normal">
            Production-tested frameworks, architectural paradigms, and computational toolkits engineered for high-scale platforms.
          </p>
        </motion.div>

        {/* Engineering Summary Highlights */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10 max-w-6xl mx-auto">
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut', delay: i * 0.04 }}
              viewport={{ once: true, amount: 0.15 }}
              whileHover={{ y: -2 }}
              className="p-4 sm:p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/80 hover:border-purple-500/40 shadow-xl transition-colors duration-200 transform-gpu will-change-transform"
            >
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block mb-1">
                {h.label}
              </span>
              <span className={`text-xs sm:text-sm font-bold leading-snug block ${h.accent}`}>
                {h.value}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-12 p-1.5 rounded-2xl bg-zinc-950 border border-white/10 max-w-fit mx-auto shadow-2xl">
          {categories.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`relative px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-mono transition-colors duration-150 cursor-pointer ${
                  isActive ? 'text-white font-semibold' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSkillTabPill"
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl shadow-lg border border-purple-400/30 transform-gpu"
                    transition={{ type: "spring", stiffness: 450, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Bento Grid: Optimized for Composite-Only Transforms */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => {
              const IconComponent = skill.icon;
              const scaleRatio = (skill.percent || 85) / 100;

              return (
                <motion.div
                  layout
                  key={skill.id || skill.title}
                  initial={{ opacity: 0, scale: 0.98, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: 12 }}
                  transition={{ duration: 0.35, ease: 'easeOut', delay: index * 0.03 }}
                  whileHover={{ y: -4 }}
                  className="relative group rounded-3xl p-[1.5px] bg-gradient-to-b from-white/10 via-white/5 to-transparent hover:from-purple-500/40 hover:via-pink-500/20 hover:to-transparent transition-all duration-300 shadow-xl flex flex-col justify-between transform-gpu will-change-transform"
                >
                  {/* Replaced backdrop-blur with opaque pitch-black to prevent live GPU canvas read-backs */}
                  <div className="relative w-full h-full rounded-[23px] bg-[#0c0c0e] p-6 sm:p-7 flex flex-col justify-between overflow-hidden">
                    
                    <div>
                      {/* Header: Icon + Category Badge + Level */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-12 h-12 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:border-purple-500/40 transition-transform duration-200 shadow-inner">
                          {IconComponent && <IconComponent className={`${skill.color || 'text-purple-400'} text-xl`} />}
                        </div>

                        <div className="flex items-center gap-1.5">
                          {skill.level && (
                            <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 bg-zinc-900 px-2.5 py-1 rounded-full border border-zinc-800">
                              {skill.level}
                            </span>
                          )}
                          <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-purple-300 bg-purple-950/40 px-2.5 py-1 rounded-full border border-purple-500/30">
                            {skill.badge || 'Capability'}
                          </span>
                        </div>
                      </div>

                      {/* Title & Proficiency Label */}
                      <div className="flex items-baseline justify-between mb-2">
                        <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-150">
                          {skill.title}
                        </h3>
                        {skill.proficiency && (
                          <span className="text-xs font-mono text-zinc-400 font-semibold">
                            {skill.proficiency}
                          </span>
                        )}
                      </div>

                      {/* Zero-Layout-Shift Progress Bar (scaleX on GPU instead of width changes) */}
                      <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden mb-4 border border-zinc-800/80">
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: scaleRatio }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                          style={{ originX: 0 }}
                          className={`h-full w-full rounded-full bg-gradient-to-r ${skill.barGradient || 'from-purple-500 to-pink-500'} transform-gpu will-change-transform`}
                        />
                      </div>

                      {/* Description */}
                      <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                        {skill.description}
                      </p>
                    </div>

                    {/* Tooling Tags */}
                    <div>
                      <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-2.5">
                        Tooling &amp; Frameworks:
                      </div>
                      <div className="flex flex-wrap gap-1.5 pt-2.5 border-t border-zinc-800/80">
                        {skill.tags.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 bg-zinc-950 border border-zinc-800/90 rounded-xl text-[11px] font-mono text-zinc-300 tracking-wide hover:border-purple-500/50 hover:text-white transition-colors duration-150"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
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