// import React from 'react';
// import { motion } from 'framer-motion';
// import { aboutInfo } from '../assets/assets';

// function About() {
//   return ( 
//     <section
//       id='about'
//       className='relative py-20 md:py-28 bg-[#0a0a0c] text-white overflow-hidden'
//     >
//       {/* Background Ambient Glows & Grid (Matching Hero.jsx) */}
//       <div className='absolute inset-0 overflow-hidden pointer-events-none'>
//         <div className='absolute -top-40 -left-40 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] animate-pulse' />
//         <div className='absolute top-1/2 -right-40 w-96 h-96 bg-pink-600/15 rounded-full blur-[128px] animate-pulse' style={{ animationDelay: '1.5s' }} />
//         <div className='absolute -bottom-20 left-1/3 w-96 h-96 bg-indigo-600/15 rounded-full blur-[128px]' />
        
//         {/* Subtle radial overlay & grid */}
//         <div className='absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]' />
//       </div>

//       <div className="relative container mx-auto px-6 max-w-7xl z-10">
        
//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, ease: "easeOut" }}
//           viewport={{ once: true, amount: 0.3 }}
//           className='text-center mb-14 md:mb-20'
//         >
//           <span className='inline-block text-xs md:text-sm font-semibold tracking-widest uppercase text-purple-400 mb-3 font-mono'>
//             Get To Know Me
//           </span>
//           <h2 className='text-3xl sm:text-4xl md:text-5xl font-black mb-4 tracking-tight text-white'>
//             About <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-300'>Me</span>
//           </h2>
//           <p className='text-neutral-400 max-w-2xl mx-auto text-base md:text-lg'>
//             Get to know more about my background, technical focus, and engineering passion
//           </p>
//         </motion.div>
        
//         {/* Two-Column Content Layout */}
//         <div className='flex flex-col lg:flex-row items-start gap-12 lg:gap-16 max-w-6xl mx-auto'>
          
//           {/* Left Column: My Journey Text */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//             viewport={{ once: true, amount: 0.3 }}
//             className='w-full lg:w-2/5 lg:sticky lg:top-28'
//           >
//             <h3 className='text-2xl md:text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-300'>
//               My Journey
//             </h3>

//             <div className='space-y-5 mb-8'>
//               <p className='text-neutral-300 text-base md:text-lg leading-relaxed'>
//                 I am a Computer Science student and aspiring Software Engineer with a strong focus on <b className='text-white font-semibold'>Full-Stack Development</b>, <b className='text-white font-semibold'>Artificial Intelligence</b>, and <b className='text-white font-semibold'>Machine Learning</b>.
//               </p>
//               <p className='text-neutral-300 text-base md:text-lg leading-relaxed'>
//                 I enjoy building scalable web applications using the <b className='text-white font-semibold'>MERN stack</b> and exploring data-driven solutions through <b className='text-white font-semibold'>machine learning</b> models. I am continuously learning emerging technologies and applying software design patterns to solve real-world problems.
//               </p>
//             </div>

//             {/* Highlighted Quote Box */}
//             <div className='relative pl-5 py-2 border-l-2 border-purple-500 bg-purple-950/20 rounded-r-xl border-y border-r border-purple-500/10 backdrop-blur-md'>
//               <p className='text-neutral-300 italic text-sm md:text-base leading-relaxed'>
//                 "Turning ideas into scalable software, one line of code at a time."
//               </p>
//             </div>
//           </motion.div>
          
//           {/* Right Column: Dynamic Info Cards Grid */}
//           <div className='w-full lg:w-3/5'>
//             <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6'>
//               {aboutInfo.map((data, index) => (
//                 <motion.div 
//                   key={data.id || index}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
//                   viewport={{ once: true, amount: 0.3 }}
//                   className="relative bg-neutral-900/80 p-6 rounded-2xl border border-neutral-800/80 backdrop-blur-md transform hover:-translate-y-1.5 hover:border-purple-500/40 transition-all duration-300 cursor-pointer shadow-xl group overflow-hidden"
//                 >
//                   {/* Subtle hover gradient glow */}
//                   <div className='absolute -top-10 -right-10 w-28 h-28 bg-purple-600/0 group-hover:bg-purple-600/15 rounded-full blur-2xl transition-all duration-500' />

//                   {/* Icon Container */}
//                   <div className="relative text-2xl mb-4 text-purple-400 group-hover:text-pink-400 transition-colors duration-300 w-12 h-12 flex items-center justify-center rounded-xl bg-neutral-950 border border-neutral-800 group-hover:border-purple-500/30">
//                     {data.icon && <data.icon className={`${data.color} w-6 h-6`}/>}
//                   </div>

//                   <h3 className='relative text-lg font-bold mb-2 text-white group-hover:text-purple-300 transition-colors duration-300'>
//                     {data.title}
//                   </h3>
                  
//                   <p className='relative text-neutral-400 text-sm leading-relaxed'>
//                     {data.description}
//                   </p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// export default About;

import React from 'react';
import { motion } from 'framer-motion';
import { aboutInfo } from '../assets/assets';
import { FaUserGraduate, FaTerminal, FaCompass } from 'react-icons/fa6';
import { HiSparkles } from 'react-icons/hi2'; // Clean replacement for sparkles icon

function About() {
  return ( 
    <section
      id="about"
      className="relative py-24 md:py-32 bg-[#08080a] text-white overflow-hidden selection:bg-purple-500/30 font-sans"
    >
      {/* Background Ambient Glows & Grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[160px] animate-pulse" />
        <div 
          className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[160px] animate-pulse" 
          style={{ animationDelay: '2s' }} 
        />
        <div className="absolute -bottom-20 left-1/3 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[160px]" />
        
        {/* Modern Radial Mesh Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative container mx-auto px-6 max-w-7xl z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-semibold tracking-widest uppercase text-purple-300 font-mono mb-4 backdrop-blur-md">
            <FaCompass className="text-purple-400" /> Professional Profile
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black mb-4 tracking-tight text-white">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-300">Me</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Architecting intelligent systems, full-stack web applications, and data-driven solutions.
          </p>
        </motion.div>
        
        {/* Asymmetrical Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-6xl mx-auto items-stretch">
          
          {/* Left Hero Card: Bio & Core Philosophy (Col 1-5) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-5 flex flex-col justify-between relative bg-neutral-900/60 border border-neutral-800/80 p-8 rounded-3xl backdrop-blur-xl shadow-2xl hover:border-purple-500/40 transition-all duration-300 group overflow-hidden"
          >
            {/* Corner Glow */}
            <div className="absolute -top-16 -right-16 w-36 h-36 bg-purple-600/10 rounded-full blur-3xl group-hover:bg-purple-600/20 transition-all pointer-events-none" />

            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-purple-400 mb-6">
                <FaUserGraduate className="text-purple-400" /> Student & Engineer
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 leading-tight">
                Passionate about engineering software that solves real problems.
              </h3>

              <div className="space-y-4 text-neutral-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I am a Computer Science student focused on building production-ready <strong className="text-white font-semibold">Full-Stack Applications</strong> and exploring <strong className="text-white font-semibold">Machine Learning Models</strong>.
                </p>
                <p>
                  My work bridges clean frontend interfaces with robust backend architectures, distributed data pipelines, and intelligent AI features.
                </p>
              </div>
            </div>

            {/* Terminal Quote Box */}
            <div className="mt-8 p-4 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 backdrop-blur-md">
              <div className="flex items-center gap-2 text-xs font-mono text-purple-400 mb-2">
                <FaTerminal size={12} /> <span className="text-neutral-400">philosophy.js</span>
              </div>
              <p className="text-neutral-300 italic text-xs sm:text-sm font-mono leading-relaxed">
                "Turning complex algorithmic concepts into clean, maintainable, and impactful software."
              </p>
            </div>
          </motion.div>

          {/* Right Column: 2x2 Bento Capability Cards (Col 6-12) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {aboutInfo.map((data, index) => {
              const IconComponent = data.icon;

              return (
                <motion.div 
                  key={data.id || index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className={`relative bg-neutral-900/60 p-6 rounded-3xl border border-neutral-800/80 backdrop-blur-xl transition-all duration-300 ${data.borderColor} hover:-translate-y-1 shadow-2xl group overflow-hidden flex flex-col justify-between`}
                >
                  {/* Subtle hover gradient glow */}
                  <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full blur-3xl transition-all duration-500 pointer-events-none ${data.bgGlow}`} />

                  <div>
                    {/* Header Row: Icon + Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                        {IconComponent && <IconComponent className={`${data.color} text-xl`} />}
                      </div>
                      
                      {data.badge && (
                        <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 bg-neutral-950/80 px-2.5 py-1 rounded-md border border-neutral-800">
                          {data.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
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
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;

