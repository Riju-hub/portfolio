// import React, { useEffect } from "react";
// import { motion } from "framer-motion";
// import { workData } from "../assets/assets";
// import { FaGithub, FaExternalLinkAlt, FaGlobe } from "react-icons/fa";

// function Work() {
//   useEffect(() => {
//     document.title = "Bhabasindhu | Experience";
//   }, []);

//   return (
//     <section
//       id="experience"
//       className="relative py-20 md:py-28 bg-[#0a0a0c] text-white overflow-hidden"
//     >
//       {/* Background Ambient Glows & Grid (Matching Hero, About, Skills, Projects) */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] animate-pulse" />
//         <div className="absolute top-1/2 -right-40 w-96 h-96 bg-pink-600/15 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '1.5s' }} />
//         <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-indigo-600/15 rounded-full blur-[128px]" />
        
//         {/* Subtle radial overlay & grid */}
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
//       </div>

//       <div className="relative container mx-auto px-6 max-w-7xl z-10">
        
//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, ease: "easeOut" }}
//           viewport={{ once: true, amount: 0.3 }}
//           className="text-center mb-14 md:mb-20"
//         >
//           <span className="inline-block text-xs md:text-sm font-semibold tracking-widest uppercase text-purple-400 mb-3 font-mono">
//             Career Timeline
//           </span>
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 tracking-tight text-white">
//             Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-300">Experience</span>
//           </h2>
//           <p className="text-neutral-400 max-w-2xl mx-auto text-base md:text-lg">
//             My professional journey, technical roles, and key engineering contributions
//           </p>
//         </motion.div>

//         {/* Global Timeline Layout Container */}
//         <div className="max-w-3xl mx-auto relative">
          
//           {/* Continuous Vertical Timeline Line */}
//           <div className="absolute left-4 top-3 bottom-3 w-[2px] bg-gradient-to-b from-purple-500 via-pink-500 to-indigo-600 hidden md:block" />

//           <div className="space-y-10">
//             {workData.map((data, index) => (
//               <motion.div
//                 key={data.id || index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
//                 viewport={{ once: true, amount: 0.2 }}
//                 className="relative md:pl-12 group"
//               >
//                 {/* Timeline Dot */}
//                 <div className="absolute left-[9px] top-6 w-4 h-4 rounded-full bg-[#0a0a0c] border-4 border-purple-500 z-10 hidden md:block group-hover:border-pink-500 group-hover:scale-125 transition-all duration-300 shadow-lg shadow-purple-500/50" />

//                 {/* Experience Detail Box */}
//                 <div className="relative bg-neutral-900/80 rounded-2xl p-6 md:p-8 border border-neutral-800/80 backdrop-blur-md hover:border-purple-500/40 hover:-translate-y-1 transition-all duration-300 shadow-xl overflow-hidden">
                  
//                   {/* Subtle Hover Glow */}
//                   <div className="absolute -top-10 -right-10 w-28 h-28 bg-purple-600/0 group-hover:bg-purple-600/15 rounded-full blur-2xl transition-all duration-500 pointer-events-none" />

//                   {/* Header Row */}
//                   <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-4">
//                     <div>
//                       <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
//                         {data.role}
//                       </h3>
//                       <div className="flex items-center gap-2 mt-1.5 text-sm font-medium text-neutral-400">
//                         <span className="text-neutral-300 font-semibold">{data.company}</span>
//                         {data.workType && (
//                           <>
//                             <span className="text-neutral-600">•</span>
//                             <span className="inline-flex items-center gap-1 text-xs px-2.5 py-0.5 rounded-full bg-emerald-950/40 text-emerald-300 border border-emerald-500/30 backdrop-blur-sm">
//                               <FaGlobe className="text-[10px]" />
//                               {data.workType}
//                             </span>
//                           </>
//                         )}
//                       </div>
//                     </div>

//                     {/* Duration Badge */}
//                     <div className="self-start">
//                       <span className="inline-block px-3.5 py-1 bg-purple-950/40 text-purple-300 rounded-full text-xs font-mono border border-purple-500/20 backdrop-blur-sm">
//                         {data.duration}
//                       </span>
//                     </div>
//                   </div>

//                   {/* Summary Description */}
//                   <p className="text-neutral-300 text-sm md:text-base leading-relaxed mb-4">
//                     {data.description}
//                   </p>

//                   {/* Feature Highlights List */}
//                   {data.highlights && (
//                     <ul className="space-y-2.5 mb-6">
//                       {data.highlights.map((point, idx) => (
//                         <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-neutral-400 leading-relaxed">
//                           <span className="text-purple-400 mt-1 font-bold">▹</span>
//                           <span>{point}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   )}

//                   {/* Action Links (GitHub & Live Demo) */}
//                   {(data.github || data.liveDemo) && (
//                     <div className="flex flex-wrap gap-3 pt-4 border-t border-neutral-800/80">
//                       {data.github && (
//                         <a
//                           href={data.github}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-300 hover:text-white bg-neutral-950 hover:bg-neutral-800 px-3.5 py-2 rounded-xl border border-neutral-800 hover:border-neutral-700 transition duration-300"
//                         >
//                           <FaGithub size={14} />
//                           GitHub Repo
//                         </a>
//                       )}
//                       {data.liveDemo && (
//                         <a
//                           href={data.liveDemo}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 px-3.5 py-2 rounded-xl shadow-lg shadow-purple-600/20 transition duration-300"
//                         >
//                           <FaExternalLinkAlt size={11} />
//                           Live Demo
//                         </a>
//                       )}
//                     </div>
//                   )}

//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Work;

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { workData } from "../assets/assets";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaGlobe,
  FaChevronDown,
  FaBriefcase,
  FaRocket,
  FaCheckCircle,
} from "react-icons/fa";

// Helper function to render inline **bold** text inside your highlight strings cleanly
const renderFormattedText = (text) => {
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

// Automatic tech stack pill extractor from highlights for fast recruiter scanning
const extractTechStack = (highlights = []) => {
  const commonTech = [
    "MERN Stack", "React", "Redux Toolkit", "Node.js", "Express", 
    "MongoDB", "JWT", "Bcrypt.js", "Stripe API", "Nodemailer", 
    "Cloudinary", "Helmet.js", "Vercel", "Render", "RBAC"
  ];
  
  const textBlob = highlights.join(" ");
  return commonTech.filter((tech) => 
    textBlob.toLowerCase().includes(tech.toLowerCase())
  );
};

export default function Work() {
  const [expandedId, setExpandedId] = useState(0); // Default open first item

  useEffect(() => {
    document.title = "Bhabasindhu | Experience & Projects";
  }, []);

  const toggleExpand = (index) => {
    setExpandedId(expandedId === index ? null : index);
  };

  return (
    <section
      id="experience"
      className="relative py-24 md:py-32 bg-[#0a0a0c] text-white overflow-hidden selection:bg-purple-500/30"
    >
      {/* Background Ambient Glows & Grid System */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[140px] animate-pulse" />
        <div
          className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[140px] animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute -bottom-20 left-1/3 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[140px]" />

        {/* Dynamic Grid Overlay */}
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
            Engineering scalable full-stack applications, client solutions, and multi-tenant systems.
          </p>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Neon Gradient Timeline Spine */}
          <div className="absolute left-4 md:left-6 top-6 bottom-6 w-[2px] bg-gradient-to-b from-purple-500 via-pink-500 to-indigo-600/20 hidden md:block" />

          <div className="space-y-10">
            {workData.map((data, index) => {
              const isExpanded = expandedId === index;
              const extractedTech = extractTechStack(data.highlights);

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="relative md:pl-16 group"
                >
                  {/* Timeline Dot Beacon */}
                  <div className="absolute left-[15px] top-8 w-4 h-4 rounded-full bg-[#0a0a0c] border-2 border-purple-500 z-10 hidden md:block group-hover:border-pink-400 group-hover:scale-125 transition-all duration-300 shadow-md shadow-purple-500/50" />

                  {/* Main Card Container */}
                  <div className="relative bg-neutral-900/80 rounded-2xl p-6 md:p-8 border border-neutral-800/80 backdrop-blur-xl hover:border-purple-500/40 transition-all duration-300 shadow-2xl overflow-hidden">
                    
                    {/* Hover Glow Background Effect */}
                    <div className="absolute -top-16 -right-16 w-36 h-36 bg-purple-600/0 group-hover:bg-purple-600/10 rounded-full blur-3xl transition-all duration-500 pointer-events-none" />

                    {/* Header Row */}
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                          {data.role}
                        </h3>
                        
                        <div className="flex flex-wrap items-center gap-2 mt-2 text-sm font-medium text-neutral-400">
                          <span className="text-neutral-200 font-semibold text-base">{data.company}</span>
                          {data.workType && (
                            <>
                              <span className="text-neutral-600">•</span>
                              <span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-0.5 rounded-full bg-emerald-950/40 text-emerald-300 border border-emerald-500/30 backdrop-blur-sm">
                                <FaGlobe className="text-[10px]" />
                                {data.workType}
                              </span>
                            </>
                          )}
                        </div>
                      </div>

                      {/* Duration Tag */}
                      {data.duration && (
                        <div className="self-start">
                          <span className="inline-block px-3.5 py-1 bg-purple-950/50 text-purple-300 rounded-full text-xs font-mono border border-purple-500/30 backdrop-blur-sm shadow-inner">
                            {data.duration}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Short Description */}
                    <p className="text-neutral-300 text-sm md:text-base leading-relaxed mb-5">
                      {data.description}
                    </p>

                    {/* Auto-extracted Tech Badges */}
                    {extractedTech.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {extractedTech.map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs px-2.5 py-1 rounded-lg bg-neutral-950/80 text-neutral-300 border border-neutral-800 font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Highlights Accordion Toggle */}
                    {data.highlights && data.highlights.length > 0 && (
                      <div className="border-t border-neutral-800/80 pt-4">
                        <button
                          onClick={() => toggleExpand(index)}
                          className="flex items-center justify-between w-full text-left py-1 group/btn"
                        >
                          <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-400 group-hover/btn:text-purple-300 transition-colors">
                            <FaRocket className="text-purple-400" />
                            Core Engineering Contributions ({data.highlights.length})
                          </span>
                          <span className="p-1 rounded-lg bg-neutral-800/60 text-purple-400 group-hover/btn:bg-neutral-800 transition">
                            <FaChevronDown
                              className={`transform transition-transform duration-300 ${
                                isExpanded ? "rotate-180" : ""
                              }`}
                              size={12}
                            />
                          </span>
                        </button>

                        <AnimatePresence>
                          {isExpanded && (
                            <motion.ul
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.35, ease: "easeInOut" }}
                              className="space-y-3 mt-4 overflow-hidden"
                            >
                              {data.highlights.map((point, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-3 text-xs md:text-sm text-neutral-300 leading-relaxed bg-neutral-950/40 p-3 rounded-xl border border-neutral-800/50"
                                >
                                  <FaCheckCircle className="text-purple-400 mt-1 flex-shrink-0 text-xs" />
                                  <span>{renderFormattedText(point)}</span>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </div>
                    )}

                    {/* Live & Repository Action Links */}
                    {(data.github || data.liveDemo) && (
                      <div className="flex flex-wrap gap-3 pt-5 mt-5 border-t border-neutral-800/80">
                        {data.github && (
                          <a
                            href={data.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-300 hover:text-white bg-neutral-950 hover:bg-neutral-800 px-4 py-2.5 rounded-xl border border-neutral-800 hover:border-neutral-700 transition duration-300"
                          >
                            <FaGithub size={14} />
                            GitHub Repo
                          </a>
                        )}
                        {data.liveDemo && (
                          <a
                            href={data.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 px-4 py-2.5 rounded-xl shadow-lg shadow-purple-600/20 transition duration-300"
                          >
                            <FaExternalLinkAlt size={11} />
                            Live Demo
                          </a>
                        )}
                      </div>
                    )}
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

