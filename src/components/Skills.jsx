import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '../assets/assets';
import { FaLaptopCode } from 'react-icons/fa6';
import { HiSparkles } from 'react-icons/hi2'; // Replaces FaSparkles

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
      {/* Background Ambient Glows & Radial Mesh Grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[160px] animate-pulse" />
        <div 
          className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[160px] animate-pulse" 
          style={{ animationDelay: '2s' }} 
        />
        <div className="absolute -bottom-20 left-1/3 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[160px]" />
        
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative container mx-auto px-6 max-w-7xl z-10">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-semibold tracking-widest uppercase text-purple-300 font-mono mb-4 backdrop-blur-md">
            <FaLaptopCode className="text-purple-400" /> Technical Arsenal
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black mb-4 tracking-tight text-white">
            Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-300">Stack & Skills</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Technologies, frameworks, and architectures I leverage to develop production-grade platforms.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-14">
          {categories.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono transition-all duration-300 cursor-pointer ${
                activeTab === tab.key
                  ? 'bg-purple-600 text-white font-semibold shadow-lg shadow-purple-600/25 border border-purple-400/50 scale-[1.02]'
                  : 'bg-neutral-900/80 text-neutral-400 hover:text-white border border-neutral-800 hover:border-neutral-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skills Bento Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto items-stretch">
          <AnimatePresence>
            {filteredSkills.map((skill, index) => {
              const IconComponent = skill.icon;

              return (
                <motion.div
                  layout
                  key={skill.id || index}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.05 }}
                  className={`relative bg-neutral-900/60 rounded-3xl p-6 sm:p-7 border border-neutral-800/80 backdrop-blur-xl transition-all duration-300 ${skill.borderColor} hover:-translate-y-1.5 shadow-2xl group overflow-hidden flex flex-col justify-between`}
                >
                  {/* Radial Hover Glow Background */}
                  <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full blur-3xl transition-all duration-500 pointer-events-none ${skill.bgGlow}`} />

                  <div>
                    {/* Header: Icon + Title */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        {IconComponent && <IconComponent className={`${skill.color} text-2xl`} />}
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
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-neutral-800/60">
                    {skill.tags.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-neutral-950/80 border border-neutral-800/80 rounded-lg text-[11px] font-mono text-purple-300/90 tracking-wide hover:border-purple-500/30 transition-colors"
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