import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
// import Work from '../components/Work';
import Contact from '../components/Contact';
import Education from '../components/Education';
function Home() {
    useEffect(() => {
    document.title = "Bhabasindhu | Portfolio";
  }, []);
    return ( 
        <div>
            <section id="home"><Hero/></section>
            <section id="about"><About/></section>
            <section id="skills"><Skills/></section>
            <section id="projects"><Projects/></section>
            {/* <section id="experience"><Work/></section> */}
            <section id="education"><Education/></section>
            <section id="contact"><Contact/></section>
        </div>
     );
}

export default Home;