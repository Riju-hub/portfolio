import React from 'react';
import { motion } from 'framer-motion';
import { aboutInfo } from '../assets/assets';
import { FaUserGraduate, FaTerminal } from 'react-icons/fa6';
import { HiCheckCircle, HiSparkles } from 'react-icons/hi2';

const quickStats = [
  { label: 'Core Engineering', val: 'MERN & Python', sub: 'Full-Stack & Machine Learning', accent: 'text-cyan-400' },
  { label: 'System Design', val: 'Decoupled REST', sub: 'Multi-Tenant & Event-Driven', accent: 'text-purple-400' },
  { label: 'AI Specialization', val: 'RAG & Predictive', sub: 'Vector Embeddings & LLMs', accent: 'text-pink-400' },
  { label: 'Operational Hub', val: 'Kolkata, IN', sub: 'UTC+5:30 (IST Zone)', accent: 'text-emerald-400' }
];

const technicalStrengths = [
  'Full-stack system architecture, stateless auth & RESTful API design',
  'Multi-tenant database schema isolation & granular RBAC policies',
  'Supervised regression & unsupervised clustering ML pipelines',
  'Vector search, semantic similarity & Retrieval-Augmented Generation (RAG)',
  'Third-party cloud infrastructure: Stripe, Supabase Storage, Cloudinary CDN'
];

// Hardware-Accelerated Parent / Child Motion Sequence
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } 
  }
};

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 sm:py-28 md:py-36 bg-[#08080a] text-zinc-100 overflow-hidden font-sans selection:bg-purple-500/20 selection:text-purple-300"
    >
      {/* Dynamic Ambient Background Glow Mesh */}
      <div 
        className="absolute inset-0 overflow-hidden pointer-events-none -z-10 transform-gpu" 
        aria-hidden="true"
      >
        <div
          className="absolute -top-32 -left-32 w-80 sm:w-[520px] h-80 sm:h-[520px] rounded-full blur-[120px]"
          style={{ background: 'radial-gradient(circle, rgba(147, 51, 234, 0.14) 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-1/2 -right-32 w-80 sm:w-[520px] h-80 sm:h-[520px] rounded-full blur-[120px]"
          style={{ background: 'radial-gradient(circle, rgba(236, 72, 153, 0.12) 0%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-32 left-1/3 w-80 sm:w-[520px] h-80 sm:h-[520px] rounded-full blur-[140px]"
          style={{ background: 'radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 max-w-7xl z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12 sm:mb-16 md:mb-20 px-2"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-purple-500/30 text-purple-300 text-xs font-mono mb-4 tracking-wide shadow-lg shadow-purple-950/20 backdrop-blur-md">
            <HiSparkles className="text-purple-400 text-xs" />
            <span className="font-semibold uppercase tracking-wider">Engineering Blueprint</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black mb-4 tracking-tight text-white">
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">Me</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed font-normal">
            Specializing in resilient web services, multi-tenant cloud platforms, and data-driven artificial intelligence systems.
          </p>
        </motion.div>

        {/* Quick Matrix Bar */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10"
        >
          {quickStats.map((item) => (
            <motion.div
              key={item.label}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="p-4 sm:p-5 rounded-2xl bg-zinc-900/70 hover:bg-zinc-900/95 border border-zinc-800/80 hover:border-purple-500/40 transition-all duration-300 shadow-xl backdrop-blur-md"
            >
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block mb-1.5">
                {item.label}
              </span>
              <span className={`text-sm sm:text-base font-bold block mb-1 ${item.accent}`}>
                {item.val}
              </span>
              <span className="text-[11px] sm:text-xs text-zinc-400 leading-tight block">
                {item.sub}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Profile & Competencies Card (Cols 1-5) */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.15 }}
            className="lg:col-span-5 relative group rounded-3xl p-[1.5px] bg-gradient-to-b from-white/10 via-white/5 to-transparent hover:from-purple-500/40 hover:via-pink-500/30 hover:to-transparent transition-all duration-500 shadow-xl flex flex-col justify-between"
          >
            <div className="relative w-full h-full rounded-[23px] bg-[#0c0c0e]/95 p-6 sm:p-8 backdrop-blur-xl flex flex-col justify-between overflow-hidden">
              
              {/* Radial Top Glow Accent */}
              <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-5 sm:mb-6">
                  <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-purple-300 bg-purple-500/10 px-3 py-1.5 rounded-xl border border-purple-500/20">
                    <FaUserGraduate className="text-purple-400" /> Software Engineer
                  </div>

                  <span className="text-[11px] font-mono text-zinc-500 flex items-center gap-1.5">
                    <FaTerminal className="text-purple-400 text-xs" /> CSE Graduate (2027)
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-4 leading-snug">
                  Transforming architectural complexity into clean, production software.
                </h3>

                <div className="space-y-3.5 text-zinc-300 text-xs sm:text-sm md:text-[15px] leading-relaxed font-normal mb-8">
                  <p>
                    I engineer robust <strong className="text-white font-semibold">Full-Stack Solutions</strong> and production-oriented <strong className="text-white font-semibold">Machine Learning Pipelines</strong> designed for scale, maintainability, and business impact.
                  </p>
                  <p>
                    My hands-on experience spans building multi-tenant SaaS architectures, integrating payment gateways, orchestrating asynchronous vector retrievals with LLMs, and designing responsive SPAs.
                  </p>
                </div>

                {/* Core Engineering Competencies */}
                <div className="border-t border-zinc-800/80 pt-5 sm:pt-6">
                  <h4 className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3.5">
                    Core Technical Strengths
                  </h4>
                  <ul className="space-y-2.5">
                    {technicalStrengths.map((strength) => (
                      <li key={strength} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                        <HiCheckCircle className="text-purple-400 mt-0.5 shrink-0 text-base" />
                        <span className="leading-snug">{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Telemetry Status Marker */}
              <div className="mt-8 pt-4 border-t border-zinc-800/60 flex items-center justify-between text-xs font-mono text-zinc-400">
                <span className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  Available for full-time engineering roles
                </span>
              </div>
            </div>
          </motion.div>

          {/* 2x2 Capabilities Cards (Cols 6-12) */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
          >
            {aboutInfo.map((data, index) => {
              const IconComponent = data.icon;

              return (
                <motion.div
                  key={data.id || index}
                  variants={cardVariants}
                  whileHover={{ y: -5 }}
                  className={`relative group rounded-3xl p-[1.5px] bg-gradient-to-b from-white/10 via-white/5 to-transparent hover:${data.borderGradient || 'from-purple-500/40 via-pink-500/20 to-transparent'} transition-all duration-300 shadow-xl flex flex-col justify-between`}
                >
                  <div className="relative w-full h-full rounded-[23px] bg-[#0c0c0e]/95 p-5 sm:p-6 backdrop-blur-xl flex flex-col justify-between overflow-hidden">
                    
                    {/* Corner Accent Halo on Hover */}
                    <div className={`absolute -top-12 -right-12 w-28 h-28 ${data.glowColor || 'bg-purple-500/10'} rounded-full blur-2xl group-hover:scale-125 transition-all duration-300 pointer-events-none`} />

                    <div>
                      {/* Header Row: Icon + Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-11 h-11 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center group-hover:scale-105 group-hover:border-purple-500/40 transition-all duration-200 shadow-inner">
                          {IconComponent && (
                            <IconComponent className={`${data.accentColor || 'text-purple-400'} text-lg`} />
                          )}
                        </div>
                        
                        {data.badge && (
                          <span className="text-[10px] font-mono font-medium uppercase tracking-wider text-zinc-400 bg-zinc-900 px-2.5 py-1 rounded-full border border-zinc-800">
                            {data.badge}
                          </span>
                        )}
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-white mb-0.5 group-hover:text-purple-300 transition-colors duration-150">
                        {data.title}
                      </h3>

                      {data.subtitle && (
                        <p className={`text-xs font-mono mb-3 ${data.accentColor || 'text-purple-400'}`}>
                          {data.subtitle}
                        </p>
                      )}

                      <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                        {data.description}
                      </p>
                    </div>

                    {/* Footer Index Marker */}
                    <div className="mt-5 pt-3 border-t border-zinc-800/60 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                      <span>Capability Area</span>
                      <span className="group-hover:text-purple-400 transition-colors duration-150">
                        {String(index + 1).padStart(2, '0')} //
                      </span>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>

      </div>
    </section>
  );
}