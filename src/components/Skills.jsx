import React , {useEffect} from 'react';
import { motion } from 'framer-motion';
import { skills } from '../assets/assets';
function Skills() {
    useEffect(() => {
    document.title = "Bhabasidhu | Skills";
  }, []);
    return ( 
        <motion.div
        initial={{opacity:0,y:50}} 
        whileInView={{opacity:1,y:0}} 
        transition={{duration:0.5,ease:"easeOut"}}
        viewport={{once:false,amount:0.2}}
        id='skills'
        className='py-20 bg-dark-100'
        >
            <div className='container mx-auto px-6 mt-10'>
                <h2 className='text-3xl md:text-4xl font-extrabold text-center mb-4 tracking-tight'>
          My <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500'>Skills</span>
        </h2>
                <p className='text-grey-400 text-center max-w-2xl mx-auto mb-16'>Technologis I work with to bring ideas to life</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ma-w-5xl mx-auto'>
                    {
                        skills.map((skill,index)=>(
                            <div key={index}className='bg-dark-300 rounded-2xl p-6 hover:-translate-y-2 transition duration-300 cursor-pointer'>
                                <div className='flex items-center mb-4'>
                                    <skill.icon className={`${skill.color} w-12 h-12 mr-6`}/>
                                    {/* <h3 className='text-xl font-semibold text-[#B3B3FF]'>{skill.title}</h3> */}
                                    <h3 className='text-xl font-semibold text-blue'>{skill.title}</h3>
                                </div>
                                <p className='text-grey-400 mb-4'>{skill.description}</p>
                                <div className='flex flex-wrap gap-2'>
                                    {
                                    skill.tags.map((tech)=>(
                                        <span key={tech} className='bg-dark-400 rounded-full px-3 py-1 text-sm text-[#84cfff]'>{tech}</span>
                                    ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </motion.div>
     );
}

export default Skills;

// import React, { useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { skills } from '../assets/assets';

// function Skills() {
//   useEffect(() => {
//     // Fixed typo: Added the missing "n"
//     document.title = "Bhabasindhu | Skills";
//   }, []);

//   return ( 
//     <motion.div
//       initial={{ opacity: 0, y: 50 }} 
//       whileInView={{ opacity: 1, y: 0 }} 
//       transition={{ duration: 0.8, ease: "easeOut" }}
//       viewport={{ once: true, amount: 0.1 }}
//       id='skills'
//       className='py-20 bg-neutral-900 text-white'
//     >
//       <div className='container mx-auto px-6 mt-10'>
        
//         {/* Section Heading */}
//         <h2 className='text-3xl md:text-4xl font-extrabold text-center mb-4 tracking-tight'>
//           My <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500'>Skills</span>
//         </h2>
        
//         <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16 text-base md:text-lg'>
//           Technologies I work with to bring ideas to life
//         </p>
        
//         {/* Skills Grid - Fixed 'max-w-5xl' layout typo */}
//         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto'>
//           {skills.map((skill, index) => (
//             <div 
//               key={skill.id || index}
//               className='bg-neutral-800/50 rounded-2xl p-6 border border-neutral-800 backdrop-blur-sm transform hover:-translate-y-1.5 transition-all duration-300 cursor-pointer shadow-xl group'
//             >
//               {/* Header inside Card */}
//               <div className='flex items-center mb-4'>
//                 <div className="text-3xl mr-4 text-purple-400 group-hover:scale-110 transition-transform duration-300">
//                   {skill.icon && <skill.icon />}
//                 </div>
//                 <h3 className='text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300'>
//                   {skill.title}
//                 </h3>
//               </div>
              
//               {/* Card Body */}
//               <p className='text-gray-400 text-sm md:text-base mb-6 leading-relaxed'>
//                 {skill.description}
//               </p>
              
//               {/* Tech Badges / Tags */}
//               <div className='flex flex-wrap gap-2'>
//                 {skill.tags.map((tech) => (
//                   <span 
//                     key={tech} 
//                     className='bg-purple-500/10 text-purple-300 border border-purple-500/20 rounded-full px-3 py-1 text-xs font-medium tracking-wide'
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </motion.div>
//   );
// }

// export default Skills;