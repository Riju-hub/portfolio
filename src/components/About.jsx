import React from 'react';
import { motion } from 'framer-motion';
import { aboutInfo } from '../assets/assets';
import { FaUserGraduate } from 'react-icons/fa6';
import { HiCheckCircle } from 'react-icons/hi2';

const quickStats = [
  { label: 'Primary Focus', val: 'MERN & Python', sub: 'Full-Stack & Machine Learning' },
  { label: 'Architecture', val: 'Decoupled & REST', sub: 'Modular, high-throughput APIs' },
  { label: 'Data Science', val: 'Predictive Models', sub: 'Optimization & Analysis' },
  { label: 'Location', val: 'Kolkata, IN', sub: 'IST (UTC+5:30)' }
];

const technicalStrengths = [
  'Full-stack system architecture & RESTful API design',
  'Multi-tenant data isolation & secure RBAC flows',
  'Supervised & unsupervised predictive ML pipelines',
  'Vector search & Retrieval-Augmented Generation (RAG)',
  'Cloud integration with Stripe, Supabase & Cloudinary'
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1.0] } 
  }
};

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 bg-[#08080a] text-white overflow-hidden selection:bg-purple-500/30 font-sans"
    >
      {/* Composited Static Glow Layer */}
      <div 
        className="absolute inset-0 overflow-hidden pointer-events-none will-change-transform" 
        aria-hidden="true"
      >
        <div
          className="absolute -top-40 -left-40 w-[450px] h-[450px] rounded-full opacity-40 blur-[80px]"
          style={{ background: 'radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-1/2 -right-40 w-[450px] h-[450px] rounded-full opacity-30 blur-[80px]"
          style={{ background: 'radial-gradient(circle, rgba(236, 72, 153, 0.25) 0%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-20 left-1/3 w-[450px] h-[450px] rounded-full opacity-30 blur-[80px]"
          style={{ background: 'radial-gradient(circle, rgba(79, 70, 229, 0.25) 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative container mx-auto px-6 max-w-7xl z-10">
        
        {/* Section Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="text-center mb-14 md:mb-18"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-neutral-900/90 border border-purple-500/30 text-xs font-mono font-medium tracking-wider uppercase mb-5 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-200">
              Professional Profile
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-5 tracking-tight text-white">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-300">Me</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-normal">
            Developing scalable web platforms, decoupled backend architectures, and production-ready machine learning solutions.
          </p>
        </motion.div>

        {/* Quick Matrix Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {quickStats.map((item) => (
            <div
              key={item.label}
              className="p-4 sm:p-5 rounded-2xl bg-neutral-900/80 border border-white/10 hover:border-purple-500/30 transition-colors duration-200 shadow-lg"
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
            </div>
          ))}
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Profile & Competencies Card (Cols 1-5) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="lg:col-span-5 flex flex-col justify-between relative bg-neutral-900/80 border border-white/10 p-7 sm:p-8 rounded-3xl shadow-2xl hover:border-purple-500/40 transition-colors duration-200 overflow-hidden"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-purple-400 bg-purple-500/10 px-3 py-1.5 rounded-xl border border-purple-500/20">
                  <FaUserGraduate className="text-purple-400" /> Software Engineer
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-snug">
                Building reliable software with scalable architectures.
              </h3>

              <div className="space-y-3.5 text-neutral-300 text-sm sm:text-base leading-relaxed font-normal mb-8">
                <p>
                  I specialize in engineering production-grade <strong className="text-white font-semibold">Full-Stack Platforms</strong> and deploying practical <strong className="text-white font-semibold">Machine Learning Pipelines</strong>.
                </p>
                <p>
                  My work spans the entire application lifecycle — from architecting relational and document databases with role-based security to implementing vector-augmented generative AI systems.
                </p>
              </div>

              {/* Core Engineering Competencies */}
              <div className="border-t border-neutral-800/80 pt-6">
                <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-4">
                  Core Technical Competencies
                </h4>
                <ul className="space-y-2.5">
                  {technicalStrengths.map((strength) => (
                    <li key={strength} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                      <HiCheckCircle className="text-purple-400 mt-0.5 shrink-0 text-base" />
                      <span>{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Status Marker */}
            <div className="mt-8 pt-4 border-t border-neutral-800/60 flex items-center justify-between text-xs font-mono text-neutral-400">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Available for software engineering roles
              </span>
            </div>
          </motion.div>

          {/* 2x2 Capabilities Cards (Cols 6-12) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {aboutInfo.map((data, index) => {
              const IconComponent = data.icon;

              return (
                <div
                  key={data.id || index}
                  className={`relative bg-neutral-900/80 p-6 rounded-3xl border border-white/10 transition-all duration-200 hover:-translate-y-0.5 ${
                    data.borderColor || 'hover:border-purple-500/40'
                  } shadow-xl group flex flex-col justify-between`}
                >
                  <div>
                    {/* Header Row: Icon + Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-center justify-center group-hover:border-purple-500/30 transition-colors duration-150">
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
                      {String(index + 1).padStart(2, '0')} //
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}