import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { aboutInfo } from '../assets/assets';
import { 
  FaUserGraduate, 
  FaCheck, 
  FaCopy, 
  FaCode, 
  FaBrain, 
  FaChartLine, 
  FaLightbulb 
} from 'react-icons/fa6';
import { HiCodeBracket, HiSparkles, HiCpuChip } from 'react-icons/hi2';

const quickStats = [
  { label: 'Primary Focus', val: 'MERN & Python', sub: 'Full-Stack & Machine Learning' },
  { label: 'Architecture', val: 'Decoupled & REST', sub: 'Modular, high-throughput APIs' },
  { label: 'Data Science', val: 'Predictive Models', sub: 'Optimization & Analysis' },
  { label: 'Location', val: 'Kolkata, IN', sub: 'IST (UTC+5:30)' }
];

function About() {
  const [copied, setCopied] = useState(false);

  const handleCopyTagline = () => {
    navigator.clipboard.writeText(
      "Engineering software that bridges clean web architectures with intelligent AI models."
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="about"
      className="relative py-24 md:py-32 bg-[#08080a] text-white overflow-hidden selection:bg-purple-500/30 font-sans"
    >
      {/* GPU-Accelerated Static Radial Glow Mesh (Zero paint/repaint overhead) */}
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
          className="text-center mb-14 md:mb-18"
        >
          {/* Static Clean Radar Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-neutral-900/90 border border-purple-500/30 text-xs font-mono font-medium tracking-wider uppercase mb-5 shadow-lg">
            <div className="relative flex items-center justify-center w-2.5 h-2.5">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 shadow-sm" />
            </div>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-200">
              Professional Profile
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-5 tracking-tight text-white">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-300">Me</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-normal">
            Architecting intelligent systems, production-grade web platforms, and data-driven algorithms.
          </p>
        </motion.div>

        {/* Quick Matrix Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {quickStats.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut', delay: idx * 0.04 }}
              viewport={{ once: true, amount: 0.2 }}
              className="p-4 sm:p-5 rounded-2xl bg-neutral-900/80 border border-white/10 hover:border-purple-500/30 transition-colors duration-150 transform-gpu shadow-lg"
            >
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block mb-1">
                {item.label}
              </span>
              <span className="text-sm sm:text-base font-bold text-white block mb-0.5">
                {item.val}
              </span>
              <span className="text-[11px] text-neutral-400 leading-tight">
                {item.sub}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Modern Bento Matrix Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Narrative Profile Card (Col 1-5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-between relative bg-neutral-900/80 border border-white/10 p-7 sm:p-8 rounded-3xl shadow-2xl hover:border-purple-500/40 transition-all duration-200 group overflow-hidden transform-gpu"
          >
            {/* Top Accent Line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-purple-400 bg-purple-500/10 px-3 py-1.5 rounded-xl border border-purple-500/20">
                  <FaUserGraduate className="text-purple-400" /> CS Student &amp; Engineer
                </div>

                <button
                  type="button"
                  onClick={handleCopyTagline}
                  title="Copy Philosophy"
                  className="p-2 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-400 hover:text-white hover:border-purple-500/40 transition-all duration-150 cursor-pointer"
                >
                  {copied ? <FaCheck className="text-emerald-400 text-xs" /> : <FaCopy className="text-xs" />}
                </button>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-5 leading-snug">
                Engineering software that solves real problems.
              </h3>

              <div className="space-y-4 text-neutral-300 text-sm sm:text-base leading-relaxed font-normal">
                <p>
                  I build production-ready <strong className="text-white font-semibold border-b border-purple-500/30">Full-Stack Applications</strong> and train practical <strong className="text-white font-semibold border-b border-pink-500/30">Machine Learning Models</strong>.
                </p>
                <p>
                  My development focus unites responsive frontend architectures with high-throughput backend services, exploratory data pipelines, and optimization algorithms.
                </p>
              </div>
            </div>

            {/* Embedded Mini Terminal */}
            <div className="mt-8 p-4 rounded-2xl bg-neutral-950/90 border border-neutral-800/80 relative overflow-hidden">
              <div className="flex items-center justify-between text-xs font-mono text-purple-400 mb-2">
                <div className="flex items-center gap-2">
                  <HiCodeBracket size={14} className="text-purple-400" />
                  <span className="text-neutral-400">philosophy.ts</span>
                </div>
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>

              <p className="text-neutral-300 font-mono text-xs leading-relaxed italic">
                <span className="text-purple-400 font-bold">&gt;</span> "Turning complex algorithmic concepts into clean, maintainable, and impactful software."
              </p>
            </div>
          </motion.div>

          {/* Dynamic 2x2 Capabilities Cards using aboutInfo (Col 6-12) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {aboutInfo.map((data, index) => {
              const IconComponent = data.icon;

              return (
                <motion.div
                  key={data.id || index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: 'easeOut', delay: index * 0.04 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -2 }}
                  className={`relative bg-neutral-900/80 p-6 rounded-3xl border border-white/10 transition-all duration-150 ${data.borderColor || 'hover:border-purple-500/40'} shadow-xl group overflow-hidden flex flex-col justify-between transform-gpu`}
                >
                  <div>
                    {/* Header Row: Icon + Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-center justify-center group-hover:scale-105 group-hover:border-purple-500/30 transition-transform duration-150">
                        {IconComponent && (
                          <IconComponent className={`${data.color || 'text-purple-400'} text-lg`} />
                        )}
                      </div>
                      
                      {data.badge && (
                        <span className="text-[10px] font-mono font-medium uppercase tracking-wider text-neutral-400 bg-neutral-950/90 px-2.5 py-1 rounded-full border border-neutral-800">
                          {data.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-white mb-0.5 group-hover:text-purple-300 transition-colors duration-150">
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

                  {/* Footer Marker */}
                  <div className="mt-5 pt-3 border-t border-neutral-800/60 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                    <span>Capability</span>
                    <span className="group-hover:text-purple-400 transition-colors duration-150">
                      0{index + 1} //
                    </span>
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