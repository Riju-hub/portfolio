
import React from 'react';
import { motion } from "framer-motion";
import { educationData } from '../assets/assets';
import { FaGraduationCap, FaAward, FaSchool } from 'react-icons/fa';
import { HiAcademicCap, HiSparkles } from 'react-icons/hi2';

function Education() {
  return ( 
    <section
      id="education"
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
              Academic Background
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-5 tracking-tight text-white">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-300">Education</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-normal">
            Academic qualifications, specialized coursework, and educational milestones.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="max-w-3xl mx-auto relative">
          
          {/* Continuous Glowing Vertical Timeline Line */}
          <div className="absolute left-5 top-4 bottom-4 w-[2px] bg-gradient-to-b from-purple-500 via-pink-500 to-indigo-600/30 hidden md:block" />

          <div className="space-y-8 md:space-y-10">
            {educationData.map((item, index) => (
              <motion.div
                key={item.id || index}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="relative md:pl-16 group"
              >
                {/* Timeline Beacon Box with Graduation Cap */}
                <div className="absolute left-0 top-6 w-10 h-10 rounded-2xl bg-neutral-950 border border-purple-500/80 z-10 hidden md:flex items-center justify-center group-hover:border-pink-400 group-hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                  <FaGraduationCap className="text-purple-400 group-hover:text-pink-400 transition-colors duration-300 text-lg" />
                </div>

                {/* Glassmorphic Education Card */}
                <motion.div 
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="relative bg-neutral-900/60 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl hover:border-purple-500/40 transition-all duration-500 shadow-2xl overflow-hidden"
                >
                  {/* Top Border Glow Accent */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
                  
                  {/* Radial Hover Glow Background */}
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-purple-600/10 rounded-full blur-3xl group-hover:bg-purple-600/25 transition-all duration-500 pointer-events-none" />

                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-purple-300 transition-colors duration-300">
                        {item.degree}
                      </h3>
                      <p className="text-neutral-300 text-sm font-medium mt-1 flex items-center gap-2">
                        <FaSchool className="text-purple-400 text-xs" />
                        {item.institution}
                      </p>
                    </div>
                    
                    <span className="inline-block px-4 py-1.5 bg-neutral-950/80 text-purple-300 rounded-xl text-xs font-mono border border-neutral-800/80 backdrop-blur-md whitespace-nowrap self-start shadow-inner">
                      {item.duration}
                    </span>
                  </div>

                  {item.grade && (
                    <div className="mt-4 pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                      <span className="text-xs text-neutral-400 font-mono flex items-center gap-1.5">
                        <FaAward className="text-pink-400" /> Academic Score / Grade:
                      </span>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 font-mono font-semibold text-xs sm:text-sm px-3 py-1 rounded-xl bg-purple-950/40 border border-purple-500/30">
                        {item.grade}
                      </span>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;