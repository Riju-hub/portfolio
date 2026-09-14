import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Work from '../components/Work';
import Contact from '../components/Contact';
import Education from '../components/Education';

function Home() {
  const location = useLocation();

  useEffect(() => {
    document.title = "Bhabasindhu | Portfolio";
  }, []);

  useEffect(() => {
    const targetId = location.state?.scrollTo;

    if (targetId) {
      // Clear the state natively in browser history WITHOUT triggering a React re-render
      window.history.replaceState({}, document.title, window.location.pathname);

      // Wait briefly for full DOM tree paint
      const timer = setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, []); // Run ONLY once when Home mounts

  return ( 
    <div>
      <section id="home"><Hero/></section>
      <section id="about"><About/></section>
      <section id="skills"><Skills/></section>
      <section id="projects"><Projects/></section>
      <section id="experience"><Work/></section>
      <section id="education"><Education/></section>
      <section id="contact"><Contact/></section>
    </div>
  );
}

export default Home;