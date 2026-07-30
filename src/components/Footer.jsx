// // import React from 'react';
// // import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaArrowUp } from 'react-icons/fa';

// // function Footer() {
// //   const scrollToSection = (id) => {
// //     document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
// //   };

// //   const scrollToTop = () => {
// //     window.scrollTo({ top: 0, behavior: 'smooth' });
// //   };

// //   const navLinks = ['home', 'about', 'skills', 'projects', 'education', 'contact'];

// //   const socialLinks = [
// //     { icon: FaGithub, url: 'https://github.com/Riju-hub/', label: 'GitHub', hover: 'hover:bg-neutral-700' },
// //     { icon: FaLinkedin, url: 'https://www.linkedin.com/in/bhabasindhu-das-71b147370', label: 'LinkedIn', hover: 'hover:bg-blue-600' },
// //     { icon: FaTwitter, url: 'https://x.com/BhabasindhuBhab', label: 'Twitter', hover: 'hover:bg-neutral-900' },
// //     { icon: FaFacebook, url: 'https://www.facebook.com/profile.php?id=61577756120368', label: 'Facebook', hover: 'hover:bg-blue-700' },
// //     { icon: FaInstagram, url: 'https://www.instagram.com/bhabasindhudas621/', label: 'Instagram', hover: 'hover:bg-pink-600' },
// //   ];

// //   return (
// //     <footer className='relative bg-neutral-950 border-t border-neutral-800 pt-14 pb-8'>
      
// //       {/* Back to top button */}
// //       <button
// //         onClick={scrollToTop}
// //         aria-label="Back to top"
// //         className='absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center text-white shadow-lg shadow-purple-600/30 hover:scale-110 transition duration-300'
// //       >
// //         <FaArrowUp size={16} />
// //       </button>

// //       <div className='container mx-auto px-6'>
// //         <div className='grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left'>

// //           {/* Brand / About */}
// //           <div>
// //             <h3 className='text-2xl font-black text-white tracking-wide mb-3'>
// //               BHABASINDHU <span className='text-purple-500'>DAS</span>
// //             </h3>
// //             <p className='text-gray-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0'>
// //               Full Stack Developer & AI/ML Engineer, building scalable web apps and intelligent systems.
// //             </p>
// //           </div>

// //           {/* Quick Links */}
// //           <div>
// //             <h4 className='text-white font-semibold mb-4 uppercase tracking-wider text-sm'>Quick Links</h4>
// //             <ul className='flex flex-col gap-2 items-center md:items-start'>
// //               {navLinks.map((item) => (
// //                 <li key={item}>
// //                   <button
// //                     onClick={() => scrollToSection(item)}
// //                     className='text-gray-400 hover:text-purple-400 capitalize transition duration-300 text-sm'
// //                   >
// //                     {item}
// //                   </button>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>

// //           {/* Contact + Socials */}
// //           <div>
// //             <h4 className='text-white font-semibold mb-4 uppercase tracking-wider text-sm'>Get in Touch</h4>
// //             <div className='flex flex-col gap-2 items-center md:items-start text-gray-400 text-sm mb-5'>
// //               <a href="mailto:bhabasindhudas621@gmail.com" className='flex items-center gap-2 hover:text-purple-400 transition duration-300'>
// //                 <FaEnvelope size={14} /> bhabasindhudas621@gmail.com
// //               </a>
// //               <a href="https://maps.google.com/?q=India" target="_blank" rel="noopener noreferrer" className='flex items-center gap-2 hover:text-purple-400 transition duration-300'>
// //                 <FaMapMarkerAlt size={14} /> India
// //               </a>
// //             </div>

// //             <div className='flex flex-wrap justify-center md:justify-start gap-3'>
// //               {socialLinks.map(({ icon: Icon, url, label, hover }) => (
// //                 <a
// //                   key={label}
// //                   href={url}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   title={label}
// //                   className={`w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-gray-400 hover:text-white ${hover} transition duration-300 border border-neutral-700`}
// //                 >
// //                   <Icon size={16} />
// //                 </a>
// //               ))}
// //             </div>
// //           </div>

// //         </div>

// //         {/* Divider */}
// //         <div className='border-t border-neutral-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3'>
// //           <p className='text-gray-500 text-sm text-center sm:text-left'>
// //             &copy; {new Date().getFullYear()} Bhabasindhu Das. All rights reserved.
// //           </p>
// //           <p className='text-gray-600 text-xs'>
// //             Built with React & Tailwind CSS
// //           </p>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // }

// // export default Footer;

// import React from 'react';
// import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaArrowUp } from 'react-icons/fa';

// function Footer() {
//   const scrollToSection = (id) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
//   };

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   // Added 'experience' to navLinks
//   const navLinks = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];

//   const socialLinks = [
//     { icon: FaGithub, url: 'https://github.com/Riju-hub/', label: 'GitHub', hover: 'hover:border-purple-500 hover:text-purple-400' },
//     { icon: FaLinkedin, url: 'https://www.linkedin.com/in/bhabasindhu-das-web', label: 'LinkedIn', hover: 'hover:border-blue-500 hover:text-blue-400' },
//     { icon: FaTwitter, url: 'https://x.com/BhabasindhuBhab', label: 'Twitter', hover: 'hover:border-sky-500 hover:text-sky-400' },
//     { icon: FaFacebook, url: 'https://www.facebook.com/profile.php?id=61577756120368', label: 'Facebook', hover: 'hover:border-blue-600 hover:text-blue-500' },
//     { icon: FaInstagram, url: 'https://www.instagram.com/bhabasindhudas621/', label: 'Instagram', hover: 'hover:border-pink-500 hover:text-pink-400' },
//   ];

//   return (
//     <footer className='relative bg-[#0a0a0c] text-white border-t border-neutral-800/80 pt-16 pb-8 overflow-hidden'>
//       {/* Background Ambient Glows & Grid (Matching Portfolio Theme) */}
//       <div className='absolute inset-0 overflow-hidden pointer-events-none'>
//         <div className='absolute -bottom-20 -left-20 w-80 h-80 bg-purple-600/15 rounded-full blur-[128px]' />
//         <div className='absolute top-0 right-1/4 w-80 h-80 bg-pink-600/10 rounded-full blur-[128px]' />
//         <div className='absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]' />
//       </div>

//       {/* Floating Back-To-Top Button */}
//       <button
//         onClick={scrollToTop}
//         aria-label="Back to top"
//         className='absolute -top-5 left-1/2 -translate-x-1/2 w-11 h-11 rounded-xl bg-neutral-900/90 border border-purple-500/30 backdrop-blur-md flex items-center justify-center text-purple-300 hover:text-white shadow-xl shadow-purple-950/50 hover:scale-110 active:scale-95 transition-all duration-300 z-20 cursor-pointer group'
//       >
//         <FaArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
//       </button>

//       <div className='relative container mx-auto px-6 max-w-7xl z-10'>
//         <div className='grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 text-center md:text-left'>

//           {/* Brand & Short Bio */}
//           <div>
//             <h3 className='text-2xl font-black text-white tracking-tight mb-3'>
//               BHABASINDHU <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-300'>DAS</span>
//             </h3>
//             <p className='text-neutral-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0'>
//               Full Stack Developer & AI/ML Engineer building scalable web applications and intelligent systems.
//             </p>
//           </div>

//           {/* Quick Links Navigation */}
//           <div>
//             <h4 className='text-xs font-mono uppercase tracking-wider text-purple-400 mb-4'>Quick Links</h4>
//             <ul className='grid grid-cols-2 gap-2 max-w-xs mx-auto md:mx-0'>
//               {navLinks.map((item) => (
//                 <li key={item}>
//                   <button
//                     onClick={() => scrollToSection(item)}
//                     className='text-neutral-400 hover:text-purple-300 capitalize transition duration-200 text-sm flex items-center gap-1.5 mx-auto md:mx-0 group cursor-pointer'
//                   >
//                     <span className="text-purple-500/0 group-hover:text-purple-400 transition-all font-mono text-xs">▹</span>
//                     {item}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Details & Social Channels */}
//           <div>
//             <h4 className='text-xs font-mono uppercase tracking-wider text-purple-400 mb-4'>Get in Touch</h4>
            
//             <div className='flex flex-col gap-2.5 items-center md:items-start text-neutral-400 text-sm mb-6'>
//               <a href="mailto:bhabasindhudas621@gmail.com" className='flex items-center gap-2 hover:text-purple-300 transition-colors duration-200'>
//                 <FaEnvelope size={13} className="text-purple-400" />
//                 <span className="break-all">bhabasindhudas621@gmail.com</span>
//               </a>
//               <a href="https://maps.google.com/?q=Kolkata,India" target="_blank" rel="noopener noreferrer" className='flex items-center gap-2 hover:text-purple-300 transition-colors duration-200'>
//                 <FaMapMarkerAlt size={13} className="text-pink-400" />
//                 <span>Kolkata, India</span>
//               </a>
//             </div>

//             <div className='flex flex-wrap justify-center md:justify-start gap-3'>
//               {socialLinks.map(({ icon: Icon, url, label, hover }) => (
//                 <a
//                   key={label}
//                   href={url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   title={label}
//                   aria-label={label}
//                   className={`w-9 h-9 rounded-xl bg-neutral-900/90 backdrop-blur-md border border-neutral-800/80 flex items-center justify-center text-neutral-400 hover:scale-110 transition-all duration-300 shadow-sm ${hover}`}
//                 >
//                   <Icon size={15} />
//                 </a>
//               ))}
//             </div>
//           </div>

//         </div>

//         {/* Bottom Bar */}
//         <div className='border-t border-neutral-800/80 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500 font-mono'>
//           <p className='text-center sm:text-left'>
//             &copy; {new Date().getFullYear()} Bhabasindhu Das. All rights reserved.
//           </p>
//           <p className='text-neutral-500'>
//             Built with React & Tailwind CSS
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

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
    { icon: FaGithub, url: 'https://github.com/Riju-hub/', label: 'GitHub', color: 'hover:border-purple-500 hover:text-purple-400 hover:bg-purple-950/30' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/bhabasindhu-das-web', label: 'LinkedIn', color: 'hover:border-blue-500 hover:text-blue-400 hover:bg-blue-950/30' },
    { icon: FaTwitter, url: 'https://x.com/BhabasindhuBhab', label: 'Twitter', color: 'hover:border-sky-500 hover:text-sky-400 hover:bg-sky-950/30' },
    { icon: FaFacebook, url: 'https://www.facebook.com/profile.php?id=61577756120368', label: 'Facebook', color: 'hover:border-blue-600 hover:text-blue-500 hover:bg-blue-950/30' },
    { icon: FaInstagram, url: 'https://www.instagram.com/bhabasindhudas621/', label: 'Instagram', color: 'hover:border-pink-500 hover:text-pink-400 hover:bg-pink-950/30' },
  ];

  const techBadges = ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Python', 'Framer Motion'];

  return (
    <footer className="relative bg-[#0a0a0c] text-white border-t border-neutral-800/80 pt-20 pb-10 overflow-hidden">
      
      {/* Background Ambient Glows & Grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-purple-600/20 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-pink-600/15 rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative container mx-auto px-6 max-w-7xl z-10">
        
        {/* Top Feature Banner / Big Contact Banner */}
        <div className="relative mb-16 p-8 sm:p-10 rounded-3xl bg-neutral-900/60 border border-neutral-800/90 backdrop-blur-md overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="absolute -top-12 -left-12 w-32 h-32 bg-purple-600/20 rounded-full blur-2xl pointer-events-none" />
          
          <div className="text-center md:text-left z-10">
            <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-purple-400 mb-2">
              <HiSparkles className="text-pink-400" /> Let's build something extraordinary
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Have a project or collaboration in mind?
            </h3>
          </div>

          <button
            onClick={() => scrollToSection('contact')}
            className="z-10 shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 font-semibold text-white shadow-lg shadow-purple-600/20 hover:scale-[1.02] active:scale-[0.98] transition-all text-sm cursor-pointer group"
          >
            Start a Conversation
            <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Main Footer Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-neutral-800/80">
          
          {/* Brand Column (Col 1-5) */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <div>
              <h2 className="text-3xl font-black tracking-tight text-white mb-2">
                BHABASINDHU <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-300">DAS</span>
              </h2>
              <p className="text-neutral-400 text-sm leading-relaxed max-w-md mx-auto lg:mx-0">
                Full Stack Web Developer & AI/ML Engineer specializing in scalable React ecosystem applications, backend microservices, and machine learning models.
              </p>
            </div>

            {/* Status & Location Pill */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-xs text-emerald-300 font-mono">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Open to Opportunities
              </div>

              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 font-mono">
                <FaMapMarkerAlt size={11} className="text-pink-400" />
                Kolkata, India
              </div>
            </div>

            {/* Tech Badges Row */}
            <div className="pt-2">
              <span className="block text-xs font-mono uppercase text-neutral-500 mb-2">Core Stack</span>
              <div className="flex flex-wrap justify-center lg:justify-start gap-1.5">
                {techBadges.map((badge) => (
                  <span key={badge} className="px-2.5 py-1 rounded-md bg-neutral-900/90 border border-neutral-800 text-[11px] font-mono text-neutral-400">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Links Column (Col 6-8) */}
          <div className="lg:col-span-3 text-center lg:text-left">
            <h4 className="text-xs font-mono uppercase tracking-widest text-purple-400 mb-5">
              Navigation
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
              <h4 className="text-xs font-mono uppercase tracking-widest text-purple-400 mb-4">
                Connect Directly
              </h4>
              <a 
                href="mailto:bhabasindhudas621@gmail.com" 
                className="inline-flex items-center gap-2.5 text-sm text-neutral-200 hover:text-purple-300 transition-colors font-medium break-all"
              >
                <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-purple-400 shrink-0">
                  <FaEnvelope size={13} />
                </div>
                <span>bhabasindhudas621@gmail.com</span>
              </a>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-3">
                Social Networks
              </h4>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2.5">
                {socialLinks.map(({ icon: Icon, url, label, color }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={label}
                    aria-label={label}
                    className={`w-10 h-10 rounded-xl bg-neutral-900/90 border border-neutral-800 flex items-center justify-center text-neutral-400 transition-all duration-300 shadow-sm ${color}`}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Floating Scroll Button */}
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
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-purple-500/50 text-neutral-400 hover:text-purple-300 transition-all text-xs cursor-pointer"
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

