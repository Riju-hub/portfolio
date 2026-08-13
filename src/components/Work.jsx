
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { workData } from "../assets/assets";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaGlobe,
  FaChevronDown,
  FaBriefcase,
  FaRocket,
  FaCheckCircle,
  FaBuilding,
  FaFolderOpen
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

// Helper function to render inline **bold** text cleanly
const renderFormattedText = (text) => {
  if (!text) return null;
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold text-purple-300">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
};

export default function Work() {
  // Store expanded state per project using `companyIdx-projectIdx`
  const [expandedProjects, setExpandedProjects] = useState({ "0-0": true });

  useEffect(() => {
    document.title = "Bhabasindhu | Experience & Projects";
  }, []);

  const toggleProjectExpand = (key) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <section
      id="experience"
      className="relative py-24 md:py-32 bg-[#08080a] text-white overflow-hidden selection:bg-purple-500/30 font-sans"
    >
      {/* Background Ambient Glow Mesh */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[160px] animate-pulse" />
        <div
          className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[160px] animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute -bottom-20 left-1/3 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[160px]" />
      </div>

      <div className="relative container mx-auto px-6 max-w-5xl z-10">
        
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
              Career Journey
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-5 tracking-tight text-white">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-300">Experience</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-normal">
            Engineering scalable full-stack applications, client solutions, and multi-tenant platforms.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Glowing Vertical Line */}
          <div className="absolute left-4 md:left-6 top-6 bottom-6 w-[2px] bg-gradient-to-b from-purple-500 via-pink-500 to-indigo-600/30 hidden md:block" />

          <div className="space-y-12">
            {workData.map((companyData, compIndex) => (
              <motion.div
                key={compIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: compIndex * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="relative md:pl-16 group"
              >
                {/* Timeline Beacon Point */}
                <div className="absolute left-[15px] top-8 w-4 h-4 rounded-full bg-[#08080a] border-2 border-purple-500 z-10 hidden md:block group-hover:border-pink-400 group-hover:scale-125 transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.6)]" />

                {/* Glassmorphic Experience Card */}
                <div className="relative bg-neutral-900/60 rounded-3xl p-6 md:p-8 border border-white/10 backdrop-blur-xl hover:border-purple-500/40 transition-all duration-500 shadow-2xl overflow-hidden">
                  
                  {/* Top Border Glow Line */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
                  <div className="absolute -top-12 -right-12 w-36 h-36 bg-purple-600/10 rounded-full blur-3xl group-hover:bg-purple-600/20 transition-all pointer-events-none" />

                  {/* Company Header */}
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-5 border-b border-neutral-800/80 pb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <FaBuilding className="text-purple-400 text-xs" />
                        <span className="text-neutral-400 text-xs font-mono uppercase tracking-wider">{companyData.company}</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-purple-300 transition-colors duration-300">
                        {companyData.role}
                      </h3>
                      
                      {companyData.workType && (
                        <div className="flex items-center gap-2 mt-2.5">
                          <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 font-mono">
                            <FaGlobe className="text-[10px]" /> {companyData.workType}
                          </span>
                        </div>
                      )}
                    </div>

                    {companyData.duration && (
                      <span className="self-start inline-block px-4 py-1.5 bg-neutral-950/80 text-purple-300 rounded-xl text-xs font-mono border border-neutral-800/80 shadow-inner">
                        {companyData.duration}
                      </span>
                    )}
                  </div>

                  {/* Summary Description */}
                  <p className="text-neutral-300 text-sm md:text-base leading-relaxed mb-8 font-normal">
                    {companyData.description}
                  </p>

                  {/* Nested Projects Showcase */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-widest font-semibold">
                      <FaFolderOpen className="text-purple-400" /> Delivered Projects ({companyData.projects?.length || 0})
                    </div>

                    {companyData.projects?.map((proj, projIndex) => {
                      const projectKey = `${compIndex}-${projIndex}`;
                      const isExpanded = expandedProjects[projectKey];

                      return (
                        <div 
                          key={projIndex} 
                          className="rounded-2xl bg-neutral-950/80 border border-neutral-800/80 p-5 sm:p-6 hover:border-purple-500/40 transition-all duration-300 shadow-xl"
                        >
                          {/* Project Header Bar */}
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                            <div>
                              <h4 className="text-lg font-bold text-white flex items-center gap-2.5">
                                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 shadow-sm" />
                                {proj.title}
                              </h4>
                              {proj.tagline && (
                                <p className="text-xs text-purple-300/80 font-mono mt-1">{proj.tagline}</p>
                              )}
                            </div>

                            {/* Action Buttons */}
                            <div className="flex items-center gap-2 shrink-0">
                              {proj.github && (
                                <a 
                                  href={proj.github} 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-purple-500/50 text-neutral-300 hover:text-white text-xs font-mono transition-all duration-300 shadow-md"
                                  title="Repository"
                                >
                                  <FaGithub size={13} />
                                  <span>Code</span>
                                </a>
                              )}
                              {proj.liveDemo && (
                                <a 
                                  href={proj.liveDemo} 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white text-xs font-mono font-semibold flex items-center gap-1.5 shadow-md shadow-purple-600/20 hover:opacity-95 transition-all duration-300"
                                >
                                  <span>Live Demo</span> <FaExternalLinkAlt size={10} />
                                </a>
                              )}
                            </div>
                          </div>

                          {/* Tech Stack Badges */}
                          {proj.techStack?.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 mb-4">
                              {proj.techStack.map((tech, tIdx) => (
                                <span 
                                  key={tIdx} 
                                  className="px-2.5 py-1 bg-neutral-950/90 border border-neutral-800/90 rounded-lg text-[11px] font-mono text-purple-300/90 tracking-wide hover:border-purple-500/50 hover:bg-purple-500/10 transition-colors"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          )}

                          {/* Highlights Accordion Toggle */}
                          {proj.highlights?.length > 0 && (
                            <div className="border-t border-neutral-800/80 pt-3.5">
                              <button
                                onClick={() => toggleProjectExpand(projectKey)}
                                className="flex items-center justify-between w-full text-left group/btn cursor-pointer"
                              >
                                <span className="flex items-center gap-2 text-xs font-semibold text-neutral-400 group-hover/btn:text-purple-300 transition-colors duration-200">
                                  <FaRocket className="text-purple-400 text-xs" />
                                  Key Contributions & Impact ({proj.highlights.length})
                                </span>
                                <span className="p-1 rounded-lg bg-neutral-900 border border-neutral-800 text-purple-400 group-hover/btn:border-purple-500/40 transition-colors">
                                  <FaChevronDown className={`transform transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} size={11} />
                                </span>
                              </button>

                              <AnimatePresence>
                                {isExpanded && (
                                  <motion.ul
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                    className="space-y-2.5 mt-3.5 overflow-hidden"
                                  >
                                    {proj.highlights.map((point, hIdx) => (
                                      <li key={hIdx} className="flex items-start gap-3 text-xs text-neutral-300 leading-relaxed bg-neutral-900/60 p-3 rounded-xl border border-neutral-800/60">
                                        <FaCheckCircle className="text-purple-400 mt-0.5 shrink-0 text-[12px]" />
                                        <span>{renderFormattedText(point)}</span>
                                      </li>
                                    ))}
                                  </motion.ul>
                                )}
                              </AnimatePresence>
                            </div>
                          )}

                        </div>
                      );
                    })}
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}