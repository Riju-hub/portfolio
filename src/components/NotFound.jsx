import React from 'react';
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { FaHome, FaArrowLeft } from 'react-icons/fa';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#08080a] overflow-hidden px-6 font-sans selection:bg-purple-500/30">
      
      {/* GPU-Accelerated Static Radial Glow Mesh & Subtle Grid (Zero paint cost) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none transform-gpu">
        <div 
          className="absolute top-1/4 -left-32 w-80 h-80"
          style={{ background: 'radial-gradient(circle, rgba(147, 51, 234, 0.15) 0%, rgba(0, 0, 0, 0) 70%)' }}
        />
        <div 
          className="absolute bottom-1/4 -right-32 w-80 h-80"
          style={{ background: 'radial-gradient(circle, rgba(236, 72, 153, 0.12) 0%, rgba(0, 0, 0, 0) 70%)' }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative text-center max-w-lg mx-auto z-10 transform-gpu"
      >
        {/* Big Gradient 404 */}
        <h1 className="text-7xl sm:text-8xl md:text-9xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-300 tracking-tight">
          404
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-white">
          Page Not Found
        </h2>

        <p className="text-neutral-400 text-sm sm:text-base max-w-md mx-auto mb-10 leading-relaxed font-normal">
          Sorry, the page you're looking for doesn't exist or may have been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl font-semibold text-sm
                       bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white shadow-xl shadow-purple-600/20
                       hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <FaHome size={14} /> Go Back Home
          </Link>

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl font-semibold text-sm
                       bg-neutral-900/90 border border-white/10 hover:border-purple-500/40 text-purple-300 hover:text-white
                       hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer shadow-lg"
          >
            <FaArrowLeft size={14} /> Previous Page
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default NotFound;