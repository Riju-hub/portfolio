import React from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen flex items-center justify-center"
    >
      <div className="text-center px-6">
        <h2 className="text-4xl font-bold mb-4 text-white">
          404 <span className="text-purple">Not Found</span>
        </h2>
        <p className="text-gray-400 max-w-md mx-auto">
          Sorry, the page you are looking for does not exist.
        </p>
        {/* 👇 Go Home Button */}
        <Link
          to="/"
          className="inline-block px-6 py-3 rounded-lg font-semibold
                     bg-purple text-white hover:bg-purple-600
                     transition-all duration-300 mt-6"
        >
          Go Back Home
        </Link>
      </div>
    </motion.div>
  );
}

export default NotFound;
