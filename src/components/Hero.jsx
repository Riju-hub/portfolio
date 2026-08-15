
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { assets } from '../assets/assets';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaFacebook, 
  FaInstagram, 
  FaArrowDown, 
  FaExternalLinkAlt,
  FaReact,
  FaPython,
  FaBrain,
  FaCode,
  FaPaperPlane
} from 'react-icons/fa';
import { HiSparkles, HiCodeBracketSquare } from 'react-icons/hi2';

function Hero() {
  const titles = ["FULL STACK DEVELOPER", "DATA SCIENTIST", "AI / ML ENGINEER"];
  
  // Custom Dynamic Typewriter State
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const targetTitle = titles[currentTitleIndex];

    const typingSpeed = isDeleting ? 35 : 75;
    const pauseBeforeDelete = 2200;

    const handleTyping = () => {
      if (!isDeleting) {
        setCurrentText(targetTitle.substring(0, currentText.length + 1));

        if (currentText === targetTitle) {
          setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
          return;
        }
      } else {
        setCurrentText(targetTitle.substring(0, currentText.length - 1));

        if (currentText === "") {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
          return;
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTitleIndex, titles]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/Riju-hub/', label: 'GitHub', color: 'hover:text-purple-400 hover:border-purple-500/50 hover:bg-purple-500/10' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/bhabasindhu-das-web', label: 'LinkedIn', color: 'hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-500/10' },
    { icon: FaTwitter, url: 'https://x.com/BhabasindhuBhab', label: 'Twitter', color: 'hover:text-sky-400 hover:border-sky-500/50 hover:bg-sky-500/10' },
    { icon: FaFacebook, url: 'https://www.facebook.com/profile.php?id=61577756120368', label: 'Facebook', color: 'hover:text-blue-500 hover:border-blue-600/50 hover:bg-blue-600/10' },
    { icon: FaInstagram, url: 'https://www.instagram.com/bhabasindhudas621/', label: 'Instagram', color: 'hover:text-pink-400 hover:border-pink-500/50 hover:bg-pink-500/10' },
  ];

  const resumeUrl = "https://docs.google.com/document/d/1rsi35OZRNh_WH07O2zVm7eYv5IgGa0EgCw9-LbESd3Q/edit?usp=sharing";

  return ( 
    <section
      id='home'
      className='relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-[#08080a] text-white'
    >
      {/* Dynamic Ambient Glow Mesh */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute -top-32 -left-32 w-[30rem] h-[30rem] bg-purple-600/20 rounded-full blur-[140px] animate-pulse' />
        <div className='absolute top-1/3 -right-32 w-[30rem] h-[30rem] bg-pink-500/15 rounded-full blur-[140px] animate-pulse' style={{ animationDelay: '2s' }} />
        <div className='absolute -bottom-20 left-1/2 -translate-x-1/2 w-[35rem] h-[35rem] bg-indigo-600/15 rounded-full blur-[160px]' />
      </div>

      <div className='relative container mx-auto px-6 max-w-7xl flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-16 z-10'>
        
        {/* Left Content Area */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className='w-full md:w-1/2 text-center md:text-left'
        >
          {/* Glassmorphic Availability Status Pill */}
          <div className='inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-neutral-900/80 border border-emerald-500/30 backdrop-blur-md text-xs sm:text-sm text-emerald-300 mb-6 shadow-[0_0_20px_rgba(16,185,129,0.1)]'>
            <span className='relative flex h-2.5 w-2.5'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75' />
              <span className='relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500' />
            </span>
            <span className="font-mono font-medium">Available for new opportunities</span>
          </div>

          {/* Headline */}
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-black mb-4 text-white tracking-tight leading-[1.12]'>
            Hi, I'm{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-300'>
              Bhabasindhu Das
            </span>
          </h1>

          {/* Dynamic Ultra-Smooth Typewriter Pill Box */}
          <div className="w-full flex justify-center md:justify-start items-center mb-6">
            <div className="px-4 py-2 rounded-2xl bg-neutral-900/60 border border-white/10 backdrop-blur-xl inline-flex items-center gap-2 shadow-xl">
              <HiCodeBracketSquare className="text-purple-400 text-xl" />
              <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-300 tracking-wider font-mono uppercase">
                {currentText}
              </h2>

              {/* Glowing Smooth Cursor Line */}
              <motion.span 
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.7, repeat: Infinity, ease: "easeInOut" }}
                className="w-[3px] h-6 bg-gradient-to-b from-purple-400 to-pink-500 rounded-full shadow-[0_0_8px_rgba(236,72,153,0.8)]"
              />
            </div>
          </div>

          <p className="text-base sm:text-lg text-neutral-300/80 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed font-normal">
            I engineer robust full-stack web platforms and intelligent AI models—turning complex data into{' '}
            <span className="text-purple-300 font-semibold border-b border-purple-500/30">scalable applications</span> and{' '}
            <span className="text-pink-300 font-semibold border-b border-pink-500/30">predictive machine learning</span> solutions.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-10">
            
            {/* Primary Action Button: Resume */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.open(resumeUrl, '_blank')}
              className="group relative inline-flex items-center gap-2.5 px-8 py-3.5 rounded-2xl font-semibold text-sm text-white overflow-hidden shadow-xl cursor-pointer"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 blur-lg opacity-40 group-hover:opacity-75 transition duration-500" />
              
              <span className="relative z-10 flex items-center gap-2">
                Resume
                <FaExternalLinkAlt className="text-xs text-purple-200 opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
              </span>

              {/* Button Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            </motion.button>

            {/* Secondary CTA: View Work */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('projects')}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-neutral-900/80 hover:bg-neutral-800 text-neutral-200 hover:text-white rounded-2xl font-semibold text-sm border border-white/10 transition-all duration-300 backdrop-blur-xl shadow-lg cursor-pointer"
            >
              <FaCode className="text-purple-400 text-xs" />
              View Projects
            </motion.button>

            {/* Tertiary CTA: Contact */}
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center gap-2 px-5 py-3.5 text-neutral-400 hover:text-purple-300 font-medium text-sm transition-colors duration-300 cursor-pointer"
            >
              <FaPaperPlane className="text-xs" /> Contact Me
            </button>
          </div>

          {/* Social Links Bar */}
          <div className="flex items-center justify-center md:justify-start gap-3">
            <span className="text-xs uppercase tracking-wider text-neutral-500 font-mono mr-2 hidden sm:inline-block">Connect:</span>
            {socialLinks.map(({ icon: Icon, url, label, color }) => (
              <motion.a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-10 h-10 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center text-neutral-400 transition-all duration-300 shadow-md ${color}`}
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>
        </motion.div>
<motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="w-full md:w-1/2 flex justify-center z-10"
        >
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[380px] lg:h-[380px]">
            
            {/* Ambient Multi-Layer Glow Halo */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-indigo-500 opacity-40 blur-3xl animate-pulse" />
            
            {/* 1. TOP-RIGHT: AI & Machine Learning Badge */}
            <motion.div 
              animate={{ y: [8, -8, 8] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-3 -right-4 sm:-top-5 sm:-right-6 z-20 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl bg-neutral-900/90 border border-pink-500/20 backdrop-blur-xl shadow-2xl flex items-center gap-2.5 text-xs sm:text-sm text-pink-300 font-medium"
            >
              <HiSparkles className="text-pink-400 text-base sm:text-lg animate-pulse" />
              <span>AI &amp; Machine Learning</span>
            </motion.div>

            {/* 2. BOTTOM-LEFT: Full Stack Developer Badge */}
            <motion.div 
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-3 -left-4 sm:-bottom-5 sm:-left-6 z-20 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl bg-neutral-900/90 border border-purple-500/20 backdrop-blur-xl shadow-2xl flex items-center gap-2.5 text-xs sm:text-sm text-purple-300 font-medium"
            >
              <HiCodeBracketSquare className="text-purple-400 text-base sm:text-lg" />
              <span>Full Stack Developer</span>
            </motion.div>

            {/* Profile Avatar Outer Gradient Ring */}
            <div className="relative w-full h-full rounded-full p-2.5 bg-gradient-to-tr from-purple-500/40 via-pink-500/20 to-indigo-500/40 backdrop-blur-md border border-white/10 shadow-2xl">
              <motion.img
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
                className="rounded-full w-full h-full object-cover z-10 border-2 border-neutral-950 shadow-2xl" 
                src={assets.profileImg} 
                alt="Bhabasindhu Das Profile" 
              />
            </div>
          </div>
        </motion.div>

      </div>

      {/* Smooth Scroll Down Indicator */}
      <button
        onClick={() => scrollToSection('about')}
        aria-label="Scroll to About section"
        className='hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-neutral-500 hover:text-purple-400 transition duration-300 z-10 cursor-pointer'
      >
        <span className='text-[10px] uppercase tracking-widest font-mono'>Scroll Down</span>
        <FaArrowDown className='animate-bounce text-purple-400' size={12} />
      </button>
    </section>
  );
}

export default Hero;