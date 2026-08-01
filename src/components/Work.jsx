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
      className="relative py-24 md:py-32 bg-[#0a0a0c] text-white overflow-hidden selection:bg-purple-500/30 font-sans"
    >
      {/* Background Ambient Glows & Grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[140px] animate-pulse" />
        <div
          className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[140px] animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute -bottom-20 left-1/3 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative container mx-auto px-6 max-w-5xl z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-semibold tracking-widest uppercase text-purple-300 font-mono mb-4 backdrop-blur-md">
            <FaBriefcase className="text-purple-400" /> Career Journey
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black mb-4 tracking-tight text-white">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-300">Experience</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-base md:text-lg">
            Engineering scalable full-stack applications, client solutions, and multi-tenant platforms.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          <div className="absolute left-4 md:left-6 top-6 bottom-6 w-[2px] bg-gradient-to-b from-purple-500 via-pink-500 to-indigo-600/20 hidden md:block" />

          <div className="space-y-12">
            {workData.map((companyData, compIndex) => (
              <motion.div
                key={compIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: compIndex * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="relative md:pl-16 group"
              >
                {/* Timeline Beacon */}
                <div className="absolute left-[15px] top-8 w-4 h-4 rounded-full bg-[#0a0a0c] border-2 border-purple-500 z-10 hidden md:block group-hover:border-pink-400 group-hover:scale-125 transition-all duration-300 shadow-md shadow-purple-500/50" />

                {/* Company Experience Card */}
                <div className="relative bg-neutral-900/80 rounded-3xl p-6 md:p-8 border border-neutral-800/80 backdrop-blur-xl hover:border-purple-500/40 transition-all duration-300 shadow-2xl overflow-hidden">
                  
                  {/* Company Header */}
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4 border-b border-neutral-800/80 pb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <FaBuilding className="text-purple-400 text-sm" />
                        <span className="text-neutral-400 text-xs font-mono uppercase tracking-wider">{companyData.company}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                        {companyData.role}
                      </h3>
                      
                      {companyData.workType && (
                        <div className="flex items-center gap-2 mt-2">
                          <span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-0.5 rounded-full bg-emerald-950/40 text-emerald-300 border border-emerald-500/30 font-mono">
                            <FaGlobe className="text-[10px]" /> {companyData.workType}
                          </span>
                        </div>
                      )}
                    </div>

                    {companyData.duration && (
                      <span className="self-start inline-block px-3.5 py-1 bg-purple-950/50 text-purple-300 rounded-full text-xs font-mono border border-purple-500/30">
                        {companyData.duration}
                      </span>
                    )}
                  </div>

                  {/* Summary Description */}
                  <p className="text-neutral-300 text-sm md:text-base leading-relaxed mb-6">
                    {companyData.description}
                  </p>

                  {/* Nested Projects Showcase */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-widest font-semibold">
                      <FaFolderOpen /> Delivered Projects ({companyData.projects?.length || 0})
                    </div>

                    {companyData.projects?.map((proj, projIndex) => {
                      const projectKey = `${compIndex}-${projIndex}`;
                      const isExpanded = expandedProjects[projectKey];

                      return (
                        <div 
                          key={projIndex} 
                          className="rounded-2xl bg-neutral-950/70 border border-neutral-800/80 p-5 hover:border-purple-500/30 transition-all duration-300"
                        >
                          {/* Project Header Bar */}
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                            <div>
                              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-purple-400" />
                                {proj.title}
                              </h4>
                              {proj.tagline && (
                                <p className="text-xs text-purple-300/80 font-mono mt-0.5">{proj.tagline}</p>
                              )}
                            </div>

                            {/* CTAs */}
                            <div className="flex items-center gap-2 shrink-0">
                            
                              {proj.github && (
                                <a 
                                  href={proj.github} 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-purple-500/50 text-neutral-300 hover:text-white text-xs font-mono transition whitespace-nowrap"
                                  title="Repository"
                                >
                                  <FaGithub size={14} />
                                  <span>GitHub</span>
                                </a>
                              )}
                              {proj.liveDemo && (
                                <a 
                                  href={proj.liveDemo} 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xs font-mono font-semibold flex items-center gap-1.5 shadow-md shadow-purple-600/20 hover:opacity-95 transition"
                                >
                                  <span>Live Demo</span> <FaExternalLinkAlt size={10} />
                                </a>
                              )}
                              {/* <Link 
                                to={`/project/${proj.id}`}
                                className="px-3 py-1.5 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-purple-500/50 text-purple-300 text-xs font-mono transition"
                              >
                                View Details
                              </Link> */}
                            </div>
                          </div>

                          {/* Tech Stack Pills */}
                          {proj.techStack?.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 mb-4">
                              {proj.techStack.map((tech, tIdx) => (
                                <span 
                                  key={tIdx} 
                                  className="text-[11px] px-2.5 py-0.5 rounded-md bg-neutral-900 text-neutral-300 border border-neutral-800/80 font-mono"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          )}

                          {/* Highlights Accordion Toggle */}
                          {proj.highlights?.length > 0 && (
                            <div className="border-t border-neutral-800/60 pt-3">
                              <button
                                onClick={() => toggleProjectExpand(projectKey)}
                                className="flex items-center justify-between w-full text-left group/btn"
                              >
                                <span className="flex items-center gap-2 text-xs font-semibold text-neutral-400 group-hover/btn:text-purple-300 transition">
                                  <FaRocket className="text-purple-400" />
                                  Key Contributions ({proj.highlights.length})
                                </span>
                                <span className="p-1 rounded-lg bg-neutral-900 text-purple-400">
                                  <FaChevronDown className={`transform transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} size={11} />
                                </span>
                              </button>

                              <AnimatePresence>
                                {isExpanded && (
                                  <motion.ul
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.35, ease: "easeInOut" }}
                                    className="space-y-2.5 mt-3 overflow-hidden"
                                  >
                                    {proj.highlights.map((point, hIdx) => (
                                      <li key={hIdx} className="flex items-start gap-2.5 text-xs text-neutral-300 leading-relaxed bg-neutral-900/50 p-2.5 rounded-xl border border-neutral-800/50">
                                        <FaCheckCircle className="text-purple-400 mt-0.5 shrink-0 text-[11px]" />
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