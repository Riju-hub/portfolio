
// import React, { useRef, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone, FaTwitter, FaFacebook, FaInstagram, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
// import emailjs from '@emailjs/browser';

// function Contact() {
//   const formRef = useRef();
//   const [isSending, setIsSending] = useState(false);
//   const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setIsSending(true);
//     setStatusMessage({ type: '', text: '' });

//     const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
//     const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
//     const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

//     emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
//       .then(() => {
//           setStatusMessage({ type: 'success', text: 'Thank you! Your message has been sent successfully.' });
//           formRef.current.reset();
//       }, (error) => {
//           setStatusMessage({ type: 'error', text: 'Something went wrong. Please try again later.' });
//           console.error('EmailJS Error:', error.text);
//       })
//       .finally(() => {
//         setIsSending(false);
//       });
//   };

//   const inputClasses = 'w-full bg-neutral-950/80 border border-neutral-800/80 rounded-xl px-4 py-3 outline-none text-white placeholder-neutral-500 focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/50 transition duration-200 text-sm';

//   const contactDetails = [
//     { icon: FaMapMarkerAlt, label: 'Location', value: 'Kolkata, India', href: 'https://maps.google.com' },
//     { icon: FaEnvelope, label: 'Email', value: 'bhabasindhudas621@gmail.com', href: 'mailto:bhabasindhudas621@gmail.com' },
//     { icon: FaPhone, label: 'Phone', value: '+91 9641486257', href: 'tel:+919641486257' },
//   ];

//   const socialLinks = [
//     { icon: FaGithub, url: 'https://github.com/Riju-hub/', label: 'GitHub', hover: 'hover:border-purple-500 hover:text-purple-400' },
//     { icon: FaLinkedin, url: 'https://www.linkedin.com/in/bhabasindhu-das-web', label: 'LinkedIn', hover: 'hover:border-blue-500 hover:text-blue-400' },
//     { icon: FaTwitter, url: 'https://x.com/BhabasindhuBhab', label: 'Twitter', hover: 'hover:border-sky-500 hover:text-sky-400' },
//     { icon: FaFacebook, url: 'https://www.facebook.com/profile.php?id=61577756120368', label: 'Facebook', hover: 'hover:border-blue-600 hover:text-blue-500' },
//     { icon: FaInstagram, url: 'https://www.instagram.com/bhabasindhudas621/', label: 'Instagram', hover: 'hover:border-pink-500 hover:text-pink-400' },
//   ];

//   return ( 
//     <section
//       id="contact"
//       className="relative py-20 md:py-28 bg-[#0a0a0c] text-white overflow-hidden"
//     >
//       {/* Background Ambient Glows & Grid (Matching Hero, About, Skills, Projects, Work, Education) */}
//       <div className='absolute inset-0 overflow-hidden pointer-events-none'>
//         <div className='absolute -top-40 -left-40 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] animate-pulse' />
//         <div className='absolute top-1/2 -right-40 w-96 h-96 bg-pink-600/15 rounded-full blur-[128px] animate-pulse' style={{ animationDelay: '1.5s' }} />
//         <div className='absolute -bottom-20 left-1/3 w-96 h-96 bg-indigo-600/15 rounded-full blur-[128px]' />
        
//         {/* Subtle radial overlay & grid */}
//         <div className='absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]' />
//       </div>

//       <div className="relative container mx-auto px-6 max-w-7xl z-10">

//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, ease: "easeOut" }}
//           viewport={{ once: true, amount: 0.3 }}
//           className="text-center mb-14 md:mb-20"
//         >
//           <span className='inline-block text-xs md:text-sm font-semibold tracking-widest uppercase text-purple-400 mb-3 font-mono'>
//             Let's Connect
//           </span>
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 tracking-tight text-white">
//             Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-300">Touch</span>
//           </h2>
//           <p className="text-neutral-400 max-w-2xl mx-auto text-base md:text-lg">
//             Have a project in mind, an opportunity to discuss, or just want to connect? Send a message!
//           </p>
//         </motion.div>
        
//         <div className='grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12 max-w-5xl mx-auto items-start'>
          
//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//             viewport={{ once: true, amount: 0.2 }}
//             className="lg:col-span-3 bg-neutral-900/80 p-6 sm:p-8 rounded-2xl border border-neutral-800/80 backdrop-blur-md shadow-xl relative overflow-hidden"
//           >
//             {/* Hover Glow */}
//             <div className="absolute -top-10 -right-10 w-28 h-28 bg-purple-600/10 rounded-full blur-2xl pointer-events-none" />

//             <form ref={formRef} onSubmit={sendEmail} className='space-y-5 relative z-10'>
//               <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
//                 <div>
//                   <label htmlFor="name" className='block text-neutral-300 mb-2 font-medium text-xs font-mono uppercase tracking-wider'>Your Name</label>
//                   <input 
//                     id="name"
//                     name="name"
//                     type="text" 
//                     placeholder="Bhabasindhu Das"
//                     className={inputClasses}
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="email" className='block text-neutral-300 mb-2 font-medium text-xs font-mono uppercase tracking-wider'>Email Address</label>
//                   <input 
//                     id="email"
//                     name="email"
//                     type="email" 
//                     placeholder="bhabasindhudas@gmail.com"
//                     className={inputClasses}
//                     required
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="subject" className='block text-neutral-300 mb-2 font-medium text-xs font-mono uppercase tracking-wider'>Subject</label>
//                 <input 
//                   id="subject"
//                   name="subject"
//                   type="text" 
//                   placeholder="Let's work together"
//                   className={inputClasses}
//                   required
//                 />
//               </div>

//               <div>
//                 <label htmlFor="message" className='block text-neutral-300 mb-2 font-medium text-xs font-mono uppercase tracking-wider'>Your Message</label>
//                 <textarea 
//                   id="message"
//                   name="message"
//                   placeholder="Tell me about your project..."
//                   className={`${inputClasses} h-36 resize-none`}
//                   required
//                 />
//               </div>

//               {/* Status Notifications */}
//               <AnimatePresence>
//                 {statusMessage.text && (
//                   <motion.div
//                     initial={{ opacity: 0, y: -10, height: 0 }}
//                     animate={{ opacity: 1, y: 0, height: 'auto' }}
//                     exit={{ opacity: 0, height: 0 }}
//                     transition={{ duration: 0.3 }}
//                     className={`flex items-center gap-2 p-3 rounded-xl text-xs font-mono backdrop-blur-sm ${
//                       statusMessage.type === 'success' 
//                         ? 'bg-emerald-950/40 text-emerald-300 border border-emerald-500/30' 
//                         : 'bg-rose-950/40 text-rose-300 border border-rose-500/30'
//                     }`}
//                   >
//                     {statusMessage.type === 'success' ? <FaCheckCircle /> : <FaExclamationCircle />}
//                     {statusMessage.text}
//                   </motion.div>
//                 )}
//               </AnimatePresence>

//               <button 
//                 type='submit' 
//                 disabled={isSending}
//                 className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-semibold shadow-lg shadow-purple-600/20 transition-all duration-300 ${
//                   isSending ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-xl hover:shadow-purple-600/30 hover:scale-[1.01] active:scale-[0.99] cursor-pointer'
//                 }`}
//               >
//                 {isSending ? (
//                   <>
//                     <span className='w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin'></span>
//                     Sending...
//                   </>
//                 ) : (
//                   <>
//                     <FaPaperPlane size={13} /> Send Message
//                   </>
//                 )}
//               </button>
//             </form>
//           </motion.div>

//           {/* Contact Info */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//             viewport={{ once: true, amount: 0.2 }}
//             className="lg:col-span-2 space-y-5"
//           >
//             {contactDetails.map(({ icon: Icon, label, value, href }) => (
//               <a
//                 key={label}
//                 href={href}
//                 target={href.startsWith('http') ? '_blank' : undefined}
//                 rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
//                 className="flex items-start gap-4 p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800/80 backdrop-blur-md hover:border-purple-500/40 hover:-translate-y-0.5 transition-all duration-300 shadow-lg group"
//               >
//                 <div className="text-purple-400 text-lg p-3 bg-neutral-950 rounded-xl border border-neutral-800 group-hover:border-purple-500/30 group-hover:text-pink-400 transition-colors duration-300 flex-shrink-0">
//                   <Icon />
//                 </div>
//                 <div>
//                   <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-0.5">{label}</h3>
//                   <p className="text-white font-medium group-hover:text-purple-300 transition-colors duration-200 break-all text-sm">
//                     {value}
//                   </p>
//                 </div>
//               </a>
//             ))}

//             {/* Social Accounts */}
//             <div className="pt-4">
//               <h3 className='text-xs font-mono uppercase tracking-wider text-neutral-400 mb-4'>Follow Me</h3>
//               <div className="flex flex-wrap gap-3">
//                 {socialLinks.map(({ icon: Icon, url, label, hover }) => (
//                   <a
//                     key={label}
//                     href={url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     title={label}
//                     className={`w-10 h-10 rounded-xl bg-neutral-900/80 backdrop-blur-md flex items-center justify-center text-neutral-400 border border-neutral-800/80 hover:scale-110 transition-all duration-300 shadow-sm ${hover}`}
//                   >
//                     <Icon size={16}/>
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Contact;


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
    const AUTOREPLY_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Call 1: Send main notification email to you
    const sendAdminEmail = emailjs.sendForm(
      SERVICE_ID,
      TEMPLATE_ID,
      formRef.current,
      PUBLIC_KEY
    );

    // Call 2: Send auto-reply email to the visitor
    const sendAutoReply = emailjs.sendForm(
      SERVICE_ID,
      AUTOREPLY_TEMPLATE_ID,
      formRef.current,
      PUBLIC_KEY
    );

    // Trigger both emails concurrently
    Promise.all([sendAdminEmail, sendAutoReply])
      .then(() => {
        setStatusMessage({
          type: 'success',
          text: 'Thank you! Your message has been sent successfully.',
        });
        formRef.current.reset();
      })
      .catch((error) => {
        setStatusMessage({
          type: 'error',
          text: 'Something went wrong. Please try again later.',
        });
        console.error('EmailJS Error:', error);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  const inputClasses = 'w-full bg-neutral-950/80 border border-neutral-800/80 rounded-xl px-4 py-3 outline-none text-white placeholder-neutral-500 focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/50 transition duration-200 text-sm';

  const contactDetails = [
    { icon: FaMapMarkerAlt, label: 'Location', value: 'Kolkata, India', href: 'https://maps.google.com' },
    { icon: FaEnvelope, label: 'Email', value: 'bhabasindhudas621@gmail.com', href: 'mailto:bhabasindhudas621@gmail.com' },
    { icon: FaPhone, label: 'Phone', value: '+91 9641486257', href: 'tel:+919641486257' },
  ];

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/Riju-hub/', label: 'GitHub', hover: 'hover:border-purple-500 hover:text-purple-400' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/bhabasindhu-das-web', label: 'LinkedIn', hover: 'hover:border-blue-500 hover:text-blue-400' },
    { icon: FaTwitter, url: 'https://x.com/BhabasindhuBhab', label: 'Twitter', hover: 'hover:border-sky-500 hover:text-sky-400' },
    { icon: FaFacebook, url: 'https://www.facebook.com/profile.php?id=61577756120368', label: 'Facebook', hover: 'hover:border-blue-600 hover:text-blue-500' },
    { icon: FaInstagram, url: 'https://www.instagram.com/bhabasindhudas621/', label: 'Instagram', hover: 'hover:border-pink-500 hover:text-pink-400' },
  ];

  return ( 
    <section
      id="contact"
      className="relative py-20 md:py-28 bg-[#0a0a0c] text-white overflow-hidden"
    >
      {/* Background Ambient Glows & Grid */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute -top-40 -left-40 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] animate-pulse' />
        <div className='absolute top-1/2 -right-40 w-96 h-96 bg-pink-600/15 rounded-full blur-[128px] animate-pulse' style={{ animationDelay: '1.5s' }} />
        <div className='absolute -bottom-20 left-1/3 w-96 h-96 bg-indigo-600/15 rounded-full blur-[128px]' />
        
        <div className='absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]' />
      </div>

      <div className="relative container mx-auto px-6 max-w-7xl z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-14 md:mb-20"
        >
          <span className='inline-block text-xs md:text-sm font-semibold tracking-widest uppercase text-purple-400 mb-3 font-mono'>
            Let's Connect
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 tracking-tight text-white">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-300">Touch</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-base md:text-lg">
            Have a project in mind, an opportunity to discuss, or just want to connect? Send a message!
          </p>
        </motion.div>
        
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12 max-w-5xl mx-auto items-start'>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-3 bg-neutral-900/80 p-6 sm:p-8 rounded-2xl border border-neutral-800/80 backdrop-blur-md shadow-xl relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-28 h-28 bg-purple-600/10 rounded-full blur-2xl pointer-events-none" />

            <form ref={formRef} onSubmit={sendEmail} className='space-y-5 relative z-10'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                <div>
                  <label htmlFor="name" className='block text-neutral-300 mb-2 font-medium text-xs font-mono uppercase tracking-wider'>Your Name</label>
                  <input 
                    id="name"
                    name="name"
                    type="text" 
                    placeholder="Your name"
                    className={inputClasses}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className='block text-neutral-300 mb-2 font-medium text-xs font-mono uppercase tracking-wider'>Email Address</label>
                  <input 
                    id="email"
                    name="email"
                    type="email" 
                    placeholder="yourname@gmail.com"
                    className={inputClasses}
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className='block text-neutral-300 mb-2 font-medium text-xs font-mono uppercase tracking-wider'>Subject</label>
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
                <label htmlFor="message" className='block text-neutral-300 mb-2 font-medium text-xs font-mono uppercase tracking-wider'>Your Message</label>
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
                    className={`flex items-center gap-2 p-3 rounded-xl text-xs font-mono backdrop-blur-sm ${
                      statusMessage.type === 'success' 
                        ? 'bg-emerald-950/40 text-emerald-300 border border-emerald-500/30' 
                        : 'bg-rose-950/40 text-rose-300 border border-rose-500/30'
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
                className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-semibold shadow-lg shadow-purple-600/20 transition-all duration-300 ${
                  isSending ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-xl hover:shadow-purple-600/30 hover:scale-[1.01] active:scale-[0.99] cursor-pointer'
                }`}
              >
                {isSending ? (
                  <>
                    <span className='w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin'></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane size={13} /> Send Message
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
                className="flex items-start gap-4 p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800/80 backdrop-blur-md hover:border-purple-500/40 hover:-translate-y-0.5 transition-all duration-300 shadow-lg group"
              >
                <div className="text-purple-400 text-lg p-3 bg-neutral-950 rounded-xl border border-neutral-800 group-hover:border-purple-500/30 group-hover:text-pink-400 transition-colors duration-300 flex-shrink-0">
                  <Icon />
                </div>
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-0.5">{label}</h3>
                  <p className="text-white font-medium group-hover:text-purple-300 transition-colors duration-200 break-all text-sm">
                    {value}
                  </p>
                </div>
              </a>
            ))}

            {/* Social Accounts */}
            <div className="pt-4">
              <h3 className='text-xs font-mono uppercase tracking-wider text-neutral-400 mb-4'>Follow Me</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map(({ icon: Icon, url, label, hover }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={label}
                    className={`w-10 h-10 rounded-xl bg-neutral-900/80 backdrop-blur-md flex items-center justify-center text-neutral-400 border border-neutral-800/80 hover:scale-110 transition-all duration-300 shadow-sm ${hover}`}
                  >
                    <Icon size={16}/>
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