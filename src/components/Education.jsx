import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import { educationData } from '../assets/assets';

function Education() {
  useEffect(() => {
    document.title = "Bhabasindhu | Education";
  }, []);


  return ( 
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="education"
      className="py-20 bg-neutral-900 text-white"
    >
      <div className="container mx-auto px-6 mt-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Education</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          My educational background
        </p>

        {/* Global Timeline Layout Container */}
        <div className="max-w-3xl mx-auto relative">
          
          {/* Continuous Vertical Timeline Line */}
          <div className="absolute left-4 top-2 bottom-2 w-[2px] bg-gradient-to-b from-purple-500 via-pink-500 to-purple-800 hidden md:block"></div>

          <div className="space-y-10">
            {educationData.map((item, index) => (
              <div key={index} className="relative md:pl-12 group">
                
                {/* Timeline Dot */}
                <div className="absolute left-[9px] top-6 w-4 h-4 rounded-full bg-neutral-900 border-4 border-purple-500 z-10 hidden md:block group-hover:border-pink-500 transition-colors duration-300"></div>

                {/* Education Detail Box */}
                <div className="bg-neutral-800/40 border border-neutral-800/80 rounded-2xl p-6 backdrop-blur-sm transform hover:-translate-y-1 hover:border-purple-500/30 transition-all duration-300 shadow-xl">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                    <div>
                      {/* Degree Title with Gradient Hover Effect */}
                      <h3 className="text-xl font-bold text-purple-400 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                        {item.degree}
                      </h3>
                      <p className="text-gray-400 text-sm font-medium mt-0.5">{item.institution}</p>
                    </div>
                    
                    {/* Year/Duration Badge */}
                    <div>
                      <span className="inline-block px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-xs font-medium border border-purple-500/20 whitespace-nowrap">
                        {item.duration}
                      </span>
                    </div>
                  </div>

                  {/* Marks/CGPA Highlight */}
                  <p className="text-pink-400 font-semibold text-sm tracking-wide mt-2">
                    {item.grade}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Education;