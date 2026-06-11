import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Work from '../components/Work';
import Contact from '../components/Contact';
import Education from '../components/Education';
function Home() {
    useEffect(() => {
    document.title = "Bhabasindhu | Portfolio";
  }, []);
    return ( 
        <div>
            <Hero/>
            <About/>
            <Skills/>
            <Projects/>
            <Education/>
            <Work/>
            <Contact/>
        </div>
     );
}

export default Home;