// import React, { useEffect } from 'react';
// import { useParams, useNavigate, Link } from 'react-router-dom';
// import { ProjectDetails as projectsData } from '../assets/assets';
// import { FaArrowLeft, FaExternalLinkAlt, FaGithub, FaCheckCircle } from 'react-icons/fa';

// function ProjectDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   // Find project by matching ID directly OR by checking generated slugs
//   const project = projectsData?.find((p) => {
//     if (!id) return false;
    
//     const paramId = id.toLowerCase().trim();
//     const exactId = p.id?.toLowerCase().trim();
    
//     // 1. Direct ID match (e.g. 'staynova' === 'staynova')
//     if (exactId && exactId === paramId) return true;

//     // 2. Fallback slug match from title
//     const titleSlug = p.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
//     if (titleSlug === paramId) return true;

//     // 3. Partial match (if URL is 'staynova-hotel-catalog-platform' and p.id is 'staynova')
//     if (exactId && paramId.startsWith(exactId)) return true;

//     return false;
//   });

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [id]);

//   if (!project) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 bg-[#0a0a0c]">
//         <h2 className="text-3xl font-bold text-white mb-4">Project Not Found</h2>
//         <p className="text-neutral-400 mb-6">The project you are looking for doesn't exist.</p>
//         <Link to="/" className="px-6 py-2.5 bg-purple-600 text-white rounded-xl font-medium hover:bg-purple-500 transition">
//           Back to Home
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen pt-28 pb-20 px-6 max-w-5xl mx-auto text-neutral-200 bg-[#0a0a0c]">
//       {/* Back Button */}
//       <button 
//         onClick={() => navigate(-1)}
//         className="flex items-center gap-2 mb-8 text-purple-400 hover:text-purple-300 transition"
//       >
//         <FaArrowLeft size={16} /> Back
//       </button>

//       {/* Header Section */}
//       <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-neutral-800 pb-8">
//         <div>
//           <div className="flex flex-wrap gap-2 mb-3">
//             {project.tech?.map((item, index) => (
//               <span key={index} className="text-xs px-3 py-1 rounded-full bg-purple-950/50 border border-purple-500/30 text-purple-300 font-mono">
//                 {item}
//               </span>
//             ))}
//           </div>
//           <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
//             {project.title}
//           </h1>
//           <p className="text-lg text-neutral-400 mt-2">
//             {project.description}
//           </p>
//         </div>

//         {/* Action Buttons */}
//         <div className="flex items-center gap-3 shrink-0">
//           {project.code && (
//             <a 
//               href={project.code} 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="px-5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 font-semibold text-white flex items-center gap-2 transition"
//             >
//               <FaGithub size={16} /> GitHub
//             </a>
//           )}
//           {project.demo && (
//             <a 
//               href={project.demo} 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 font-semibold text-white flex items-center gap-2 shadow-lg shadow-purple-600/20 transition"
//             >
//               Live Demo <FaExternalLinkAlt size={12} />
//             </a>
//           )}
//         </div>
//       </div>

//       {/* Project Image */}
//       <div className="w-full rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 mb-12 shadow-2xl">
//         <img 
//           src={project.image} 
//           alt={project.title} 
//           className="w-full h-auto max-h-[500px] object-cover"
//         />
//       </div>

//       {/* Overview & Key Features */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         <div className="lg:col-span-2 space-y-8">
//           {project.overview && (
//             <section className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 sm:p-8">
//               <h2 className="text-xl font-bold text-white mb-4">Project Overview</h2>
//               <p className="text-neutral-300 leading-relaxed">
//                 {project.overview}
//               </p>
//             </section>
//           )}

//           {project.keyFeatures && (
//             <section className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 sm:p-8">
//               <h2 className="text-xl font-bold text-white mb-4">Key Features</h2>
//               <ul className="space-y-3">
//                 {project.keyFeatures.map((feature, idx) => (
//                   <li key={idx} className="flex items-start gap-3 text-neutral-300">
//                     <FaCheckCircle className="text-purple-400 mt-1 shrink-0" size={14} />
//                     <span>{feature}</span>
//                   </li>
//                 ))}
//               </ul>
//             </section>
//           )}
//         </div>

//         {/* System Architecture */}
//         <div>
//           {project.architecture && (
//             <section className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6">
//               <h3 className="text-lg font-bold text-white mb-3">System Architecture</h3>
//               <p className="text-sm text-neutral-400 leading-relaxed">
//                 {project.architecture}
//               </p>
//             </section>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProjectDetails;

import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
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
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 bg-[#0a0a0c] relative overflow-hidden text-white">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px]" />
          <div className="absolute -bottom-20 right-1/3 w-96 h-96 bg-pink-600/15 rounded-full blur-[128px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        </div>

        <div className="relative z-10 bg-neutral-900/80 p-10 rounded-3xl border border-neutral-800/80 backdrop-blur-md max-w-md shadow-2xl">
          <h2 className="text-3xl font-black text-white mb-3">Project Not Found</h2>
          <p className="text-neutral-400 mb-6 text-sm">The project you are looking for doesn't exist or has been relocated.</p>
          <Link to="/" className="inline-block px-7 py-3.5 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-2xl font-semibold shadow-lg shadow-purple-600/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen pt-24 pb-28 bg-[#0a0a0c] text-neutral-200 overflow-hidden">
      
      {/* Dynamic Background Ambient Glows & Grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-pink-600/15 rounded-full blur-[160px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[160px]" />
        
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 z-10">
        
        {/* Navigation Bar */}
        <div className="flex items-center justify-between mb-10 pt-4">
          <button 
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-purple-400 hover:text-white bg-neutral-900/90 border border-purple-500/30 px-4 py-2.5 rounded-2xl backdrop-blur-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-lg shadow-purple-950/40"
          >
            <FaArrowLeft size={12} /> Back to Showcase
          </button>

          <span className="hidden sm:inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-500">
            <HiSparkles className="text-pink-400" /> Case Study
          </span>
        </div>

        {/* Hero Header Banner */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {project.tech?.map((item, index) => (
              <span key={index} className="text-xs px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 font-mono tracking-wide backdrop-blur-md shadow-sm">
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-neutral-800/80 pb-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.1] mb-4">
                {project.title}
              </h1>
              <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed font-normal">
                {project.description}
              </p>
            </div>

            {/* Quick CTAs */}
            <div className="flex items-center gap-3 shrink-0 pt-2 lg:pt-0">
              {project.code && (
                <a 
                  href={project.code} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-2xl bg-neutral-900/90 border border-neutral-800 hover:border-purple-500/50 font-semibold text-white flex items-center gap-2.5 transition-all backdrop-blur-md hover:scale-[1.02] active:scale-[0.98] shadow-xl text-sm"
                >
                  <FaGithub size={16} /> GitHub
                </a>
              )}
              {project.demo && (
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 font-semibold text-white flex items-center gap-2.5 shadow-xl shadow-purple-600/25 hover:scale-[1.02] active:scale-[0.98] transition-all text-sm"
                >
                  Live Preview <FaExternalLinkAlt size={12} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Feature Showcase Banner Image */}
        <div className="relative w-full rounded-3xl overflow-hidden border border-neutral-800/90 bg-neutral-950 mb-16 shadow-2xl group">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-80 z-10 pointer-events-none" />
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-auto max-h-[620px] object-cover object-top group-hover:scale-[1.01] transition-transform duration-700"
          />
        </div>

        {/* Main 2-Column Asymmetrical Details Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Main Column: Overview & Features (Col 1-7) */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Overview Box */}
            {project.overview && (
              <section className="relative bg-neutral-900/60 border border-neutral-800/80 rounded-3xl p-8 sm:p-10 backdrop-blur-md shadow-2xl overflow-hidden">
                <div className="absolute -top-12 -right-12 w-36 h-36 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
                
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-400">
                    <FaRegLightbulb size={18} />
                  </div>
                  <h2 className="text-2xl font-bold text-white tracking-tight">Project Overview</h2>
                </div>

                <p className="text-neutral-300 leading-relaxed text-base sm:text-lg">
                  {project.overview}
                </p>
              </section>
            )}

            {/* Key Features List */}
            {project.keyFeatures && (
              <section className="relative bg-neutral-900/60 border border-neutral-800/80 rounded-3xl p-8 sm:p-10 backdrop-blur-md shadow-2xl overflow-hidden">
                <div className="absolute -top-12 -right-12 w-36 h-36 bg-pink-600/10 rounded-full blur-3xl pointer-events-none" />
                
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-pink-950/60 border border-pink-500/30 flex items-center justify-center text-pink-400">
                    <FaCogs size={18} />
                  </div>
                  <h2 className="text-2xl font-bold text-white tracking-tight">Key Capabilities & Features</h2>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {project.keyFeatures.map((feature, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-start gap-3.5 p-4 rounded-2xl bg-neutral-950/50 border border-neutral-800/60 hover:border-purple-500/30 transition-colors"
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
              <section className="relative bg-neutral-900/60 border border-neutral-800/80 rounded-3xl p-8 backdrop-blur-md shadow-2xl overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
                
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-950/60 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                    <FaLayerGroup size={18} />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">System Architecture</h3>
                </div>

                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                  {project.architecture}
                </p>
              </section>
            )}

            {/* Quick Specs Panel */}
            <section className="relative bg-neutral-900/40 border border-neutral-800/60 rounded-3xl p-8 backdrop-blur-md shadow-xl">
              <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-4 flex items-center gap-2">
                <FaCodeBranch className="text-purple-400" /> Technology Stack
              </h3>

              <div className="flex flex-wrap gap-2">
                {project.tech?.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs font-mono text-purple-300"
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

