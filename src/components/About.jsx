import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { aboutInfo } from '../assets/assets';
import { 
  FaUserGraduate, 
  FaTerminal, 
  FaCompass, 
  FaLaptopCode, 
  FaBrain, 
  FaRocket,
  FaCheck,
  FaCopy
} from 'react-icons/fa6';
import { HiSparkles, HiCodeBracket, HiCpuChip } from 'react-icons/hi2';

function About() {
  const [copied, setCopied] = useState(false);

  const handleCopyTagline = () => {
    navigator.clipboard.writeText("Engineering software that bridges clean web architectures with intelligent AI models.");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return ( 
    <section
      id="about"
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
          className="text-center mb-16 md:mb-20"
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
              Professional Profile
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-5 tracking-tight text-white">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-300">Me</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-normal">
            Architecting intelligent systems, full-stack web applications, and data-driven algorithms.
          </p>
        </motion.div>
        
        {/* Asymmetrical Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-6xl mx-auto items-stretch">
          
          {/* Left Hero Bento Card: Bio & Core Philosophy (Col 1-5) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-5 flex flex-col justify-between relative bg-neutral-900/60 border border-white/10 p-7 sm:p-8 rounded-3xl backdrop-blur-xl shadow-2xl hover:border-purple-500/40 transition-all duration-300 group overflow-hidden"
          >
            {/* Top Border Glow Accent Line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
            <div className="absolute -top-16 -right-16 w-36 h-36 bg-purple-600/10 rounded-full blur-3xl group-hover:bg-purple-600/20 transition-all pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-purple-400 bg-purple-500/10 px-3 py-1.5 rounded-xl border border-purple-500/20">
                  <FaUserGraduate className="text-purple-400" /> CS Student & Engineer
                </div>

                <button
                  type="button"
                  onClick={handleCopyTagline}
                  title="Copy Philosophy"
                  className="p-2 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-400 hover:text-white hover:border-purple-500/40 transition-all duration-200 cursor-pointer"
                >
                  {copied ? <FaCheck className="text-emerald-400 text-xs" /> : <FaCopy className="text-xs" />}
                </button>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-5 leading-snug">
                Engineering software that solves real problems.
              </h3>

              <div className="space-y-4 text-neutral-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I am a Computer Science student focused on building production-ready <strong className="text-white font-semibold border-b border-purple-500/30">Full-Stack Applications</strong> and training efficient <strong className="text-white font-semibold border-b border-pink-500/30">Machine Learning Models</strong>.
                </p>
                <p>
                  My work bridges intuitive user interfaces with scalable backend architectures, optimization algorithms, and predictive AI capabilities.
                </p>
              </div>
            </div>

            {/* Terminal Quote Box */}
            <div className="mt-8 p-4.5 rounded-2xl bg-neutral-950/90 border border-neutral-800/80 backdrop-blur-md relative overflow-hidden group/term">
              <div className="flex items-center justify-between text-xs font-mono text-purple-400 mb-2.5">
                <div className="flex items-center gap-2">
                  <HiCodeBracket size={14} className="text-purple-400" />
                  <span className="text-neutral-400">philosophy.js</span>
                </div>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              <p className="text-neutral-300 font-mono text-xs sm:text-sm leading-relaxed italic">
                <span className="text-purple-400 font-bold">&gt;</span> "Turning complex algorithmic concepts into clean, maintainable, and impactful software."
              </p>
            </div>
          </motion.div>

          {/* Right Column: 2x2 Bento Capability Cards (Col 6-12) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {aboutInfo.map((data, index) => {
              const IconComponent = data.icon;

              return (
                <motion.div 
                  key={data.id || index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className={`relative bg-neutral-900/60 p-6 rounded-3xl border border-white/10 backdrop-blur-xl transition-all duration-300 ${data.borderColor || 'hover:border-purple-500/40'} shadow-2xl group overflow-hidden flex flex-col justify-between`}
                >
                  {/* Subtle top glow accent */}
                  <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full blur-3xl transition-all duration-500 pointer-events-none ${data.bgGlow || 'bg-purple-600/10 group-hover:bg-purple-600/20'}`} />

                  <div>
                    {/* Header Row: Icon + Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-center justify-center group-hover:scale-110 group-hover:border-purple-500/30 transition-all duration-300">
                        {IconComponent && <IconComponent className={`${data.color || 'text-purple-400'} text-xl`} />}
                      </div>
                      
                      {data.badge && (
                        <span className="text-[10px] font-mono font-medium uppercase tracking-wider text-neutral-400 bg-neutral-950/90 px-3 py-1 rounded-full border border-neutral-800">
                          {data.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                      {data.title}
                    </h3>

                    {data.subtitle && (
                      <p className="text-xs font-mono text-purple-400/80 mb-3">
                        {data.subtitle}
                      </p>
                    )}

                    <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                      {data.description}
                    </p>
                  </div>

                  {/* Decorative Footer Bar Accent */}
                  <div className="mt-5 pt-3 border-t border-neutral-800/50 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                    <span>Capability</span>
                    <span className="group-hover:text-purple-400 transition-colors">0{index + 1} //</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;