import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return ( 
    <nav className='fixed top-0 left-0 w-full z-50 bg-neutral-900/90 backdrop-blur-md py-4 px-6 border-b border-neutral-800 shadow-xl text-white'>
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo - Fixed Inline Flex Alignment */}
        <div>
          <Link to="/" className='flex items-center gap-1.5 text-2xl font-black tracking-wider text-white'>
            BHABASINDHU <span className='text-purple-500'>DAS</span>
            <div className='w-2 h-2 bg-purple-500 rounded-full mt-1 animate-pulse' />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className='hidden md:flex space-x-8 lg:space-x-10 font-medium'>
          {['home', 'about', 'skills', 'projects', 'education', 'experience', 'contact'].map((item) => (
            <Link 
              key={item}
              to={`/${item}`} 
              className='relative text-gray-300 capitalize transition duration-300 hover:text-purple-400 group py-1'
            >
              <span>{item}</span>
              <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full'></span>
            </Link>
          ))}
        </div>

        {/* Mobile Toggle Button - Fixed Visibility Bug */}
        <div className='md:hidden flex items-center z-50 text-white'>
          {showMenu ? (
            <FaXmark onClick={() => setShowMenu(!showMenu)} className='text-2xl cursor-pointer text-purple-400' />
          ) : (
            <FaBars onClick={() => setShowMenu(!showMenu)} className='text-2xl cursor-pointer hover:text-purple-400 transition-colors' />
          )}
        </div>
      </div>

      {/* Mobile Menu Dropdown - Fixed Overlay Structure */}
      {showMenu && (
        <div className='md:hidden fixed top-0 left-0 w-full h-screen bg-neutral-950/98 backdrop-blur-lg flex flex-col space-y-6 text-center justify-center items-center z-40 px-6 transition-all duration-300'>
          {['home', 'about', 'skills', 'projects', 'education', 'experience', 'contact'].map((item) => (
            <Link 
              key={item}
              onClick={() => setShowMenu(false)} 
              to={`/${item}`} 
              className='text-2xl font-semibold capitalize text-gray-300 hover:text-purple-400 transition-colors duration-200'
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;