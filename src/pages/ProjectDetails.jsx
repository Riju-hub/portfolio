
import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ProjectDetails as projectsData } from '../assets/assets';
import { 
  FaArrowLeft, 
  FaExternalLinkAlt, 
  FaGithub, 
  FaCheckCircle, 
  FaLayerGroup, 
  FaCogs, 
  FaCodeBranch, 
  FaRegLightbulb 
} from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi2';

function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find project by matching ID directly OR by checking generated slugs
  const project = projectsData?.find((p) => {
    if (!id) return false;
    
    const paramId = id.toLowerCase().trim();
    const exactId = p.id?.toLowerCase().trim();
    
    if (exactId && exactId === paramId) return true;

    const titleSlug = p.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    if (titleSlug === paramId) return true;

    if (exactId && paramId.startsWith(exactId)) return true;

    return false;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 bg-[#08080a] relative overflow-hidden text-white font-sans">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[160px]" />
          <div className="absolute -bottom-20 right-1/3 w-[500px] h-[500px] bg-pink-600/15 rounded-full blur-[160px]" />
        </div>

        <div className="relative z-10 bg-neutral-900/80 p-10 rounded-3xl border border-white/10 backdrop-blur-xl max-w-md shadow-2xl">
          <h2 className="text-3xl font-black text-white mb-3">Project Not Found</h2>
          <p className="text-neutral-400 mb-6 text-sm">The project case study you are looking for doesn't exist or has been relocated.</p>
          <Link to="/" className="inline-block px-7 py-3.5 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white rounded-2xl font-semibold shadow-xl shadow-purple-600/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen pt-24 pb-28 bg-[#08080a] text-neutral-200 overflow-hidden font-sans selection:bg-purple-500/30">
      
      {/* Background Ambient Glows & Mesh Grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[160px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[160px]" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 z-10">
        
        {/* Navigation Bar */}
        <div className="flex items-center justify-between mb-10 pt-4">
          <button 
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-purple-300 hover:text-white bg-neutral-900/80 border border-white/10 hover:border-purple-500/40 px-4 py-2.5 rounded-2xl backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-xl"
          >
            <FaArrowLeft size={12} /> Back to Projects
          </button>

          {/* Animated Case Study Radar Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-neutral-900/80 border border-purple-500/30 text-xs font-mono font-medium tracking-wider uppercase shadow-[0_0_20px_rgba(168,85,247,0.15)] backdrop-blur-md">
            <div className="relative flex items-center justify-center w-2 h-2">
              <motion.span 
                animate={{ opacity: [0.2, 0.8, 0.2], scale: [0.8, 1.8, 0.8] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full bg-pink-400/60 blur-[1px]"
              />
              <motion.span 
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"
              />
            </div>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-200">
              Case Study
            </span>
          </div>
        </div>

        {/* Hero Header Banner */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-2 mb-5">
            {project.tech?.map((item, index) => (
              <span 
                key={index} 
                className="px-3 py-1 bg-neutral-950/90 border border-neutral-800/90 rounded-xl text-[11px] font-mono text-purple-300/90 tracking-wide hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-white transition-all duration-200"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-neutral-800/80 pb-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.1] mb-4">
                {project.title}
              </h1>
              <p className="text-lg sm:text-xl text-neutral-300/90 leading-relaxed font-normal">
                {project.description}
              </p>
            </div>

            {/* Quick Action CTAs */}
            <div className="flex items-center gap-3 shrink-0 pt-2 lg:pt-0">
              {project.code && (
                <a 
                  href={project.code} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-purple-500/40 text-neutral-200 hover:text-purple-300 font-semibold text-sm flex items-center gap-2.5 transition-all duration-300 shadow-xl"
                >
                  <FaGithub size={16} /> Code Repository
                </a>
              )}
              {project.demo && (
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 font-semibold text-white text-sm flex items-center gap-2.5 shadow-xl shadow-purple-600/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  Live Preview <FaExternalLinkAlt size={12} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Feature Showcase Banner Image Window */}
        <div className="relative w-full rounded-3xl overflow-hidden border border-white/10 bg-neutral-950 mb-16 shadow-2xl group">
          
          {/* Top Window Action Bar (Mac Aesthetic) */}
          <div className="px-5 py-3.5 bg-neutral-900/90 border-b border-white/10 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="ml-2 text-xs font-mono text-neutral-500">{project.title.toLowerCase().replace(/\s+/g, '-')}.app</span>
          </div>

          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-transparent to-transparent opacity-80 z-10 pointer-events-none" />
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-auto max-h-[620px] object-cover object-top group-hover:scale-[1.01] transition-transform duration-700 ease-out"
            />
          </div>
        </div>

        {/* Main 2-Column Asymmetrical Details Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Main Column: Overview & Features (Col 1-7) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Overview Box */}
            {project.overview && (
              <section className="relative bg-neutral-900/60 border border-white/10 rounded-3xl p-7 sm:p-9 backdrop-blur-xl shadow-2xl overflow-hidden group">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
                <div className="absolute -top-12 -right-12 w-36 h-36 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
                
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-11 h-11 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-center justify-center text-purple-400 shadow-inner">
                    <FaRegLightbulb size={18} />
                  </div>
                  <h2 className="text-2xl font-bold text-white tracking-tight">Project Overview</h2>
                </div>

                <p className="text-neutral-300 leading-relaxed text-base sm:text-lg font-normal">
                  {project.overview}
                </p>
              </section>
            )}

            {/* Key Features List */}
            {project.keyFeatures && (
              <section className="relative bg-neutral-900/60 border border-white/10 rounded-3xl p-7 sm:p-9 backdrop-blur-xl shadow-2xl overflow-hidden group">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />
                <div className="absolute -top-12 -right-12 w-36 h-36 bg-pink-600/10 rounded-full blur-3xl pointer-events-none" />
                
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="w-11 h-11 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-center justify-center text-pink-400 shadow-inner">
                    <FaCogs size={18} />
                  </div>
                  <h2 className="text-2xl font-bold text-white tracking-tight">Key Capabilities & Features</h2>
                </div>

                <div className="grid grid-cols-1 gap-3.5">
                  {project.keyFeatures.map((feature, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-start gap-3.5 p-4 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-purple-500/40 transition-colors duration-300"
                    >
                      <FaCheckCircle className="text-purple-400 mt-1 shrink-0 text-base" />
                      <span className="text-neutral-200 text-sm sm:text-base leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

          </div>

          {/* Sidebar Column: Tech Specs & System Architecture (Col 8-12) */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            
            {/* System Architecture Card */}
            {project.architecture && (
              <section className="relative bg-neutral-900/60 border border-white/10 rounded-3xl p-7 sm:p-8 backdrop-blur-xl shadow-2xl overflow-hidden group">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
                
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center text-indigo-400 shadow-inner">
                    <FaLayerGroup size={17} />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">System Architecture</h3>
                </div>

                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                  {project.architecture}
                </p>
              </section>
            )}

            {/* Quick Tech Specs Panel */}
            <section className="relative bg-neutral-900/60 border border-white/10 rounded-3xl p-7 sm:p-8 backdrop-blur-xl shadow-xl">
              <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-4 flex items-center gap-2">
                <FaCodeBranch className="text-purple-400" /> Technology Stack
              </h3>

              <div className="flex flex-wrap gap-2">
                {project.tech?.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1.5 bg-neutral-950/90 border border-neutral-800/90 rounded-xl text-xs font-mono text-purple-300/90 tracking-wide hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-white transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

          </div>

        </div>

      </div>
    </div>
  );
}

export default ProjectDetails;