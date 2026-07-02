import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaArrowUp } from 'react-icons/fa';

function Footer() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = ['home', 'about', 'skills', 'projects', 'education', 'contact'];

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/Riju-hub/', label: 'GitHub', hover: 'hover:bg-neutral-700' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/bhabasindhu-das-71b147370', label: 'LinkedIn', hover: 'hover:bg-blue-600' },
    { icon: FaTwitter, url: 'https://x.com/BhabasindhuBhab', label: 'Twitter', hover: 'hover:bg-neutral-900' },
    { icon: FaFacebook, url: 'https://www.facebook.com/profile.php?id=61577756120368', label: 'Facebook', hover: 'hover:bg-blue-700' },
    { icon: FaInstagram, url: 'https://www.instagram.com/bhabasindhudas621/', label: 'Instagram', hover: 'hover:bg-pink-600' },
  ];

  return (
    <footer className='relative bg-neutral-950 border-t border-neutral-800 pt-14 pb-8'>
      
      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className='absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center text-white shadow-lg shadow-purple-600/30 hover:scale-110 transition duration-300'
      >
        <FaArrowUp size={16} />
      </button>

      <div className='container mx-auto px-6'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left'>

          {/* Brand / About */}
          <div>
            <h3 className='text-2xl font-black text-white tracking-wide mb-3'>
              BHABASINDHU <span className='text-purple-500'>DAS</span>
            </h3>
            <p className='text-gray-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0'>
              Full Stack Developer & AI/ML Engineer, building scalable web apps and intelligent systems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='text-white font-semibold mb-4 uppercase tracking-wider text-sm'>Quick Links</h4>
            <ul className='flex flex-col gap-2 items-center md:items-start'>
              {navLinks.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className='text-gray-400 hover:text-purple-400 capitalize transition duration-300 text-sm'
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Socials */}
          <div>
            <h4 className='text-white font-semibold mb-4 uppercase tracking-wider text-sm'>Get in Touch</h4>
            <div className='flex flex-col gap-2 items-center md:items-start text-gray-400 text-sm mb-5'>
              <a href="mailto:your.email@example.com" className='flex items-center gap-2 hover:text-purple-400 transition duration-300'>
                <FaEnvelope size={14} /> your.email@example.com
              </a>
              <span className='flex items-center gap-2'>
                <FaMapMarkerAlt size={14} /> India
              </span>
            </div>

            <div className='flex flex-wrap justify-center md:justify-start gap-3'>
              {socialLinks.map(({ icon: Icon, url, label, hover }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  className={`w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-gray-400 hover:text-white ${hover} transition duration-300 border border-neutral-700`}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className='border-t border-neutral-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3'>
          <p className='text-gray-500 text-sm text-center sm:text-left'>
            &copy; {new Date().getFullYear()} Bhabasindhu Das. All rights reserved.
          </p>
          <p className='text-gray-600 text-xs'>
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;