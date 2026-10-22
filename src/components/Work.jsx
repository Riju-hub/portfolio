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
  FaCertificate,
  FaFileContract,
  FaTimes,
  FaSearchPlus
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
  const [expandedProjects, setExpandedProjects] = useState({ "0-0": true });
  const [selectedDoc, setSelectedDoc] = useState(null);

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
      className="relative py-16 sm:py-24 md:py-32 bg-[#08080a] text-zinc-100 overflow-hidden font-sans selection:bg-purple-500/20 selection:text-purple-300"
    >
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 transform-gpu">
        <div className="absolute -top-32 -left-32 w-72 sm:w-[480px] h-72 sm:h-[480px] bg-purple-600/10 rounded-full blur-[100px] sm:blur-[120px]" />
        <div className="absolute top-1/2 -right-32 w-72 sm:w-[480px] h-72 sm:h-[480px] bg-pink-600/10 rounded-full blur-[100px] sm:blur-[120px]" />
        <div className="absolute -bottom-32 left-1/3 w-72 sm:w-[480px] h-72 sm:h-[480px] bg-indigo-600/10 rounded-full blur-[120px] sm:blur-[140px]" />
      </div>

      <div className="relative container mx-auto px-3.5 sm:px-6 max-w-5xl z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-10 sm:mb-16 md:mb-20 px-2"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/90 border border-purple-500/30 text-purple-300 text-[11px] sm:text-xs font-mono mb-3.5 tracking-wide shadow-lg shadow-purple-950/20 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-purple-400 to-pink-400" />
            </span>
            <span className="font-semibold uppercase tracking-wider">Career & Engineering</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-3">
            Work <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-300">Experience</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed">
            Engineering scalable full-stack applications, distributed client solutions, and multi-tenant architectures.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Continuous Vertical Timeline Line */}
          <div className="absolute left-2.5 sm:left-6 top-3 bottom-3 w-[2px] bg-gradient-to-b from-purple-500 via-pink-500/80 to-indigo-600/20" />

          <div className="space-y-8 sm:space-y-12">
            {workData.map((companyData, compIndex) => (
              <motion.div
                key={compIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: "easeOut", delay: compIndex * 0.08 }}
                viewport={{ once: true, amount: 0.1 }}
                className="relative pl-6 sm:pl-16 group"
              >
                {/* Timeline Beacon Point */}
                <div className="absolute left-[3px] sm:left-[17px] top-5 sm:top-7 w-3.5 h-3.5 rounded-full bg-[#08080a] border-2 border-purple-500 z-10 group-hover:border-pink-400 group-hover:scale-125 transition-all duration-300 shadow-[0_0_12px_rgba(168,85,247,0.8)]" />

                {/* Main Experience Card */}
                <div className="relative bg-zinc-900/80 hover:bg-zinc-900/95 rounded-xl sm:rounded-3xl p-4 sm:p-7 md:p-8 border border-zinc-800/80 hover:border-purple-500/40 transition-all duration-300 shadow-xl backdrop-blur-xl overflow-hidden">
                  
                  {/* Top Border Glow Gradient */}
                  <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

                  {/* Company & Role Header */}
                  <div className="flex flex-col gap-3 mb-5 border-b border-zinc-800/80 pb-4 sm:pb-5">
                    
                    {/* Top Badges / Metadata */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="inline-flex items-center gap-1.5 px-2 sm:px-2.5 py-1 rounded-md sm:rounded-lg bg-zinc-950/80 border border-zinc-800 text-[11px] sm:text-xs font-mono text-zinc-300">
                        <FaBuilding className="text-purple-400 text-[10px] sm:text-xs" />
                        <span className="font-semibold uppercase tracking-wider">{companyData.company}</span>
                      </div>

                      {companyData.duration && (
                        <div className="inline-flex items-center gap-1 px-2 sm:px-2.5 py-1 rounded-md sm:rounded-lg bg-blue-950/40 border border-blue-500/25 text-300 text-[10px] sm:text-xs font-mono">
                          <FaCalendarAlt size={9} className="text-blue-400"/>
                          <span>{companyData.duration}</span>
                        </div>
                      )}
                    </div>

                    {/* Role Title & Work Type */}
                    <div>
                      <h3 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-white group-hover:text-purple-200 transition-colors leading-snug">
                        {companyData.role}
                      </h3>

                      {companyData.workType && (
                        <div className="flex items-center gap-2 mt-1.5">
                          <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 font-mono">
                            <FaGlobe className="text-[9px]" /> {companyData.workType}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content Layout: Responsive Split with Embedded Document Image */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-5 items-start">
                    
                    {/* Left: Role Description */}
                    <div className={companyData.certificate?.image ? "lg:col-span-8" : "lg:col-span-12"}>
                      {companyData.description && (
                        <p className="text-zinc-300/90 text-xs sm:text-sm md:text-base leading-relaxed font-normal">
                          {companyData.description}
                        </p>
                      )}
                    </div>

                    {/* Right: Embedded Credential Preview Thumbnail */}
                    {companyData.certificate?.image && (
                      <div className="lg:col-span-4 w-full">
                        <div 
                          onClick={() => setSelectedDoc(companyData.certificate)}
                          className="relative group/doc rounded-xl overflow-hidden border border-zinc-800 hover:border-purple-500/50 cursor-pointer bg-zinc-950 p-2 shadow-lg transition-all duration-300 hover:shadow-purple-900/20"
                        >
                          {/* Mini Header Tag */}
                          <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 mb-1.5 px-0.5">
                            <span className="flex items-center gap-1 text-emerald-400 font-semibold truncate max-w-[120px]">
                              {companyData.certificate.type === "offer_letter" ? (
                                <FaFileContract size={9} />
                              ) : (
                                <FaCertificate size={9} />
                              )}
                              <span>{companyData.certificate.title}</span>
                            </span>
                            <span className="text-zinc-500 text-[9px] uppercase tracking-wider">Verified</span>
                          </div>

                          {/* Image Canvas */}
                          <div className="relative w-full aspect-[16/11] rounded-lg overflow-hidden bg-black/60">
                            <img 
                              src={companyData.certificate.image} 
                              alt={companyData.certificate.title}
                              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/doc:scale-105 opacity-90 group-hover/doc:opacity-100"
                            />
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/doc:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-1 text-white">
                              <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                                <FaSearchPlus size={11} className="text-purple-300" />
                              </div>
                              <span className="text-[10px] font-mono text-zinc-200">Inspect Doc</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                  </div>

                  {/* Nested Projects Showcase */}
                  <div className="space-y-3.5">
                    <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono text-purple-400 uppercase tracking-wider font-semibold">
                      <FaFolderOpen /> Delivered Deployments & Systems ({companyData.projects?.length || 0})
                    </div>

                    {companyData.projects?.map((proj, projIndex) => {
                      const projectKey = `${compIndex}-${projIndex}`;
                      const isExpanded = expandedProjects[projectKey];

                      return (
                        <div
                          key={projIndex}
                          className="rounded-lg sm:rounded-2xl bg-zinc-950/80 border border-zinc-800/80 p-3 sm:p-5 hover:border-zinc-700 transition-all duration-200"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-3">
                            <div className="min-w-0">
                              <h4 className="text-sm sm:text-lg font-bold text-white flex items-center gap-2">
                                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 shrink-0" />
                                <span className="truncate">{proj.title}</span>
                              </h4>
                              {proj.tagline && (
                                <p className="text-[10px] sm:text-xs text-purple-300/80 font-mono mt-0.5 pl-3.5 sm:pl-4 line-clamp-1">
                                  {proj.tagline}
                                </p>
                              )}
                            </div>

                            <div className="flex items-center gap-2 shrink-0 pt-1 sm:pt-0">
                              {proj.github && (
                                <a
                                  href={proj.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700/80 hover:border-purple-500/50 text-zinc-300 hover:text-white text-[11px] sm:text-xs font-mono active:scale-95 transition-all min-h-[34px] sm:min-h-0"
                                  title="Repository"
                                >
                                  <FaGithub size={11} />
                                  <span>Code</span>
                                </a>
                              )}
                              {proj.liveDemo && (
                                <a
                                  href={proj.liveDemo}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white text-[11px] sm:text-xs font-mono font-semibold shadow-sm hover:opacity-90 active:scale-95 transition-all min-h-[34px] sm:min-h-0"
                                >
                                  <span>Live Demo</span>
                                  <FaExternalLinkAlt size={8} />
                                </a>
                              )}
                            </div>
                          </div>

                          {proj.techStack?.length > 0 && (
                            <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-3">
                              {proj.techStack.map((tech, tIdx) => (
                                <span
                                  key={tIdx}
                                  className="px-1.5 sm:px-2 py-0.5 bg-zinc-900 border border-zinc-800 rounded text-[9px] sm:text-[11px] font-mono text-zinc-300"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          )}

                          {proj.highlights?.length > 0 && (
                            <div className="border-t border-zinc-850 pt-2 mt-2">
                              <button
                                onClick={() => toggleProjectExpand(projectKey)}
                                className="flex items-center justify-between w-full text-left py-1 cursor-pointer group/btn select-none"
                                aria-expanded={isExpanded}
                              >
                                <span className="flex items-center gap-1.5 text-[11px] sm:text-xs font-medium text-zinc-400 group-hover/btn:text-purple-300 transition-colors">
                                  <FaRocket className="text-purple-400 text-[10px] sm:text-xs shrink-0" />
                                  <span>Key Contributions & Architecture ({proj.highlights.length})</span>
                                </span>
                                <span className="p-1 rounded bg-zinc-900 border border-zinc-800 text-purple-300 group-hover/btn:border-purple-500/40 transition-colors shrink-0">
                                  <FaChevronDown
                                    className={`transform transition-transform duration-200 ${
                                      isExpanded ? "rotate-180" : ""
                                    }`}
                                    size={9}
                                  />
                                </span>
                              </button>

                              <AnimatePresence initial={false}>
                                {isExpanded && (
                                  <motion.ul
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.25, ease: "easeOut" }}
                                    className="space-y-1.5 sm:space-y-2 mt-2.5 overflow-hidden"
                                  >
                                    {proj.highlights.map((point, hIdx) => (
                                      <li
                                        key={hIdx}
                                        className="flex items-start gap-2 text-[11px] sm:text-xs text-zinc-300/90 leading-relaxed bg-zinc-900/60 p-2 sm:p-3 rounded-md sm:rounded-lg border border-zinc-800/60"
                                      >
                                        <FaCheckCircle className="text-purple-400 mt-0.5 shrink-0 text-[10px] sm:text-[11px]" />
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

      {/* Verified Document Preview Lightbox Modal */}
      <AnimatePresence>
        {selectedDoc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedDoc(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/90 backdrop-blur-md cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 15 }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full max-h-[92vh] rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-[#09090b] cursor-default p-3 sm:p-5 flex flex-col"
            >
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="text-purple-400 text-sm">
                    {selectedDoc.type === "offer_letter" ? <FaFileContract /> : <FaCertificate />}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
                    {selectedDoc.title}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={selectedDoc.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-neutral-900 border border-white/10 text-neutral-300 hover:text-white text-[11px] font-mono transition-colors"
                  >
                    <span>Full Tab</span>
                    <FaExternalLinkAlt size={8} />
                  </a>

                  <button
                    onClick={() => setSelectedDoc(null)}
                    aria-label="Close document preview"
                    className="w-8 h-8 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white flex items-center justify-center border border-white/10 transition-colors cursor-pointer"
                  >
                    <FaTimes size={12} />
                  </button>
                </div>
              </div>

              {/* Document Image Viewport */}
              <div className="w-full flex-1 flex items-center justify-center rounded-2xl overflow-hidden bg-black/60 p-1">
                <img
                  src={selectedDoc.image}
                  alt={selectedDoc.title}
                  className="w-full h-auto max-h-[75vh] object-contain rounded-xl"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}