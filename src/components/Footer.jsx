import React from 'react';
function Footer() {
    return ( 
        <div className='py-8 bg-dark-300 '>
            <div className="container mx-auto px-6 text-center text-gray-400">
                <p>&copy; {new Date().getFullYear()} Bhabasindhu Das. All rights reserved.</p>
            </div>
        </div>
     );
}

export default Footer;