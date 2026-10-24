import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaFacebook, 
  FaInstagram, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaArrowUp, 
  FaArrowRight,
  FaHeart,
  FaShieldAlt
} from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi2';

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigateSection = (id) => {
    if (location.pathname === '/') {
      const el = document.getElementById(id);
      if (el) {
        const targetPosition = el.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      sessionStorage.setItem('pendingScrollTarget', id);
      navigate('/');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Education', id: 'education' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Contact', id: 'contact' },
  ];

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/Riju-hub/', label: 'GitHub', color: 'hover:border-purple-500/50 hover:text-purple-400 hover:bg-purple-500/10' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/bhabasindhu-das-web', label: 'LinkedIn', color: 'hover:border-cyan-500/50 hover:text-cyan-400 hover:bg-cyan-500/10' },
    { icon: FaTwitter, url: 'https://x.com/BhabasindhuBhab', label: 'Twitter', color: 'hover:border-sky-500/50 hover:text-sky-400 hover:bg-sky-500/10' },
    { icon: FaFacebook, url: 'https://www.facebook.com/profile.php?id=61577756120368', label: 'Facebook', color: 'hover:border-blue-600/50 hover:text-blue-500 hover:bg-blue-600/10' },
    { icon: FaInstagram, url: 'https://www.instagram.com/bhabasindhudas621/', label: 'Instagram', color: 'hover:border-pink-500/50 hover:text-pink-400 hover:bg-pink-500/10' },
  ];

  const techBadges = [
    'React', 
    'Node.js', 
    'Express.js', 
    'MongoDB', 
    'Python', 
    'FastAPI', 
    'PyTorch', 
    'Tailwind CSS'
  ];

  return (
    <footer className="relative bg-[#08080a] text-zinc-100 border-t border-white/10 pt-20 pb-10 overflow-hidden font-sans selection:bg-purple-500/20 selection:text-purple-300">
      
      {/* Zero-Paint Composited Radial Glow Mesh */}
      <div 
        className="absolute inset-0 overflow-hidden pointer-events-none -z-10 transform-gpu"
        aria-hidden="true"
      >
        <div 
          className="absolute -bottom-32 -left-32 w-80 sm:w-[500px] h-80 sm:h-[500px]" 
          style={{ background: 'radial-gradient(circle, rgba(147, 51, 234, 0.12) 0%, rgba(8, 8, 10, 0) 70%)' }} 
        />
        <div 
          className="absolute top-1/2 right-0 w-80 sm:w-[500px] h-80 sm:h-[500px]" 
          style={{ background: 'radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, rgba(8, 8, 10, 0) 70%)' }} 
        />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 max-w-7xl z-10">
        
        {/* Top Callout Action Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative mb-16 rounded-3xl p-[1.5px] bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-pink-500/30 shadow-2xl overflow-hidden group transform-gpu"
        >
          <div className="relative w-full h-full rounded-[22.5px] bg-[#0c0c0e] p-7 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
            
            {/* Top Border Specular Accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

            <div className="text-center md:text-left z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-purple-500/30 text-xs font-mono font-medium tracking-wider uppercase mb-3 shadow-inner">
                <HiSparkles className="text-purple-400 text-xs" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300">
                  Engineering Inquiries
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Have an architecture or engineering role to discuss?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-xl font-normal">
                Open for full-time engineering positions, client platforms, and high-impact machine learning projects.
              </p>
            </div>

            <button
              onClick={() => handleNavigateSection('contact')}
              className="z-10 shrink-0 inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 font-semibold text-white shadow-xl shadow-purple-600/25 text-xs sm:text-sm cursor-pointer group hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <span>Initiate Contact</span>
              <FaArrowRight size={11} className="group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </motion.div>

        {/* Main Footer Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-14 border-b border-zinc-800/80">
          
          {/* Brand & Mission Column (Cols 1-5) */}
          <div className="lg:col-span-5 space-y-5 text-center lg:text-left">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-2">
                BHABASINDHU <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">DAS</span>
              </h2>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-md mx-auto lg:mx-0 font-normal">
                Full-Stack Software Engineer &amp; Machine Learning Practitioner. Architecting reliable distributed systems, decoupled APIs, and intelligence pipelines.
              </p>
            </div>

            {/* Availability & Location Chips */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-300 font-mono">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Available For Hire
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-950 border border-zinc-800 text-xs text-zinc-300 font-mono">
                <FaMapMarkerAlt size={10} className="text-pink-400" />
                Kolkata, IN (UTC+5:30)
              </div>
            </div>

            {/* Core Tech Stack Badges */}
            <div className="pt-2">
              <span className="block text-[10px] font-mono uppercase tracking-wider text-zinc-500 mb-2">
                Specialized Arsenal
              </span>
              <div className="flex flex-wrap justify-center lg:justify-start gap-1.5">
                {techBadges.map((badge) => (
                  <span key={badge} className="px-2.5 py-1 rounded-lg bg-zinc-950 border border-zinc-800 text-[10px] sm:text-[11px] font-mono text-zinc-300">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Navigation Links (Cols 6-8) */}
          <div className="lg:col-span-3 text-center lg:text-left">
            <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 mb-4 font-semibold">
              Index Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 max-w-xs mx-auto lg:mx-0">
              {navLinks.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigateSection(item.id)}
                  className="text-zinc-400 hover:text-white transition-colors duration-150 text-xs sm:text-sm flex items-center justify-center lg:justify-start gap-1.5 group cursor-pointer py-0.5"
                >
                  <span className="text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-150 font-mono text-xs">▹</span>
                  <span>{item.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Connect & Communications Column (Cols 9-12) */}
          <div className="lg:col-span-4 text-center lg:text-left space-y-5">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 mb-3 font-semibold">
                Direct Channel
              </h4>
              <a 
                href="mailto:bhabasindhudas621@gmail.com" 
                className="inline-flex items-center gap-2.5 text-xs sm:text-sm text-zinc-200 hover:text-purple-300 transition-colors duration-150 font-medium break-all"
              >
                <div className="w-8 h-8 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center text-purple-400 shrink-0 shadow-inner">
                  <FaEnvelope size={12} />
                </div>
                <span>bhabasindhudas621@gmail.com</span>
              </a>
            </div>

            <div>
              <h4 className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 mb-2.5">
                Digital Presence
              </h4>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                {socialLinks.map(({ icon: Icon, url, label, color }) => (
                  <motion.a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={label}
                    aria-label={label}
                    whileHover={{ y: -2, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-9 h-9 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-400 transition-all duration-200 shadow-md ${color}`}
                  >
                    <Icon size={14} />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-950 border border-zinc-800 text-[11px] font-mono text-zinc-400">
              <FaShieldAlt className="text-purple-400 text-xs" />
              <span>Verified Developer Portfolio</span>
            </div>
          </div>

        </div>

        {/* Bottom Metadata & Scroll to Top Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} Bhabasindhu Das. Built for scale &amp; performance.
          </p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-zinc-400 text-[11px]">
              Engineered with <FaHeart className="text-pink-500 text-[10px]" /> React &amp; Tailwind
            </span>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-purple-500/40 text-zinc-400 hover:text-purple-300 transition-all duration-200 text-xs cursor-pointer shadow-md active:scale-95"
            >
              Top <FaArrowUp size={9} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}