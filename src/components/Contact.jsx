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
import emailjs from '@emailjs/browser';

function Contact() {
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
          text: 'Message & confirmation sent successfully!',
        });
        formRef.current.reset();
        setEmailInput('');
      })
      .catch((error) => {
        setStatusMessage({
          type: 'error',
          text: 'Failed to send message. Please try again.',
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
      label: 'Location', 
      value: 'Kolkata, India', 
      href: 'https://maps.google.com',
      badge: 'IST (UTC+5:30)'
    },
    { 
      icon: FaEnvelope, 
      label: 'Email', 
      value: 'bhabasindhudas621@gmail.com', 
      isEmail: true,
      href: 'mailto:bhabasindhudas621@gmail.com'
    },
    { 
      icon: FaPhone, 
      label: 'Phone', 
      value: '+91 9641486257', 
      href: 'tel:+919641486257',
      badge: 'Available'
    },
  ];

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/Riju-hub/', label: 'GitHub', color: 'hover:text-purple-400 hover:border-purple-500/50 hover:bg-purple-500/10' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/bhabasindhu-das-web', label: 'LinkedIn', color: 'hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-500/10' },
    { icon: FaTwitter, url: 'https://x.com/BhabasindhuBhab', label: 'Twitter', color: 'hover:text-sky-400 hover:border-sky-500/50 hover:bg-sky-500/10' },
    { icon: FaFacebook, url: 'https://www.facebook.com/profile.php?id=61577756120368', label: 'Facebook', color: 'hover:text-blue-500 hover:border-blue-600/50 hover:bg-blue-600/10' },
    { icon: FaInstagram, url: 'https://www.instagram.com/bhabasindhudas621/', label: 'Instagram', color: 'hover:text-pink-400 hover:border-pink-500/50 hover:bg-pink-500/10' },
  ];

  return ( 
    <section id="contact" className="relative py-24 md:py-32 bg-[#08080a] text-white overflow-hidden">
      
      {/* GPU-Optimized Ambient Glows (Radial Gradients instead of heavy CSS blur filters) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none transform-gpu">
        <div 
          className="absolute -top-32 -left-32 w-96 h-96"
          style={{ background: 'radial-gradient(circle, rgba(147, 51, 234, 0.18) 0%, rgba(0, 0, 0, 0) 70%)' }} 
        />
        <div 
          className="absolute top-1/3 -right-32 w-96 h-96" 
          style={{ background: 'radial-gradient(circle, rgba(236, 72, 153, 0.12) 0%, rgba(0, 0, 0, 0) 70%)' }} 
        />
        <div 
          className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[32rem] h-[32rem]" 
          style={{ background: 'radial-gradient(circle, rgba(79, 70, 229, 0.12) 0%, rgba(0, 0, 0, 0) 70%)' }} 
        />
      </div>

      <div className="relative container mx-auto px-6 max-w-6xl z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-neutral-900/90 border border-purple-500/30 text-xs font-mono font-medium tracking-wider uppercase mb-5 shadow-lg">
            <div className="relative flex items-center justify-center w-2.5 h-2.5">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 shadow-sm" />
            </div>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-200">
              Let's Connect
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-5 tracking-tight text-white">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-300">Touch</span>
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto text-base sm:text-lg leading-relaxed font-normal">
            Have an exciting project, a job opportunity, or just want to discuss tech? Drop a message below!
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-7 bg-neutral-900/80 p-7 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden group transform-gpu"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

            <form ref={formRef} onSubmit={sendEmail} className="space-y-6 relative z-10">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Name Input */}
                <div className="space-y-2">
                  <label htmlFor="name" className="flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-wider text-neutral-300">
                    <FaUser className="text-purple-400 text-[11px]" /> Your Name
                  </label>
                  <div className="relative">
                    <input 
                      id="name"
                      name="name"
                      type="text" 
                      placeholder="Alex Mercer"
                      className="w-full bg-neutral-950/90 border border-neutral-800 rounded-2xl px-4 py-3.5 text-sm text-white placeholder-neutral-500 outline-none focus:border-purple-500/80 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
                      required
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label htmlFor="email" className="flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-wider text-neutral-300">
                    <FaEnvelope className="text-purple-400 text-[11px]" /> Email Address
                  </label>
                  <div className="relative">
                    <input 
                      id="email"
                      name="email"
                      type="email" 
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      placeholder="alex@example.com"
                      className="w-full bg-neutral-950/90 border border-neutral-800 rounded-2xl px-4 py-3.5 text-sm text-white placeholder-neutral-500 outline-none focus:border-purple-500/80 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
                      required
                    />
                  </div>

                  {/* Live Email Accuracy Reminder */}
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
                        <span>Please verify this email. If unreachable, I won't be able to reply and your automated confirmation won't arrive.</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </div>

              {/* Subject Input */}
              <div className="space-y-2">
                <label htmlFor="subject" className="flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-wider text-neutral-300">
                  <FaTag className="text-purple-400 text-[11px]" /> Subject
                </label>
                <input 
                  id="subject"
                  name="subject"
                  type="text" 
                  placeholder="Project Collaboration / Freelance"
                  className="w-full bg-neutral-950/90 border border-neutral-800 rounded-2xl px-4 py-3.5 text-sm text-white placeholder-neutral-500 outline-none focus:border-purple-500/80 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
                  required
                />
              </div>

              {/* Message Input */}
              <div className="space-y-2">
                <label htmlFor="message" className="flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-wider text-neutral-300">
                  <FaCommentDots className="text-purple-400 text-[11px]" /> Your Message
                </label>
                <textarea 
                  id="message"
                  name="message"
                  placeholder="Tell me about your vision or idea..."
                  className="w-full bg-neutral-950/90 border border-neutral-800 rounded-2xl px-4 py-3.5 text-sm text-white placeholder-neutral-500 outline-none focus:border-purple-500/80 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 h-36 resize-none"
                  required
                />
              </div>

              {/* Notification Banner */}
              <AnimatePresence>
                {statusMessage.text && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex items-center gap-3 p-4 rounded-2xl text-xs font-mono border ${
                      statusMessage.type === 'success' 
                        ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30' 
                        : 'bg-rose-500/10 text-rose-300 border-rose-500/30'
                    }`}
                  >
                    {statusMessage.type === 'success' ? <FaCheckCircle className="text-emerald-400 text-base flex-shrink-0" /> : <FaExclamationCircle className="text-rose-400 text-base flex-shrink-0" />}
                    <span>{statusMessage.text}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Dynamic Action Button */}
              <motion.button 
                whileHover={{ scale: isSending ? 1 : 1.01 }}
                whileTap={{ scale: isSending ? 1 : 0.98 }}
                type="submit" 
                disabled={isSending}
                className={`w-full relative group overflow-hidden py-4 px-6 rounded-2xl font-semibold text-sm text-white shadow-xl transition-all duration-200 ${
                  isSending 
                    ? 'bg-neutral-800 cursor-not-allowed text-neutral-400' 
                    : 'bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 hover:shadow-purple-500/25 cursor-pointer'
                }`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSending ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Dispatching Message...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="text-xs transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 duration-200" />
                      Send Message
                    </>
                  )}
                </span>
                
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
              </motion.button>

            </form>
          </motion.div>

          {/* Contact Details & Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="space-y-4">
              {contactDetails.map(({ icon: Icon, label, value, href, isEmail, badge }) => (
                <div
                  key={label}
                  className="group relative bg-neutral-900/80 rounded-2xl p-4 sm:p-5 border border-white/10 hover:border-purple-500/40 transition-all duration-200 shadow-lg transform-gpu"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center text-purple-400 group-hover:border-purple-500/30 group-hover:text-pink-400 transition-colors duration-200 flex-shrink-0">
                        <Icon className="text-lg" />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-0.5">{label}</span>
                        <a 
                          href={href}
                          target={href.startsWith('http') ? '_blank' : undefined}
                          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-sm font-medium text-white hover:text-purple-300 transition-colors duration-200 break-all"
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
                        className="p-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-all duration-200"
                      >
                        {copied ? <FaCheck className="text-emerald-400 text-xs" /> : <FaCopy className="text-xs" />}
                      </button>
                    )}

                    {badge && (
                      <span className="hidden sm:inline-block px-2.5 py-1 rounded-full text-[10px] font-mono bg-neutral-950 text-neutral-400 border border-neutral-800">
                        {badge}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-neutral-900/80 rounded-2xl p-6 border border-white/10 shadow-lg">
              <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-400" /> Connect Across Networks
              </h3>
              
              <div className="grid grid-cols-5 gap-3">
                {socialLinks.map(({ icon: Icon, url, label, color }) => (
                  <motion.a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={label}
                    whileHover={{ y: -2, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`aspect-square rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center text-neutral-400 transition-all duration-200 ${color}`}
                  >
                    <Icon className="text-lg" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-900/20 to-indigo-900/20 border border-purple-500/20">
              <p className="text-xs text-purple-200/80 leading-relaxed font-mono">
                ⚡ <strong className="text-white font-semibold">Quick Turnaround:</strong> Typically replying within 24 hours. Automated receipt confirmation sent instantly.
              </p>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Contact;