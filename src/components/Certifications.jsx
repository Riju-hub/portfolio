import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaCertificate, 
  FaExternalLinkAlt, 
  FaCalendarAlt, 
  FaAward,
  FaTimes,
  FaSearchPlus,
  FaCheckCircle
} from 'react-icons/fa';
// 1. Import from assets.js
import { certificationData } from '../assets/assets';

export default function Certifications() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section
      id="certifications"
      className="relative py-20 sm:py-28 md:py-36 bg-[#08080a] text-zinc-100 overflow-hidden font-sans selection:bg-purple-500/20 selection:text-purple-300"
    >
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 transform-gpu">
        <div 
          className="absolute -top-32 right-1/4 w-80 sm:w-[500px] h-80 sm:h-[500px] rounded-full blur-[120px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(147, 51, 234, 0.14) 0%, rgba(0, 0, 0, 0) 70%)' }}
        />
        <div 
          className="absolute top-1/2 -left-32 w-80 sm:w-[500px] h-80 sm:h-[500px] rounded-full blur-[120px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(236, 72, 153, 0.12) 0%, rgba(0, 0, 0, 0) 70%)' }}
        />
        <div 
          className="absolute -bottom-32 left-1/3 w-80 sm:w-[500px] h-80 sm:h-[500px] rounded-full blur-[140px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, rgba(0, 0, 0, 0) 70%)' }}
        />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 max-w-6xl z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12 sm:mb-16 md:mb-20 px-2"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900/90 border border-purple-500/30 text-purple-300 text-xs font-mono mb-4 tracking-wide shadow-lg shadow-purple-950/20 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-purple-400 to-pink-400" />
            </span>
            <span className="font-semibold uppercase tracking-wider">Verified Credentials</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-4">
            Licenses &{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Certifications
            </span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed">
            Formally accredited specializations, advanced engineering trainings, and hands-on professional certifications.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {certificationData.map((cert, index) => (
            <motion.div
              key={cert.id || cert.credentialId || index}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.15 }}
              whileHover={{ y: -5 }}
              className="relative group rounded-3xl p-[1.5px] bg-gradient-to-b from-white/10 via-white/5 to-transparent hover:from-cyan-400/50 hover:via-purple-500/50 hover:to-pink-500/50 transition-all duration-500 shadow-xl hover:shadow-[0_0_35px_-8px_rgba(168,85,247,0.3)] flex flex-col justify-between"
            >
              <div className="relative w-full h-full rounded-[23px] bg-[#0c0c0e]/95 p-5 sm:p-6 backdrop-blur-xl flex flex-col justify-between overflow-hidden">
                <div className={`absolute top-0 inset-x-0 h-40 bg-gradient-to-b ${cert.gradient} opacity-50 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none`} />

                <div>
                  <div className="flex items-center justify-between gap-2 mb-4 relative z-10">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:border-purple-400/50 transition-all duration-300 shadow-inner">
                        <FaCertificate size={15} />
                      </div>
                      <span className="text-[11px] font-mono text-emerald-400 inline-flex items-center gap-1 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md">
                        <FaCheckCircle size={9} /> Verified
                      </span>
                    </div>

                    {cert.issueDate && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-neutral-900/90 border border-white/5 text-[11px] font-mono text-400">
                        <FaCalendarAlt size={10} className="text-blue-400" />
                        {cert.issueDate}
                      </span>
                    )}
                  </div>

                  <div 
                    onClick={() => setSelectedImage(cert.image)}
                    className="relative group/thumb mb-4 rounded-xl overflow-hidden border border-white/10 hover:border-purple-500/50 cursor-pointer aspect-[16/10] bg-black/50 transition-all duration-300 shadow-lg"
                  >
                    <img 
                      src={cert.image} 
                      alt={cert.title} 
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/thumb:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-1 text-white">
                      <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-md">
                        <FaSearchPlus size={14} className="text-cyan-300" />
                      </div>
                      <span className="text-xs font-mono text-neutral-200 mt-1">Tap to Inspect</span>
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-200 transition-colors leading-snug mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 font-medium mb-4">
                    {cert.issuer}
                  </p>

                  {cert.skills?.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {cert.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 bg-neutral-900/90 border border-white/5 group-hover:border-purple-500/20 rounded-lg text-[10px] sm:text-[11px] font-mono text-purple-300 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs mt-auto">
                  {cert.credentialId && (
                    <span className="text-[10px] sm:text-[11px] font-mono text-zinc-500 truncate max-w-[130px] sm:max-w-[150px]">
                      ID: <span className="text-zinc-400">{cert.credentialId}</span>
                    </span>
                  )}
                  
                  <a
                    href={cert.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-cyan-400 hover:text-pink-300 transition-colors ml-auto cursor-pointer"
                  >
                    <span>Full Preview</span>
                    <FaExternalLinkAlt size={9} />
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Preview Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md cursor-pointer"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 15 }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
              onClick={(e) => e.stopPropagation()} 
              className="relative max-w-4xl w-full max-h-[90vh] rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-[#09090b] cursor-default p-2 sm:p-4"
            >
              <button
                onClick={() => setSelectedImage(null)}
                aria-label="Close Preview"
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/70 hover:bg-black text-neutral-300 hover:text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer"
              >
                <FaTimes size={13} />
              </button>
              
              <div className="w-full h-full flex items-center justify-center rounded-2xl overflow-hidden bg-black/60">
                <img 
                  src={selectedImage} 
                  alt="Certificate full inspection" 
                  className="w-full h-auto max-h-[80vh] object-contain mx-auto"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}