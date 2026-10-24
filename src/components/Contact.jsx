import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaEnvelope, 
  FaGithub, 
  FaLinkedin, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaTwitter, 
  FaFacebook, 
  FaInstagram, 
  FaPaperPlane, 
  FaCheckCircle, 
  FaExclamationCircle,
  FaUser,
  FaTag,
  FaCommentDots,
  FaCopy,
  FaCheck,
  FaInfoCircle
} from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi2';
import emailjs from '@emailjs/browser';

// Framer Motion Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } 
  }
};

export default function Contact() {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });
  const [copied, setCopied] = useState(false);
  const [emailInput, setEmailInput] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage({ type: '', text: '' });

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const AUTOREPLY_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Call 1: Admin Notification
    const sendAdminEmail = emailjs.sendForm(
      SERVICE_ID,
      TEMPLATE_ID,
      formRef.current,
      PUBLIC_KEY
    );

    // Call 2: Visitor Auto-Reply
    const sendAutoReply = emailjs.sendForm(
      SERVICE_ID,
      AUTOREPLY_TEMPLATE_ID,
      formRef.current,
      PUBLIC_KEY
    );

    Promise.all([sendAdminEmail, sendAutoReply])
      .then(() => {
        setStatusMessage({
          type: 'success',
          text: 'Message dispatched! A confirmation email has been routed to your inbox.',
        });
        formRef.current.reset();
        setEmailInput('');
      })
      .catch((error) => {
        setStatusMessage({
          type: 'error',
          text: 'Transmission failed. Please retry or contact directly via email.',
        });
        console.error('EmailJS Error:', error);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  const handleCopyEmail = (email) => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactDetails = [
    { 
      icon: FaMapMarkerAlt, 
      label: 'Operational Base', 
      value: 'Kolkata, India', 
      href: 'https://maps.google.com/?q=Kolkata',
      badge: 'UTC+5:30 (IST)'
    },
    { 
      icon: FaEnvelope, 
      label: 'Direct Email', 
      value: 'bhabasindhudas621@gmail.com', 
      isEmail: true,
      href: 'mailto:bhabasindhudas621@gmail.com'
    },
    { 
      icon: FaPhone, 
      label: 'Direct Phone', 
      value: '+91 9641486257', 
      href: 'tel:+919641486257',
      badge: 'Inquiries Open'
    },
  ];

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/Riju-hub/', label: 'GitHub', color: 'hover:text-purple-300 hover:border-purple-500/50 hover:bg-purple-500/10' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/bhabasindhu-das-web', label: 'LinkedIn', color: 'hover:text-cyan-300 hover:border-cyan-500/50 hover:bg-cyan-500/10' },
    { icon: FaTwitter, url: 'https://x.com/BhabasindhuBhab', label: 'Twitter', color: 'hover:text-sky-300 hover:border-sky-500/50 hover:bg-sky-500/10' },
    { icon: FaFacebook, url: 'https://www.facebook.com/profile.php?id=61577756120368', label: 'Facebook', color: 'hover:text-blue-300 hover:border-blue-500/50 hover:bg-blue-500/10' },
    { icon: FaInstagram, url: 'https://www.instagram.com/bhabasindhudas621/', label: 'Instagram', color: 'hover:text-pink-300 hover:border-pink-500/50 hover:bg-pink-500/10' },
  ];

  return ( 
    <section 
      id="contact" 
      className="relative py-20 sm:py-28 md:py-36 bg-[#08080a] text-zinc-100 overflow-hidden font-sans selection:bg-purple-500/20 selection:text-purple-300"
    >
      {/* Zero-Paint Composited Glow Mesh */}
      <div 
        className="absolute inset-0 overflow-hidden pointer-events-none -z-10 transform-gpu" 
        aria-hidden="true"
      >
        <div 
          className="absolute -top-32 -left-32 w-80 sm:w-[500px] h-80 sm:h-[500px]"
          style={{ background: 'radial-gradient(circle, rgba(147, 51, 234, 0.14) 0%, rgba(8, 8, 10, 0) 70%)' }} 
        />
        <div 
          className="absolute top-1/2 -right-32 w-80 sm:w-[500px] h-80 sm:h-[500px]" 
          style={{ background: 'radial-gradient(circle, rgba(236, 72, 153, 0.12) 0%, rgba(8, 8, 10, 0) 70%)' }} 
        />
        <div 
          className="absolute -bottom-32 left-1/3 w-80 sm:w-[500px] h-80 sm:h-[500px]" 
          style={{ background: 'radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, rgba(8, 8, 10, 0) 70%)' }} 
        />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 max-w-6xl z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12 sm:mb-16 md:mb-20 px-2"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-purple-500/30 text-purple-300 text-xs font-mono mb-4 tracking-wide shadow-lg">
            <HiSparkles className="text-purple-400 text-xs" />
            <span className="font-semibold uppercase tracking-wider">Start A Conversation</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black mb-4 tracking-tight text-white">
            Get In <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">Touch</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed font-normal">
            Whether you have an upcoming project, a full-time engineering opportunity, or technical queries, send a message below.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Main Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-7 relative group rounded-3xl p-[1.5px] bg-gradient-to-b from-white/10 via-white/5 to-transparent hover:from-purple-500/40 hover:via-pink-500/25 hover:to-transparent transition-all duration-500 shadow-2xl"
          >
            <div className="relative w-full h-full rounded-[23px] bg-[#0c0c0e] p-6 sm:p-9 overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent pointer-events-none" />

              <form ref={formRef} onSubmit={sendEmail} className="space-y-5 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-wider text-zinc-300">
                      <FaUser className="text-purple-400 text-[10px]" /> Name
                    </label>
                    <input 
                      id="name"
                      name="name"
                      type="text" 
                      placeholder="Alex Mercer"
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none focus:border-purple-500/80 focus:ring-1 focus:ring-purple-500/40 transition-all duration-200"
                      required
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-wider text-zinc-300">
                      <FaEnvelope className="text-purple-400 text-[10px]" /> Email
                    </label>
                    <input 
                      id="email"
                      name="email"
                      type="email" 
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      placeholder="alex@domain.com"
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none focus:border-purple-500/80 focus:ring-1 focus:ring-purple-500/40 transition-all duration-200"
                      required
                    />

                    {/* Email Verification Alert */}
                    <AnimatePresence>
                      {emailInput.trim().length > 0 && (
                        <motion.div
                          initial={{ opacity: 0, y: -4, height: 0 }}
                          animate={{ opacity: 1, y: 0, height: 'auto' }}
                          exit={{ opacity: 0, y: -4, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="flex items-start gap-1.5 pt-1 text-[11px] font-mono text-amber-400/90 leading-tight"
                        >
                          <FaInfoCircle className="text-xs flex-shrink-0 mt-0.5 text-amber-400" />
                          <span>Ensure email is reachable to receive your automated receipt.</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-wider text-zinc-300">
                    <FaTag className="text-purple-400 text-[10px]" /> Subject
                  </label>
                  <input 
                    id="subject"
                    name="subject"
                    type="text" 
                    placeholder="Project Inquiry / Engineering Role"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none focus:border-purple-500/80 focus:ring-1 focus:ring-purple-500/40 transition-all duration-200"
                    required
                  />
                </div>

                {/* Message Input */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-wider text-zinc-300">
                    <FaCommentDots className="text-purple-400 text-[10px]" /> Message
                  </label>
                  <textarea 
                    id="message"
                    name="message"
                    placeholder="Provide details about your project, timeline, or position requirements..."
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none focus:border-purple-500/80 focus:ring-1 focus:ring-purple-500/40 transition-all duration-200 h-32 resize-none"
                    required
                  />
                </div>

                {/* Feedback Notification Banner */}
                <AnimatePresence>
                  {statusMessage.text && (
                    <motion.div
                      initial={{ opacity: 0, y: -6, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: 'auto' }}
                      exit={{ opacity: 0, y: -6, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className={`flex items-center gap-3 p-3.5 rounded-xl text-xs font-mono border ${
                        statusMessage.type === 'success' 
                          ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30' 
                          : 'bg-rose-500/10 text-rose-300 border-rose-500/30'
                      }`}
                    >
                      {statusMessage.type === 'success' ? (
                        <FaCheckCircle className="text-emerald-400 text-sm flex-shrink-0" />
                      ) : (
                        <FaExclamationCircle className="text-rose-400 text-sm flex-shrink-0" />
                      )}
                      <span>{statusMessage.text}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Action Submit Button */}
                <motion.button 
                  whileHover={{ scale: isSending ? 1 : 1.01 }}
                  whileTap={{ scale: isSending ? 1 : 0.98 }}
                  type="submit" 
                  disabled={isSending}
                  className={`w-full relative group overflow-hidden py-3.5 px-6 rounded-xl font-semibold text-sm text-white shadow-xl transition-all duration-200 ${
                    isSending 
                      ? 'bg-zinc-800 cursor-not-allowed text-zinc-400' 
                      : 'bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 hover:shadow-purple-500/25 cursor-pointer'
                  }`}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSending ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Routing Message...</span>
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="text-xs transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5 duration-200" />
                        <span>Send Message</span>
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Right Column: Contact Details, Socials & SLA Indicator */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-5 space-y-5"
          >
            {/* Contact Items List */}
            <div className="space-y-3">
              {contactDetails.map(({ icon: Icon, label, value, href, isEmail, badge }) => (
                <motion.div
                  key={label}
                  variants={itemVariants}
                  whileHover={{ y: -3 }}
                  className="group relative bg-zinc-900/90 rounded-2xl p-4 sm:p-5 border border-zinc-800/80 hover:border-purple-500/40 transition-all duration-200 shadow-xl flex items-center justify-between"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-purple-400 group-hover:text-pink-300 transition-colors flex-shrink-0 shadow-inner">
                      <Icon className="text-base" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block mb-0.5">{label}</span>
                      <a 
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-xs sm:text-sm font-semibold text-zinc-200 hover:text-white transition-colors truncate block"
                      >
                        {value}
                      </a>
                    </div>
                  </div>

                  {isEmail && (
                    <button
                      type="button"
                      onClick={() => handleCopyEmail(value)}
                      title="Copy Email"
                      className="p-2 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors cursor-pointer ml-2 flex-shrink-0"
                    >
                      {copied ? <FaCheck className="text-emerald-400 text-xs" /> : <FaCopy className="text-xs" />}
                    </button>
                  )}

                  {badge && (
                    <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-zinc-950 text-zinc-400 border border-zinc-800 shrink-0 ml-2">
                      {badge}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links Network Card */}
            <motion.div 
              variants={itemVariants} 
              className="bg-zinc-900/90 rounded-2xl p-5 border border-zinc-800/80 shadow-xl"
            >
              <h3 className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 mb-3.5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-400" /> Digital Networks
              </h3>
              
              <div className="grid grid-cols-5 gap-2.5">
                {socialLinks.map(({ icon: Icon, url, label, color }) => (
                  <motion.a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={label}
                    whileHover={{ y: -3, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`aspect-square rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-400 transition-all duration-200 shadow-inner ${color}`}
                  >
                    <Icon className="text-base" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* SLA / Availability Card */}
            <motion.div 
              variants={itemVariants}
              className="p-4 rounded-2xl bg-zinc-900/60 border border-purple-500/20 shadow-lg flex items-center gap-3"
            >
              <div className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </div>
              <p className="text-[11px] font-mono text-zinc-300/90 leading-relaxed">
                <strong className="text-white font-semibold">Response SLA:</strong> Inquiries are answered within 24 hours. Automated receipt dispatch confirms receipt instantly.
              </p>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}