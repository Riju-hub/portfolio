
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaBars, 
  FaHome, 
  FaUser, 
  FaCode, 
  FaLaptopCode, 
  FaGraduationCap, 
  FaEnvelope, 
  FaBriefcase,
  FaGithub, 
  FaLinkedin, 
  FaTwitter,
  FaExternalLinkAlt
} from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import { HiSparkles } from 'react-icons/hi2';

const NAV_ITEMS = [
  { id: 'home', label: 'Home', icon: FaHome },
  { id: 'about', label: 'About', icon: FaUser },
  { id: 'skills', label: 'Skills', icon: FaCode },
  { id: 'projects', label: 'Projects', icon: FaLaptopCode },
  { id: 'experience', label: 'Experience', icon: FaBriefcase },
  { id: 'education', label: 'Education', icon: FaGraduationCap },
  { id: 'contact', label: 'Contact', icon: FaEnvelope },
];

const RESUME_PDF_URL = "https://docs.google.com/document/d/1rsi35OZRNh_WH07O2zVm7eYv5IgGa0EgCw9-LbESd3Q/edit?usp=sharing";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (location.pathname !== '/') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = showMenu ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [showMenu]);

  const scrollToSection = (id) => {
    setShowMenu(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return ( 
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 font-sans ${
      scrolled 
        ? 'bg-[#08080a]/80 py-3 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' 
        : 'bg-transparent py-5 border-b border-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl flex justify-between items-center">
        
        {/* Brand Logo with Pulsing Beacon */}
        <button 
          onClick={() => scrollToSection('home')} 
          className="group flex items-center gap-2 text-lg sm:text-xl lg:text-2xl font-black tracking-wider text-white cursor-pointer select-none"
        >
          <span>BHABASINDHU <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-300">DAS</span></span>
          <div className="relative flex items-center justify-center w-2.5 h-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gradient-to-r from-purple-500 to-pink-500" />
          </div>
        </button>

        {/* Desktop & Tablet Glassmorphic Navigation Bar */}
        <div className="hidden md:flex items-center gap-1 xl:gap-1.5 p-1.5 rounded-full bg-neutral-900/60 border border-white/10 backdrop-blur-xl shadow-xl">
          {NAV_ITEMS.map(({ id, label }) => {
            const isActive = activeSection === id;

            return (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`relative px-3.5 py-1.5 lg:px-4 lg:py-2 rounded-full capitalize font-medium text-xs lg:text-sm transition-all duration-300 cursor-pointer ${
                  isActive ? 'text-white font-semibold' : 'text-neutral-400 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-pink-600/90 rounded-full shadow-lg shadow-purple-600/30 border border-purple-400/30"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </button>
            );
          })}

          {/* Action Resume CTA */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={RESUME_PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative ml-2 inline-flex items-center gap-2 px-4 py-1.5 lg:px-5 lg:py-2 rounded-full text-xs lg:text-sm font-semibold text-white overflow-hidden shadow-lg cursor-pointer"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 transition-all duration-300" />
            
            <span className="relative z-10 flex items-center gap-1.5">
              <span>Resume</span>
              <FaExternalLinkAlt className="text-[10px] text-purple-200 opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </span>

            {/* Shine Sweep Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
          </motion.a>
        </div>

        {/* Mobile Hamburger Drawer Trigger */}
        <button
          onClick={() => setShowMenu(true)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-2xl bg-neutral-900/80 border border-white/10 text-white hover:border-purple-500/40 transition-all duration-300 backdrop-blur-md cursor-pointer"
          aria-label="Open navigation menu"
        >
          <FaBars className="text-base text-purple-300" />
        </button>
      </div>

      {/* Mobile Glassmorphic Slide-in Drawer */}
      <AnimatePresence>
        {showMenu && (
          <>
            {/* Dark Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setShowMenu(false)}
              className="md:hidden fixed inset-0 bg-black/70 backdrop-blur-md z-40"
            />

            {/* Slide Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 34 }}
              className="md:hidden fixed top-0 right-0 h-screen w-[82%] max-w-xs bg-[#08080a] border-l border-white/10 z-50 flex flex-col shadow-2xl overflow-hidden"
            >
              {/* Drawer Top Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-neutral-900/40 backdrop-blur-xl">
                <span className="text-base font-black tracking-wider text-white flex items-center gap-2">
                  <HiSparkles className="text-purple-400" /> Navigation
                </span>
                <button
                  onClick={() => setShowMenu(false)}
                  className="w-9 h-9 flex items-center justify-center rounded-xl bg-neutral-900 border border-white/10 text-neutral-300 hover:text-purple-400 hover:border-purple-500/40 transition-colors cursor-pointer"
                  aria-label="Close navigation menu"
                >
                  <FaXmark className="text-base" />
                </button>
              </div>

              {/* Navigation Links Area */}
              <div className="flex-1 overflow-y-auto py-5 px-4 space-y-1">
                {NAV_ITEMS.map(({ id, label, icon: Icon }, index) => {
                  const isActive = activeSection === id;

                  return (
                    <motion.button
                      key={id}
                      initial={{ opacity: 0, x: 25 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.04 }}
                      onClick={() => scrollToSection(id)}
                      className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-2xl text-left transition-all duration-300 cursor-pointer ${
                        isActive
                          ? 'bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-indigo-600/20 border border-purple-500/40 text-white shadow-lg shadow-purple-600/10'
                          : 'text-neutral-400 hover:bg-neutral-900/60 hover:text-white border border-transparent'
                      }`}
                    >
                      <span className={`w-9 h-9 flex items-center justify-center rounded-xl transition-all duration-300 ${
                        isActive 
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md' 
                          : 'bg-neutral-900 border border-neutral-800 text-neutral-400'
                      }`}>
                        <Icon size={15} />
                      </span>
                      <span className="font-medium text-sm">{label}</span>

                      {isActive && (
                        <span className="ml-auto w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 shadow-sm" />
                      )}
                    </motion.button>
                  );
                })}

                {/* Mobile Direct Resume Link */}
                <a
                  href={RESUME_PDF_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-6 w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white font-semibold text-sm shadow-xl shadow-purple-600/20"
                >
                  <span>Resume</span>
                  <FaExternalLinkAlt size={12} className="opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* Drawer Bottom Social Footer */}
              <div className="px-6 py-5 border-t border-white/10 bg-neutral-900/40 backdrop-blur-xl">
                <p className="text-[11px] font-mono text-neutral-500 mb-3 uppercase tracking-wider">Connect Online</p>
                <div className="flex gap-2.5">
                  <a href="https://github.com/Riju-hub/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-purple-400 hover:border-purple-500/40 transition-colors">
                    <FaGithub size={16}/>
                  </a>
                  <a href="https://www.linkedin.com/in/bhabasindhu-das-web" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-blue-400 hover:border-blue-500/40 transition-colors">
                    <FaLinkedin size={16}/>
                  </a>
                  <a href="https://x.com/BhabasindhuBhab" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-sky-400 hover:border-sky-500/40 transition-colors">
                    <FaTwitter size={16}/>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;