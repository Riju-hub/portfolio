
import React from 'react';
import { motion } from 'framer-motion';
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
  FaHeart
} from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi2';

function Footer() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
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
    { name: 'Contact', id: 'contact' },
  ];

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/Riju-hub/', label: 'GitHub', color: 'hover:border-purple-500/50 hover:text-purple-400 hover:bg-purple-500/10' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/bhabasindhu-das-web', label: 'LinkedIn', color: 'hover:border-blue-500/50 hover:text-blue-400 hover:bg-blue-500/10' },
    { icon: FaTwitter, url: 'https://x.com/BhabasindhuBhab', label: 'Twitter', color: 'hover:border-sky-500/50 hover:text-sky-400 hover:bg-sky-500/10' },
    { icon: FaFacebook, url: 'https://www.facebook.com/profile.php?id=61577756120368', label: 'Facebook', color: 'hover:border-blue-600/50 hover:text-blue-500 hover:bg-blue-600/10' },
    { icon: FaInstagram, url: 'https://www.instagram.com/bhabasindhudas621/', label: 'Instagram', color: 'hover:border-pink-500/50 hover:text-pink-400 hover:bg-pink-500/10' },
  ];

  const techBadges = ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Python', 'Framer Motion'];

  return (
    <footer className="relative bg-[#08080a] text-white border-t border-white/10 pt-20 pb-10 overflow-hidden font-sans selection:bg-purple-500/30">
      
      {/* Background Ambient Glow Mesh */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[160px]" />
      </div>

      <div className="relative container mx-auto px-6 max-w-7xl z-10">
        
        {/* Top Feature Glassmorphic Callout Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative mb-16 p-8 sm:p-10 rounded-3xl bg-neutral-900/60 border border-white/10 backdrop-blur-xl overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl group"
        >
          {/* Top Border Glow Accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
          <div className="absolute -top-12 -left-12 w-32 h-32 bg-purple-600/20 rounded-full blur-2xl pointer-events-none" />
          
          <div className="text-center md:text-left z-10">
            {/* Animated Glowing Radar Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-neutral-950/80 border border-purple-500/30 text-xs font-mono font-medium tracking-wider uppercase mb-3 shadow-inner">
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
                Let's build something extraordinary
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Have a project or collaboration in mind?
            </h3>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToSection('contact')}
            className="z-10 shrink-0 inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 font-semibold text-white shadow-xl shadow-purple-600/25 text-sm cursor-pointer group"
          >
            <span>Start a Conversation</span>
            <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </motion.div>

        {/* Main Footer Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-neutral-800/80">
          
          {/* Brand Column (Col 1-5) */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <div>
              <h2 className="text-3xl font-black tracking-tight text-white mb-2">
                BHABASINDHU <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-300">DAS</span>
              </h2>
              <p className="text-neutral-400 text-sm leading-relaxed max-w-md mx-auto lg:mx-0 font-normal">
                Full Stack Web Developer & AI/ML Engineer specializing in scalable React ecosystem applications, backend microservices, and machine learning models.
              </p>
            </div>

            {/* Status & Location Pill */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-300 font-mono">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Open to Opportunities
              </div>

              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-neutral-950 border border-neutral-800 text-xs text-neutral-300 font-mono">
                <FaMapMarkerAlt size={11} className="text-pink-400" />
                Kolkata, India
              </div>
            </div>

            {/* Tech Badges Row */}
            <div className="pt-2">
              <span className="block text-xs font-mono uppercase tracking-wider text-neutral-500 mb-2">Core Tech Stack</span>
              <div className="flex flex-wrap justify-center lg:justify-start gap-1.5">
                {techBadges.map((badge) => (
                  <span key={badge} className="px-2.5 py-1 rounded-lg bg-neutral-950 border border-neutral-800 text-[11px] font-mono text-purple-300/80">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Links Column (Col 6-8) */}
          <div className="lg:col-span-3 text-center lg:text-left">
            <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 mb-5">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2.5 max-w-xs mx-auto lg:mx-0">
              {navLinks.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-neutral-400 hover:text-white transition-colors duration-200 text-sm flex items-center justify-center lg:justify-start gap-1.5 group cursor-pointer"
                >
                  <span className="text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity font-mono text-xs">▹</span>
                  <span>{item.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Socials & Direct Contact Column (Col 9-12) */}
          <div className="lg:col-span-4 text-center lg:text-left space-y-6">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 mb-4">
                Connect Directly
              </h4>
              <a 
                href="mailto:bhabasindhudas621@gmail.com" 
                className="inline-flex items-center gap-2.5 text-sm text-neutral-200 hover:text-purple-300 transition-colors font-medium break-all"
              >
                <div className="w-9 h-8 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center text-purple-400 shrink-0">
                  <FaEnvelope size={13} />
                </div>
                <span>bhabasindhudas621@gmail.com</span>
              </a>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-3">
                Social Networks
              </h4>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2.5">
                {socialLinks.map(({ icon: Icon, url, label, color }) => (
                  <motion.a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={label}
                    aria-label={label}
                    whileHover={{ y: -3, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center text-neutral-400 transition-all duration-300 shadow-md ${color}`}
                  >
                    <Icon size={16} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Scroll to Top Button */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} Bhabasindhu Das. Crafted with precision.
          </p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-neutral-400">
              Built with <FaHeart className="text-pink-500 text-[10px]" /> React & Tailwind
            </span>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-purple-500/40 text-neutral-400 hover:text-purple-300 transition-all duration-200 text-xs cursor-pointer shadow-md"
            >
              Top <FaArrowUp size={10} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;