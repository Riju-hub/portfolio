import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaFacebook, 
  FaInstagram, 
  FaArrowDown, 
  FaExternalLinkAlt 
} from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi2'; // Changed from FaSparkles to HiSparkles

function Hero() {
  const titles = ["FULL STACK DEVELOPER", "DATA SCIENTIST", "AI ML ENGINEER"];
  const [index, setIndex] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
      setKey((prev) => prev + 1);
    }, 3500);

    return () => clearInterval(interval);
  }, [titles.length]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/Riju-hub/', label: 'GitHub', hover: 'hover:border-purple-500 hover:text-purple-400' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/bhabasindhu-das-web', label: 'LinkedIn', hover: 'hover:border-blue-500 hover:text-blue-400' },
    { icon: FaTwitter, url: 'https://x.com/BhabasindhuBhab', label: 'Twitter', hover: 'hover:border-sky-500 hover:text-sky-400' },
    { icon: FaFacebook, url: 'https://www.facebook.com/profile.php?id=61577756120368', label: 'Facebook', hover: 'hover:border-blue-600 hover:text-blue-500' },
    { icon: FaInstagram, url: 'https://www.instagram.com/bhabasindhudas621/', label: 'Instagram', hover: 'hover:border-pink-500 hover:text-pink-400' },
  ];

  const resumeUrl = "https://docs.google.com/document/d/1rsi35OZRNh_WH07O2zVm7eYv5IgGa0EgCw9-LbESd3Q/edit?usp=sharing";

  return ( 
    <section
      id='home'
      className='relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-[#0a0a0c]'
    >
      {/* Background Ambient Glows & Grid */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute -top-40 -left-40 w-96 h-96 bg-purple-600/25 rounded-full blur-[128px] animate-pulse' />
        <div className='absolute top-1/2 -right-40 w-96 h-96 bg-pink-600/20 rounded-full blur-[128px] animate-pulse' style={{ animationDelay: '1.5s' }} />
        <div className='absolute -bottom-20 left-1/3 w-96 h-96 bg-indigo-600/15 rounded-full blur-[128px]' />
        
        {/* Subtle radial overlay & grid */}
        <div className='absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]' />
      </div>

      <div className='relative container mx-auto px-6 max-w-7xl flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-16 z-10'>
        
        {/* Left Side Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className='w-full md:w-1/2 text-center md:text-left'
        >
          {/* Availability Badge */}
          <div className='inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 backdrop-blur-md text-xs sm:text-sm text-emerald-300 mb-6 shadow-inner'>
            <span className='relative flex h-2 w-2'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-2 w-2 bg-emerald-500'></span>
            </span>
            Available for new opportunities
          </div>

          {/* Heading */}
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-black mb-3 text-white tracking-tight leading-[1.15]'>
            Hi, I'm{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-300'>
              Bhabasindhu Das
            </span>
          </h1>

          {/* Animated Dynamic Subtitle */}
          <div className="w-full flex justify-center md:justify-start min-h-[48px] items-center mb-5">
            <h2
              key={key}
              className="text-xl sm:text-2xl md:text-3xl font-bold typewriter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 tracking-wider font-mono"
              style={{ '--type-width': `${titles[index].length}ch` }}
            >
              {titles[index]}
            </h2>
          </div>

          <p className="text-base sm:text-lg text-neutral-300/80 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed font-normal">
            I build scalable web applications and intelligent systems, bridging the gap between{' '}
            <span className="text-purple-300 font-semibold border-b border-purple-500/30">full-stack development</span>,{' '}
            <span className="text-pink-300 font-semibold border-b border-pink-500/30">data science</span>, and actionable{' '}
            <span className="text-indigo-300 font-semibold border-b border-indigo-500/30">AI/ML solutions</span>.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-10">
            
            {/* ATTRACTIVE RESUME BUTTON */}
            <button
              onClick={() => window.open(resumeUrl, '_blank')}
              className="group relative inline-flex items-center gap-2.5 px-8 py-3.5 rounded-2xl font-bold text-white overflow-hidden shadow-2xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
            >
              {/* Outer animated gradient glow */}
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 blur-lg opacity-50 group-hover:opacity-80 transition duration-500" />
              
              {/* Shimmer effect */}
              <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 group-hover:animate-[shimmer_1.5s_infinite]" />
              
              {/* Button Inner Content */}
              <span className="relative z-10 flex items-center gap-2">
                {/* <FaFileDownload className="text-pink-200 group-hover:translate-y-0.5 transition-transform duration-300" /> */}
                Resume
                <FaExternalLinkAlt className="text-xs text-purple-200 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
              </span>
            </button>

            {/* Secondary CTA: View Work */}
            <button
              onClick={() => scrollToSection('projects')}
              className="px-7 py-3.5 bg-neutral-900/80 hover:bg-neutral-800 text-neutral-200 hover:text-white rounded-2xl font-semibold border border-neutral-800 hover:border-neutral-700 transition duration-300 backdrop-blur-md hover:shadow-lg"
            >
              View Work
            </button>

            {/* Tertiary CTA: Contact */}
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3.5 text-neutral-400 hover:text-purple-300 font-medium transition duration-300"
            >
              Contact Me →
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center md:justify-start gap-3">
            <span className="text-xs uppercase tracking-wider text-neutral-500 font-mono mr-2 hidden sm:inline-block">Connect:</span>
            {socialLinks.map(({ icon: Icon, url, label, hover }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className={`w-10 h-10 rounded-xl bg-neutral-900/90 border border-neutral-800/80 flex items-center justify-center text-neutral-400 hover:scale-110 transition duration-300 backdrop-blur-md shadow-sm ${hover}`}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Side Avatar & Graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="w-full md:w-1/2 flex justify-center z-10"
        >
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[360px] lg:h-[360px]">
            
            {/* Ambient Backlight Halo */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-indigo-500 opacity-40 blur-3xl animate-pulse" />
            
            {/* Decorative Tech Badges floating around profile */}
            <motion.div 
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-2 -right-2 z-20 px-3.5 py-2 rounded-xl bg-neutral-900/90 border border-purple-500/30 backdrop-blur-md shadow-xl flex items-center gap-2 text-xs text-purple-300 font-medium"
            >
              <HiSparkles className="text-purple-400 text-sm" />
              MERN Stack
            </motion.div>

            <motion.div 
              animate={{ y: [8, -8, 8] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-6 -left-6 z-20 px-3.5 py-2 rounded-xl bg-neutral-900/90 border border-pink-500/30 backdrop-blur-md shadow-xl flex items-center gap-2 text-xs text-pink-300 font-medium"
            >
              <span className="w-2 h-2 rounded-full bg-pink-400" />
              AI & Machine Learning
            </motion.div>

            {/* Profile Image Container */}
            <div className="relative w-full h-full rounded-full p-2 bg-gradient-to-tr from-purple-500/40 via-pink-500/20 to-indigo-500/40 backdrop-blur-sm border border-white/10">
              <motion.img
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
                className="rounded-full w-full h-full object-cover z-10 border-2 border-neutral-900 shadow-2xl" 
                src={assets.profileImg} 
                alt="Bhabasindhu Das Profile" 
              />
            </div>
          </div>
        </motion.div>

      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={() => scrollToSection('about')}
        aria-label="Scroll to About section"
        className='hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-neutral-500 hover:text-purple-400 transition duration-300 z-10'
      >
        <span className='text-[10px] uppercase tracking-widest font-mono'>Scroll Down</span>
        <FaArrowDown className='animate-bounce text-purple-400' size={12} />
      </button>
    </section>
  );
}

export default Hero;