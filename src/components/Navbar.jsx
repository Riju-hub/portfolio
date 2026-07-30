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
  FaFileDownload,
  FaExternalLinkAlt
} from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';

const NAV_ITEMS = [
  { id: 'home', label: 'Home', icon: FaHome },
  { id: 'about', label: 'About', icon: FaUser },
  { id: 'skills', label: 'Skills', icon: FaCode },
  { id: 'projects', label: 'Projects', icon: FaLaptopCode },
  { id: 'experience', label: 'Experience', icon: FaBriefcase },
  { id: 'education', label: 'Education', icon: FaGraduationCap },
  { id: 'contact', label: 'Contact', icon: FaEnvelope },
];

const RESUME_PDF_URL = "https://drive.google.com/file/d/14iFp4aClSt7EF9QP4XHkqMmlt7ARlGVn/view?usp=sharing";

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
    <nav className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-all duration-300 text-white ${
      scrolled ? 'bg-neutral-900/95 py-3 shadow-xl border-b border-neutral-800' : 'bg-neutral-900/70 py-5 border-b border-transparent'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Brand Logo */}
        <button onClick={() => scrollToSection('home')} className='flex items-center gap-1.5 text-xl sm:text-2xl font-black tracking-wider text-white'>
          BHABASINDHU <span className='text-purple-500'>DAS</span>
          <div className='w-2 h-2 bg-purple-500 rounded-full mt-1 animate-pulse' />
        </button>

        {/* Desktop Navigation Links */}
        <div className='hidden md:flex items-center gap-1 lg:gap-2 font-medium'>
          {NAV_ITEMS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`relative px-3.5 py-2 rounded-full capitalize transition-all duration-300 text-sm lg:text-base ${
                activeSection === id ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              {activeSection === id && (
                <motion.span
                  layoutId="active-nav-pill"
                  className='absolute inset-0 bg-gradient-to-r from-purple-600/80 to-pink-500/80 rounded-full -z-10'
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              <span className='relative z-10'>{label}</span>
            </button>
          ))}

          {/* Resume PDF External Link Button */}
          <a
            href={RESUME_PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group ml-2 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs lg:text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 border border-purple-400/30 shadow-md shadow-purple-600/20 hover:scale-105 transition-all duration-300"
          >
            {/* <FaFileDownload size={13} className="text-purple-200" /> */}
            <span>Resume</span>
            <FaExternalLinkAlt className="text-[10px] text-purple-200 opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setShowMenu(true)}
          className='md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-neutral-800/60 border border-neutral-700 text-white hover:border-purple-500/50 transition-colors'
          aria-label="Open menu"
        >
          <FaBars className='text-lg' />
        </button>
      </div>

      {/* Mobile Menu Backdrop + Slide-in Drawer */}
      <AnimatePresence>
        {showMenu && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setShowMenu(false)}
              className='md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40'
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 34 }}
              className='md:hidden fixed top-0 right-0 h-screen w-[78%] max-w-xs bg-neutral-950 border-l border-neutral-800 z-50 flex flex-col shadow-2xl'
            >
              {/* Drawer header */}
              <div className='flex items-center justify-between px-6 py-5 border-b border-neutral-800'>
                <span className='text-lg font-black tracking-wide text-white'>
                  Menu
                </span>
                <button
                  onClick={() => setShowMenu(false)}
                  className='w-9 h-9 flex items-center justify-center rounded-lg bg-neutral-800/60 border border-neutral-700 text-gray-300 hover:text-purple-400 hover:border-purple-500/50 transition-colors'
                  aria-label="Close menu"
                >
                  <FaXmark className='text-lg' />
                </button>
              </div>

              {/* Nav links */}
              <div className='flex-1 overflow-y-auto py-4 px-3'>
                {NAV_ITEMS.map(({ id, label, icon: Icon }, index) => (
                  <motion.button
                    key={id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    onClick={() => scrollToSection(id)}
                    className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-xl mb-1 text-left transition-all duration-200 ${
                      activeSection === id
                        ? 'bg-gradient-to-r from-purple-600/20 to-pink-500/20 border border-purple-500/30 text-white'
                        : 'text-gray-400 hover:bg-neutral-900 hover:text-white border border-transparent'
                    }`}
                  >
                    <span className={`w-9 h-9 flex items-center justify-center rounded-lg flex-shrink-0 ${
                      activeSection === id ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' : 'bg-neutral-800 text-gray-400'
                    }`}>
                      <Icon size={15} />
                    </span>
                    <span className='font-medium'>{label}</span>
                    {activeSection === id && (
                      <span className='ml-auto w-1.5 h-1.5 rounded-full bg-pink-400'></span>
                    )}
                  </motion.button>
                ))}

                {/* Direct Mobile Download Link */}
                <a
                  href={RESUME_PDF_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-4 w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-sm shadow-lg shadow-purple-600/20"
                >
                  {/* <FaFileDownload size={15} /> */}
                  <span>Resume</span>
                  <FaExternalLinkAlt size={11} className="opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* Footer: Social links */}
              <div className='px-6 py-5 border-t border-neutral-800'>
                <p className='text-xs text-gray-500 mb-3 uppercase tracking-wider'>Connect</p>
                <div className='flex gap-3'>
                  <a href="https://github.com/Riju-hub/" target="_blank" rel="noopener noreferrer" className='w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/50 transition-colors'>
                    <FaGithub size={16}/>
                  </a>
                  <a href="https://www.linkedin.com/in/bhabasindhu-das-web" target="_blank" rel="noopener noreferrer" className='w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500/50 transition-colors'>
                    <FaLinkedin size={16}/>
                  </a>
                  <a href="https://x.com/BhabasindhuBhab" target="_blank" rel="noopener noreferrer" className='w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-neutral-500 transition-colors'>
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