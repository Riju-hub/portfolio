import React, { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import ProjectDetails from './pages/ProjectDetails';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import ChatbotWidget from './components/ChatbotWidget';

function ScrollToAnchor() {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (hash && pathname === '/') {
      const elementId = hash.replace('#', '');
      
      // Use requestAnimationFrame so the browser waits for the DOM to paint
      requestAnimationFrame(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          // Remove the hash silently from history so mobile address bar actions don't snap back
          window.history.replaceState(null, '', '/');
        }
      });
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
  );
}

export default App;