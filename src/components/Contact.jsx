import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

function Contact() {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    document.title = "Bhabasindhu | Contact";
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage({ type: '', text: '' });

    // Replace these strings with your actual EmailJS credentials from Step 1
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
          setStatusMessage({ type: 'success', text: 'Thank you! Your message has been sent successfully.' });
          formRef.current.reset(); // Clears the form inputs on success
      }, (error) => {
          setStatusMessage({ type: 'error', text: 'Something went wrong. Please try again later.' });
          console.error('EmailJS Error:', error.text);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return ( 
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{duration:0.5,ease:"easeOut"}}
      viewport={{once:false,amount:0.2}}
      id="contact"
      className="py-20 bg-neutral-900 text-white"
    >
      <div className="container mx-auto px-6 mt-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 tracking-tight">
          Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Touch</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Have a question or want to work together? Feel free to reach out!
        </p>
        
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-start'>
          
          {/* Contact Form */}
          <div className="bg-neutral-800/50 p-8 rounded-2xl border border-neutral-800 backdrop-blur-sm">
            {/* Added ref and onSubmit handler */}
            <form ref={formRef} onSubmit={sendEmail} className='space-y-6'>
              <div>
                <label htmlFor="name" className='block text-gray-300 mb-2 font-medium text-sm'>Your Name</label>
                <input 
                  id="name"
                  name="name" // Ensure this matches your EmailJS template tag
                  type="text" 
                  className='w-full bg-neutral-900 border border-purple-500/30 rounded-lg px-4 py-3 outline-none text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition duration-200' 
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className='block text-gray-300 mb-2 font-medium text-sm'>Email Address</label>
                <input 
                  id="email"
                  name="email" // Ensure this matches your EmailJS template tag
                  type="email" 
                  className='w-full bg-neutral-900 border border-purple-500/30 rounded-lg px-4 py-3 outline-none text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition duration-200' 
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className='block text-gray-300 mb-2 font-medium text-sm'>Subject</label>
                <input 
                  id="subject"
                  name="subject" // Ensure this matches your EmailJS template tag
                  type="text" 
                  className='w-full bg-neutral-900 border border-purple-500/30 rounded-lg px-4 py-3 outline-none text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition duration-200' 
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className='block text-gray-300 mb-2 font-medium text-sm'>Your Message</label>
                <textarea 
                  id="message"
                  name="message" // Ensure this matches your EmailJS template tag
                  className='w-full h-36 bg-neutral-900 border border-purple-500/30 rounded-lg px-4 py-3 outline-none text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition duration-200 resize-none' 
                  required
                />
              </div>

              {/* Status Notifications */}
              {statusMessage.text && (
                <div className={`p-3 rounded-lg text-sm font-medium ${
                  statusMessage.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'
                }`}>
                  {statusMessage.text}
                </div>
              )}

              <button 
                type='submit' 
                disabled={isSending}
                className={`w-full px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition duration-300 shadow-lg shadow-purple-600/20 ${isSending ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
              >
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 lg:pl-6">
            <div className="flex items-start">
              <div className="text-purple-400 text-2xl mr-4 p-3 bg-neutral-800 rounded-xl border border-neutral-700">
                <FaMapMarkerAlt/>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Location</h3>
                <p className="text-gray-400">
                  <a target="_blank" rel="noopener noreferrer" href="https://maps.google.com" className='hover:text-purple-400 transition duration-200'>
                    Kolkata, India
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-purple-400 text-2xl mr-4 p-3 bg-neutral-800 rounded-xl border border-neutral-700">
                <FaEnvelope/>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Email</h3>
                <p className="text-gray-400">
                  <a href="mailto:bhabasindhudas@gmail.com" className="hover:text-purple-400 transition duration-200">
                    bhabasindhudas@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-purple-400 text-2xl mr-4 p-3 bg-neutral-800 rounded-xl border border-neutral-700">
                <FaPhone/>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Phone</h3>
                <p className="text-gray-400">
                  <a href="tel:+919641486257" className="hover:text-purple-400 transition duration-200">
                    +91 9641486257
                  </a>
                </p>
              </div>
            </div>

            {/* Social Accounts Layout */}
            <div className="pt-6 border-t border-neutral-800">
              <h3 className='text-lg font-semibold mb-4'>Follow Me</h3>
              <div className="flex flex-wrap gap-4">
                <a href="https://github.com/Riju-hub/" target="_blank" rel="noopener noreferrer" title="GitHub" className='w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-neutral-700 transition duration-300 border border-neutral-700'>
                  <FaGithub size={20}/>
                </a>
                <a href="https://www.linkedin.com/in/bhabasindhu-das-71b147370" target="_blank" rel="noopener noreferrer" title="LinkedIn" className='w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition duration-300 border border-neutral-700'>
                  <FaLinkedin size={20}/>
                </a>
                <a href="https://x.com/BhabasindhuBhab" target="_blank" rel="noopener noreferrer" title="Twitter" className='w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-neutral-900 transition duration-300 border border-neutral-700'>
                  <FaTwitter size={20}/>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61577756120368" target="_blank" rel="noopener noreferrer" title="Facebook" className='w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-700 transition duration-300 border border-neutral-700'>
                  <FaFacebook size={20}/>
                </a>
                <a href="https://www.instagram.com/bhabasindhudas621/" target="_blank" rel="noopener noreferrer" title="Instagram" className='w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-pink-600 transition duration-300 border border-neutral-700'>
                  <FaInstagram size={20}/>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;