import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Work from '../components/Work';
import Contact from '../components/Contact';
import Education from '../components/Education';

function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Bhabasindhu | Portfolio";
  }, []);

  // Smooth scroll listener when redirected from a project page
  useEffect(() => {
    if (location.state?.scrollTo) {
      const targetId = location.state.scrollTo;

      // Wipe state immediately so mobile scrolling/refreshing doesn't re-trigger it
      navigate('/', { replace: true, state: {} });

      const timer = setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);

      return () => clearTimeout(timer);
    }
  }, [location, navigate]);

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