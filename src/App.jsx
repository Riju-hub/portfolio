import React, { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import ProjectDetails from './pages/ProjectDetails'
import Footer from './components/Footer'
import NotFound from './components/NotFound'
import ChatbotWidget from './components/ChatbotWidget'

function ScrollToAnchor() {
  const { pathname, hash } = useLocation();
  const lastProcessedHash = useRef('');

  useEffect(() => {
    // Only scroll if there is a hash, and it's newly requested
    if (hash && hash !== lastProcessedHash.current) {
      lastProcessedHash.current = hash;
      const elementId = hash.replace('#', '');
      
      const timeout = setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);

      return () => clearTimeout(timeout);
    }
    
    // Reset tracked hash when navigating to a regular page without an anchor
    if (!hash) {
      lastProcessedHash.current = '';
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  useEffect(() => {
    document.title = "Bhabasindhu | Portfolio";
  }, []);

  return (
    <div className="relative min-h-screen">
      <ScrollToAnchor />

      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/project/:id' element={<ProjectDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <ChatbotWidget />

      <Footer />
    </div>
  )
}

export default App