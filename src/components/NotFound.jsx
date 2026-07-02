import React from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaHome, FaArrowLeft } from 'react-icons/fa';

function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-neutral-900 overflow-hidden px-6">
      
      {/* Background accents */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-1/4 -left-32 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl'></div>
        <div className='absolute bottom-1/4 -right-32 w-72 h-72 bg-pink-600/10 rounded-full blur-3xl'></div>
        <div className='absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:48px_48px]'></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative text-center max-w-lg mx-auto"
      >
        {/* Big gradient 404 */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="text-7xl sm:text-8xl md:text-9xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 tracking-tight"
        >
          404
        </motion.h1>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-white">
          Page Not Found
        </h2>

        <p className="text-gray-400 text-sm sm:text-base max-w-md mx-auto mb-10 leading-relaxed">
          Sorry, the page you're looking for doesn't exist or may have been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold
                       bg-gradient-to-r from-purple-600 to-pink-500 text-white
                       hover:shadow-xl hover:shadow-purple-600/30 hover:-translate-y-0.5
                       transition-all duration-300"
          >
            <FaHome size={14} /> Go Back Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold
                       border border-purple-500/60 text-purple-300
                       hover:bg-purple-500/10 hover:-translate-y-0.5
                       transition-all duration-300"
          >
            <FaArrowLeft size={14} /> Previous Page
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default NotFound;