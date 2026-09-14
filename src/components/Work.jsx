import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { workData } from "../assets/assets";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaGlobe,
  FaChevronDown,
  FaRocket,
  FaCheckCircle,
  FaBuilding,
  FaFolderOpen,
  FaCalendarAlt,
  FaBriefcase
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
  // Expand first project by default
  const [expandedProjects, setExpandedProjects] = useState({ "0-0": true });

  useEffect(() => {
    document.title = "Bhabasindhu | Experience & Projects";
  }, []);

  const toggleProjectExpand = (key) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <section
      id="experience"
      className="relative py-20 sm:py-28 md:py-36 bg-[#08080a] text-zinc-100 overflow-hidden font-sans selection:bg-purple-500/20 selection:text-purple-300"
    >
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 transform-gpu">
        <div className="absolute -top-32 -left-32 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 -right-32 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-pink-600/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-32 left-1/3 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-indigo-600/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 max-w-5xl z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-purple-500/30 text-purple-300 text-xs font-mono mb-4 tracking-wide shadow-lg shadow-purple-950/20 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-purple-400 to-pink-400" />
            </span>
            <span className="font-semibold uppercase tracking-wider">Career & Engineering</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-4">
            Work <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-300">Experience</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed">
            Engineering scalable full-stack applications, distributed client solutions, and multi-tenant architectures.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Continuous Vertical Timeline Line (Visible on Mobile & Desktop) */}
          <div className="absolute left-3.5 sm:left-6 top-4 bottom-4 w-[2px] bg-gradient-to-b from-purple-500 via-pink-500/80 to-indigo-600/20" />

          <div className="space-y-10 sm:space-y-14">
            {workData.map((companyData, compIndex) => (
              <motion.div
                key={compIndex}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: "easeOut", delay: compIndex * 0.08 }}
                viewport={{ once: true, amount: 0.15 }}
                className="relative pl-9 sm:pl-16 group"
              >
                {/* Timeline Beacon Point */}
                <div className="absolute left-[7px] sm:left-[17px] top-6 sm:top-8 w-3.5 h-3.5 rounded-full bg-[#08080a] border-2 border-purple-500 z-10 group-hover:border-pink-400 group-hover:scale-125 transition-all duration-300 shadow-[0_0_12px_rgba(168,85,247,0.8)]" />

                {/* Main Experience Card */}
                <div className="relative bg-zinc-900/70 hover:bg-zinc-900/90 rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 border border-zinc-800/80 hover:border-purple-500/40 transition-all duration-300 shadow-2xl backdrop-blur-xl overflow-hidden">
                  
                  {/* Subtle Top Border Glow Gradient */}
                  <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

                  {/* Company & Role Header */}
                  <div className="flex flex-col gap-3 mb-5 border-b border-zinc-800/80 pb-5">
                    
                    {/* Top Tagline / Metadata Badges */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-zinc-950/80 border border-zinc-800 text-xs font-mono text-zinc-300">
                        <FaBuilding className="text-purple-400 text-xs" />
                        <span className="font-semibold uppercase tracking-wider">{companyData.company}</span>
                      </div>

                      {companyData.duration && (
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-purple-950/40 border border-purple-500/25 text-purple-300 text-[11px] sm:text-xs font-mono">
                          <FaCalendarAlt size={10} />
                          <span>{companyData.duration}</span>
                        </div>
                      )}
                    </div>

                    {/* Role Title */}
                    <div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white group-hover:text-purple-200 transition-colors">
                        {companyData.role}
                      </h3>

                      {companyData.workType && (
                        <div className="flex items-center gap-2 mt-2">
                          <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 font-mono">
                            <FaGlobe className="text-[10px]" /> {companyData.workType}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Summary / Role Overview */}
                  {companyData.description && (
                    <p className="text-zinc-300/90 text-xs sm:text-sm md:text-base leading-relaxed mb-6 font-normal">
                      {companyData.description}
                    </p>
                  )}

                  {/* Nested Projects Showcase */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono text-purple-400 uppercase tracking-wider font-semibold">
                      <FaFolderOpen /> Delivered Deployments & Systems ({companyData.projects?.length || 0})
                    </div>

                    {companyData.projects?.map((proj, projIndex) => {
                      const projectKey = `${compIndex}-${projIndex}`;
                      const isExpanded = expandedProjects[projectKey];

                      return (
                        <div
                          key={projIndex}
                          className="rounded-xl sm:rounded-2xl bg-zinc-950/80 border border-zinc-800/80 p-4 sm:p-5 hover:border-zinc-700 transition-all duration-200 shadow-inner"
                        >
                          {/* Project Header Bar */}
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3.5">
                            <div>
                              <h4 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 shrink-0" />
                                {proj.title}
                              </h4>
                              {proj.tagline && (
                                <p className="text-[11px] sm:text-xs text-purple-300/75 font-mono mt-0.5 pl-4">
                                  {proj.tagline}
                                </p>
                              )}
                            </div>

                            {/* Mobile-Friendly CTAs */}
                            <div className="flex items-center gap-2 shrink-0 pt-1 sm:pt-0 pl-4 sm:pl-0">
                              {proj.github && (
                                <a
                                  href={proj.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700/80 hover:border-purple-500/50 text-zinc-300 hover:text-white text-xs font-mono active:scale-95 transition-all"
                                  title="Repository"
                                >
                                  <FaGithub size={12} />
                                  <span>Code</span>
                                </a>
                              )}
                              {proj.liveDemo && (
                                <a
                                  href={proj.liveDemo}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white text-xs font-mono font-semibold shadow-sm hover:opacity-90 active:scale-95 transition-all"
                                >
                                  <span>Live Demo</span>
                                  <FaExternalLinkAlt size={9} />
                                </a>
                              )}
                            </div>
                          </div>

                          {/* Tech Stack Badges */}
                          {proj.techStack?.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 mb-3.5 pl-4 sm:pl-0">
                              {proj.techStack.map((tech, tIdx) => (
                                <span
                                  key={tIdx}
                                  className="px-2 py-0.5 bg-zinc-900 border border-zinc-800 rounded-md text-[10px] sm:text-[11px] font-mono text-zinc-300 tracking-wide"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          )}

                          {/* Accordion Toggle Trigger */}
                          {proj.highlights?.length > 0 && (
                            <div className="border-t border-zinc-850 pt-2.5 mt-2">
                              <button
                                onClick={() => toggleProjectExpand(projectKey)}
                                className="flex items-center justify-between w-full text-left py-1 cursor-pointer group/btn"
                                aria-expanded={isExpanded}
                              >
                                <span className="flex items-center gap-2 text-xs font-medium text-zinc-400 group-hover/btn:text-purple-300 transition-colors">
                                  <FaRocket className="text-purple-400 text-xs" />
                                  <span>Key Contributions & Architecture ({proj.highlights.length})</span>
                                </span>
                                <span className="p-1 rounded-md bg-zinc-900 border border-zinc-800 text-purple-300 group-hover/btn:border-purple-500/40 transition-colors">
                                  <FaChevronDown
                                    className={`transform transition-transform duration-200 ${
                                      isExpanded ? "rotate-180" : ""
                                    }`}
                                    size={10}
                                  />
                                </span>
                              </button>

                              {/* Accordion Content with Spring Animation */}
                              <AnimatePresence initial={false}>
                                {isExpanded && (
                                  <motion.ul
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.25, ease: "easeOut" }}
                                    className="space-y-2 mt-3 overflow-hidden"
                                  >
                                    {proj.highlights.map((point, hIdx) => (
                                      <li
                                        key={hIdx}
                                        className="flex items-start gap-2.5 text-xs text-zinc-300/90 leading-relaxed bg-zinc-900/60 p-2.5 sm:p-3 rounded-lg border border-zinc-800/60"
                                      >
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