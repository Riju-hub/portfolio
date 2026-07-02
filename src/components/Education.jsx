import React from 'react';
import { motion } from "framer-motion";
import { educationData } from '../assets/assets';
import { FaGraduationCap } from 'react-icons/fa';

function Education() {
  return ( 
    <section
      id="education"
      className="relative py-20 md:py-28 bg-neutral-900 text-white overflow-hidden"
    >
      {/* Background accents */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-1/4 -right-32 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl'></div>
        <div className='absolute bottom-1/4 -left-32 w-72 h-72 bg-pink-600/10 rounded-full blur-3xl'></div>
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
            Academic Background
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Education</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            My educational background
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          
          {/* Continuous Vertical Timeline Line */}
          <div className="absolute left-4 top-2 bottom-2 w-[2px] bg-gradient-to-b from-purple-500 via-pink-500 to-purple-800 hidden md:block"></div>

          <div className="space-y-8 md:space-y-10">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="relative md:pl-12 group"
              >
                {/* Timeline Dot with icon */}
                <div className="absolute left-0 top-4 w-9 h-9 rounded-full bg-neutral-900 border-4 border-purple-500 z-10 hidden md:flex items-center justify-center group-hover:border-pink-500 transition-colors duration-300">
                  <FaGraduationCap className="text-purple-400 group-hover:text-pink-400 transition-colors duration-300" size={12} />
                </div>

                {/* Education Detail Box */}
                <div className="bg-neutral-800/40 border border-neutral-800/80 rounded-2xl p-5 sm:p-6 backdrop-blur-sm transform hover:-translate-y-1 hover:border-purple-500/30 transition-all duration-300 shadow-xl">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-purple-400 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                        {item.degree}
                      </h3>
                      <p className="text-gray-400 text-sm font-medium mt-0.5">{item.institution}</p>
                    </div>
                    
                    <span className="inline-block px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-xs font-medium border border-purple-500/20 whitespace-nowrap self-start">
                      {item.duration}
                    </span>
                  </div>

                  <p className="text-pink-400 font-semibold text-sm tracking-wide mt-2">
                    {item.grade}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;