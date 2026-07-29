import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { workData } from "../assets/assets";
import { FaGithub, FaExternalLinkAlt, FaGlobe } from "react-icons/fa";

function Work() {
  useEffect(() => {
    document.title = "Bhabasindhu | Experience";
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="experience"
      className="py-20 bg-neutral-900 text-white"
    >
      <div className="container mx-auto px-6 mt-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 tracking-tight">
          Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Experience</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          My professional journey so far
        </p>

        {/* Global Timeline Layout Container */}
        <div className="max-w-3xl mx-auto relative">
          
          {/* Continuous Vertical Timeline Line */}
          <div className="absolute left-4 top-2 bottom-2 w-[2px] bg-gradient-to-b from-purple-500 via-pink-500 to-purple-800 hidden md:block"></div>

          <div className="space-y-10">
            {workData.map((data, index) => (
              <div
                key={data.id || index}
                className="relative md:pl-12 group"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[9px] top-6 w-4 h-4 rounded-full bg-neutral-900 border-4 border-purple-500 z-10 hidden md:block group-hover:border-pink-500 transition-colors duration-300"></div>

                {/* Experience Detail Box */}
                <div className="bg-neutral-800/40 border border-neutral-800/80 rounded-2xl p-6 backdrop-blur-sm transform hover:-translate-y-1 hover:border-purple-500/30 transition-all duration-300 shadow-xl">
                  
                  {/* Header Row */}
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-purple-400 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                        {data.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1 text-sm font-medium text-gray-400">
                        <span>{data.company}</span>
                        {data.workType && (
                          <>
                            <span className="text-neutral-600">•</span>
                            <span className="inline-flex items-center gap-1 text-xs px-2.5 py-0.5 rounded-full bg-neutral-700/60 text-emerald-400 border border-emerald-500/20">
                              <FaGlobe className="text-[10px]" />
                              {data.workType}
                            </span>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Duration Badge */}
                    <div className="self-start">
                      <span className="inline-block px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-xs font-medium border border-purple-500/20">
                        {data.duration}
                      </span>
                    </div>
                  </div>

                  {/* Summary Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">
                    {data.description}
                  </p>

                  {/* Feature Highlights List */}
                  {data.highlights && (
                    <ul className="space-y-2 mb-5">
                      {data.highlights.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-gray-400 leading-relaxed">
                          <span className="text-purple-400 mt-1">▹</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Action Links (GitHub & Live Demo) */}
                  {(data.github || data.liveDemo) && (
                    <div className="flex flex-wrap gap-3 pt-3 border-t border-neutral-800/80">
                      {data.github && (
                        <a
                          href={data.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-semibold text-gray-300 hover:text-white bg-neutral-800 hover:bg-neutral-700 px-3 py-1.5 rounded-lg border border-neutral-700 transition duration-300"
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
                          className="inline-flex items-center gap-2 text-xs font-semibold text-purple-300 hover:text-white bg-purple-500/10 hover:bg-purple-500/20 px-3 py-1.5 rounded-lg border border-purple-500/30 transition duration-300"
                        >
                          <FaExternalLinkAlt size={12} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  )}

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Work;