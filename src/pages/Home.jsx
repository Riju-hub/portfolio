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

    const targetId = sessionStorage.getItem('pendingScrollTarget');
    if (targetId) {
      sessionStorage.removeItem('pendingScrollTarget');

      // Use a double requestAnimationFrame to ensure the entire DOM tree is painted
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const el = document.getElementById(targetId);
          if (el) {
            const topOffset = el.getBoundingClientRect().top + window.scrollY;
            // Immediate snap to the section on route arrival prevents mobile touch loops
            window.scrollTo({
              top: topOffset,
              behavior: 'auto'
            });
          }
        });
      });
    }
  }, []);

  return (
    <div>
      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="experience"><Work /></section>
      <section id="education"><Education /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
}

export default Home;