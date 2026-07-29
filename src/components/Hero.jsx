import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaArrowDown } from 'react-icons/fa';

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
    { icon: FaGithub, url: 'https://github.com/Riju-hub/', label: 'GitHub', hover: 'hover:bg-neutral-700' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/bhabasindhu-das-web', label: 'LinkedIn', hover: 'hover:bg-blue-600' },
    { icon: FaTwitter, url: 'https://x.com/BhabasindhuBhab', label: 'Twitter', hover: 'hover:bg-neutral-900' },
    { icon: FaFacebook, url: 'https://www.facebook.com/profile.php?id=61577756120368', label: 'Facebook', hover: 'hover:bg-blue-700' },
    { icon: FaInstagram, url: 'https://www.instagram.com/bhabasindhudas621/', label: 'Instagram', hover: 'hover:bg-pink-600' },
  ];
  const resumeUrl = "https://drive.google.com/file/d/14iFp4aClSt7EF9QP4XHkqMmlt7ARlGVn/view?usp=sharing";

  return ( 
    <section
      id='home'
      className='relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-[#141414]'
    >
      {/* Animated background blobs */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-[-10%] left-[-10%] w-72 h-72 md:w-96 md:h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-[-10%] right-[-10%] w-72 h-72 md:w-96 md:h-96 bg-pink-600/20 rounded-full blur-3xl animate-pulse' style={{ animationDelay: '1s' }}></div>
        <div className='absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px]'></div>
      </div>

      <div className='relative container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-10'>
        
        {/* Left Side Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className='w-full md:w-1/2 text-center md:text-left z-10'
        >
          {/* Availability badge */}
          <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-800/60 border border-neutral-700 text-xs md:text-sm text-gray-300 mb-6'>
            <span className='w-2 h-2 rounded-full bg-green-500 animate-pulse'></span>
            Available for new opportunities
          </div>

          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-white tracking-tight leading-tight'>
            Hi, I'm{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400'>
              Bhabasindhu Das
            </span>
          </h1>
          {/* Rotating typewriter */}
          <div className="w-full flex justify-center md:block min-h-[40px] md:min-h-[50px]">
            <h2
              key={key}
              className="w-max text-center md:text-left text-2xl md:text-4xl font-extrabold mb-6 typewriter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 tracking-wide"
              style={{ '--type-width': `${titles[index].length}ch` }}
            >
              {titles[index]}
            </h2>
          </div>

          <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
            I build scalable web applications and intelligent systems, bridging the gap between{' '}
            <span className="text-purple-400 font-medium">full-stack development</span>,{' '}
            <span className="text-pink-400 font-medium">data science</span>, and actionable{' '}
            <span className="text-indigo-400 font-medium">AI/ML solutions</span>.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-10">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-7 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-purple-600/30 hover:-translate-y-0.5 transition duration-300"
            >
              View Work
            </button>
            <button
              onClick={() => window.open(resumeUrl, '_blank')}
              className="px-7 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-purple-600/30 hover:-translate-y-0.5 transition duration-300"
            >
              Download Resume
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-7 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-purple-600/30 hover:-translate-y-0.5 transition duration-300"
            >
              Contact Me
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-5">
            {socialLinks.map(({ icon: Icon, url, label, hover }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                title={label}
                className={`w-11 h-11 rounded-full bg-neutral-800/70 flex items-center justify-center text-gray-400 hover:text-white ${hover} transition duration-300 border border-neutral-700 hover:scale-110`}
              >
                <Icon size={18}/>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="w-full md:w-1/2 flex justify-center z-10"
        >
          <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {/* Rotating gradient ring */}
            <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-indigo-500 opacity-60 blur-2xl animate-pulse"></div>
            <div className="absolute inset-0 rounded-full border-2 border-purple-500/30"></div>

            <motion.img
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
              className="relative rounded-full w-full h-full object-cover z-10 border-4 border-neutral-800 shadow-2xl" 
              src={assets.profileImg} 
              alt="Bhabasindhu Das Profile" 
            />
          </div>
        </motion.div>

      </div>

      {/* Scroll down indicator */}
      <button
        onClick={() => scrollToSection('about')}
        aria-label="Scroll to About section"
        className='hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-gray-500 hover:text-purple-400 transition duration-300 z-10'
      >
        <span className='text-xs uppercase tracking-widest'>Scroll</span>
        <FaArrowDown className='animate-bounce' size={14} />
      </button>
    </section>
  );
}

export default Hero;