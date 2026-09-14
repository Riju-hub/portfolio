import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import ProjectDetails from './pages/ProjectDetails';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import ChatbotWidget from './components/ChatbotWidget';

function App() {
  useEffect(() => {
    document.title = "Bhabasindhu | Portfolio";
  }, []);

  return (
    <div className="relative min-h-screen">
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