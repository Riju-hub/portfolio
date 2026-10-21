// import React, { useEffect } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
// import Navbar from './components/Navbar';
// import ProjectDetails from './pages/ProjectDetails';
// import Footer from './components/Footer';
// import NotFound from './components/NotFound';
// import ChatbotWidget from './components/ChatbotWidget';

// function App() {
//   useEffect(() => {
//     document.title = "Bhabasindhu | Portfolio";
//   }, []);

//   return (
//     <div className="relative min-h-screen">
//       <Navbar />

//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/project/:id' element={<ProjectDetails />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>

//       <ChatbotWidget />

//       <Footer />
//     </div>
//   );
// }

// export default App;




import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import ProjectDetails from './pages/ProjectDetails';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import ChatbotWidget from './components/ChatbotWidget';
import GreetingModal from './components/GreetingModal'; // <-- 1. Import component

function App() {
  useEffect(() => {
    document.title = "Bhabasindhu | Portfolio";
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* 2. Renders on timer, stays fixed over everything */}
      <GreetingModal />

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