import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone, FaTwitter, FaFacebook, FaInstagram, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

function Contact() {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage({ type: '', text: '' });

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
          setStatusMessage({ type: 'success', text: 'Thank you! Your message has been sent successfully.' });
          formRef.current.reset();
      }, (error) => {
          setStatusMessage({ type: 'error', text: 'Something went wrong. Please try again later.' });
          console.error('EmailJS Error:', error.text);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  const inputClasses = 'w-full bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 outline-none text-white placeholder-gray-500 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition duration-200';

  const contactDetails = [
    { icon: FaMapMarkerAlt, label: 'Location', value: 'Kolkata, India', href: 'https://maps.google.com' },
    { icon: FaEnvelope, label: 'Email', value: 'bhabasindhudas621@gmail.com', href: 'mailto:bhabasindhudas621@gmail.com' },
    { icon: FaPhone, label: 'Phone', value: '+91 9641486257', href: 'tel:+919641486257' },
  ];

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/Riju-hub/', label: 'GitHub', hover: 'hover:bg-neutral-700' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/bhabasindhu-das-web', label: 'LinkedIn', hover: 'hover:bg-blue-600' },
    { icon: FaTwitter, url: 'https://x.com/BhabasindhuBhab', label: 'Twitter', hover: 'hover:bg-neutral-900' },
    { icon: FaFacebook, url: 'https://www.facebook.com/profile.php?id=61577756120368', label: 'Facebook', hover: 'hover:bg-blue-700' },
    { icon: FaInstagram, url: 'https://www.instagram.com/bhabasindhudas621/', label: 'Instagram', hover: 'hover:bg-pink-600' },
  ];

  return ( 
    <section
      id="contact"
      className="relative py-20 md:py-28 bg-neutral-900 text-white overflow-hidden"
    >
      {/* Background accents */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-0 left-1/3 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl'></div>
        <div className='absolute bottom-0 right-1/3 w-72 h-72 bg-pink-600/10 rounded-full blur-3xl'></div>
      </div>

      <div className="relative container mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-14 md:mb-20"
        >
          <span className='inline-block text-xs md:text-sm font-semibold tracking-widest uppercase text-purple-400 mb-3'>
            Let's Connect
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>
        
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12 max-w-5xl mx-auto items-start'>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-3 bg-neutral-800/40 p-6 sm:p-8 rounded-2xl border border-neutral-800 backdrop-blur-sm shadow-xl"
          >
            <form ref={formRef} onSubmit={sendEmail} className='space-y-5'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                <div>
                  <label htmlFor="name" className='block text-gray-300 mb-2 font-medium text-sm'>Your Name</label>
                  <input 
                    id="name"
                    name="name"
                    type="text" 
                    placeholder="Bhabasindhu Das"
                    className={inputClasses}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className='block text-gray-300 mb-2 font-medium text-sm'>Email Address</label>
                  <input 
                    id="email"
                    name="email"
                    type="email" 
                    placeholder="bhabasindhudas@gmail.com"
                    className={inputClasses}
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className='block text-gray-300 mb-2 font-medium text-sm'>Subject</label>
                <input 
                  id="subject"
                  name="subject"
                  type="text" 
                  placeholder="Let's work together"
                  className={inputClasses}
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className='block text-gray-300 mb-2 font-medium text-sm'>Your Message</label>
                <textarea 
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  className={`${inputClasses} h-36 resize-none`}
                  required
                />
              </div>

              {/* Status Notifications */}
              <AnimatePresence>
                {statusMessage.text && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex items-center gap-2 p-3 rounded-lg text-sm font-medium ${
                      statusMessage.type === 'success' 
                        ? 'bg-green-500/10 text-green-400 border border-green-500/20' 
                        : 'bg-red-500/10 text-red-400 border border-red-500/20'
                    }`}
                  >
                    {statusMessage.type === 'success' ? <FaCheckCircle /> : <FaExclamationCircle />}
                    {statusMessage.text}
                  </motion.div>
                )}
              </AnimatePresence>

              <button 
                type='submit' 
                disabled={isSending}
                className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-semibold shadow-lg shadow-purple-600/20 transition duration-300 ${
                  isSending ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-xl hover:shadow-purple-600/30 hover:-translate-y-0.5 cursor-pointer'
                }`}
              >
                {isSending ? (
                  <>
                    <span className='w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin'></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane size={14} /> Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-2 space-y-5"
          >
            {contactDetails.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-start gap-4 p-4 rounded-xl bg-neutral-800/30 border border-neutral-800 hover:border-purple-500/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="text-purple-400 text-xl p-3 bg-neutral-900 rounded-xl border border-neutral-700 flex-shrink-0">
                  <Icon/>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 mb-0.5">{label}</h3>
                  <p className="text-white font-medium hover:text-purple-400 transition duration-200 break-all">
                    {value}
                  </p>
                </div>
              </a>
            ))}

            {/* Social Accounts */}
            <div className="pt-4">
              <h3 className='text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider'>Follow Me</h3>
              <div className="flex flex-wrap gap-5">
                {socialLinks.map(({ icon: Icon, url, label, hover }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={label}
                    className={`w-11 h-11 rounded-full bg-neutral-800 flex items-center justify-center text-gray-400 hover:text-white ${hover} transition duration-300 border border-neutral-700 hover:scale-110`}
                  >
                    <Icon size={18}/>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;