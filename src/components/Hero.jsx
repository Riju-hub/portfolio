import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';
import { FaDribbble, FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

function Hero() {
  const titles = ["FULL STACK DEVELOPER", "DATA SCIENTIST", "AI ML ENGINEER"];
  const [index, setIndex] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
      setKey((prev) => prev + 1); // Safely triggers CSS typewriter re-animation
    }, 3500);

    return () => clearInterval(interval);
  }, [titles.length]);

  return ( 
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      id='home'
      className='min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]'
    >
      <div className='container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10'>
        
        {/* Left Side Content */}
        <div className='md:w-1/2 mb-10 md:mb-0 z-10'>
          <h1 className='text-4xl md:text-6xl font-extrabold mb-4 text-white tracking-tight'>
            Hi, I'm <span className='text-purple-500 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400'>Bhabasindhu Das</span>
          </h1>

          {/* MODERN ROTATING TYPEWRITER CONTAINER */}
          <div className="w-max block min-h-[40px] md:min-h-[50px]">
            <h2
              key={key}
              className="text-2xl md:text-4xl font-extrabold mb-6 typewriter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 tracking-wide"
            >
              {titles[index]}
            </h2>
          </div>

          <p className="text-base md:text-lg text-gray-300 mb-8 max-w-lg leading-relaxed">
            I build scalable web applications and intelligent systems, bridging the gap between <span className="text-purple-400 font-medium">full-stack development</span>, <span className="text-pink-400 font-medium">data science</span>, and actionable <span className="text-indigo-400 font-medium">AI/ML solutions</span>.
          </p>
          
          {/* Action Buttons */}
          <div className="flex space-x-4">
            <a href="/projects" className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition duration-300 shadow-lg shadow-purple-600/20">
              View Work
            </a>
            <a href="/contact" className="px-6 py-3 border border-purple-500 text-purple-400 rounded-lg font-medium hover:bg-purple-500/10 transition duration-300">
              Contact Me
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex flex-wrap gap-4 mt-12">
            <a href="https://github.com/Riju-hub/" target="_blank" rel="noopener noreferrer" title="GitHub" className='w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-neutral-700 transition duration-300 border border-neutral-700'>
              <FaGithub size={20}/>
            </a>
            <a href="https://www.linkedin.com/in/bhabasindhu-das-71b147370" target="_blank" rel="noopener noreferrer" title="LinkedIn" className='w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition duration-300 border border-neutral-700'>
              <FaLinkedin size={20}/>
            </a>
            <a href="https://x.com/BhabasindhuBhab" target="_blank" rel="noopener noreferrer" title="Twitter" className='w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-neutral-900 transition duration-300 border border-neutral-700'>
              <FaTwitter size={20}/>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61577756120368" target="_blank" rel="noopener noreferrer" title="Facebook" className='w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-700 transition duration-300 border border-neutral-700'>
              <FaFacebook size={20}/>
            </a>
            <a href="https://www.instagram.com/bhabasindhudas621/" target="_blank" rel="noopener noreferrer" title="Instagram" className='w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-pink-600 transition duration-300 border border-neutral-700'>
              <FaInstagram size={20}/>
            </a>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="md:w-1/2 flex justify-center z-10">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Ambient Background Glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 opacity-40 blur-md animate-pulse"></div>
            
            {/* Floating Framer Motion Image */}
            <motion.img
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
              className="relative rounded-full w-full h-full object-cover z-10 border-4 border-neutral-800 shadow-2xl" 
              src={assets.profileImg} 
              alt="Bhabasindhu Das Profile" 
            />
          </div>
        </div>

      </div>
    </motion.div>
  );
}

export default Hero;