// import React, {useEffect} from 'react'
// import { Route, Routes } from 'react-router-dom'
// import Home from './pages/Home'
// import Navbar from './components/Navbar'
// import About from './components/About'
// import Skills from './components/Skills'
// import Projects from './components/Projects'
// import Work from './components/Work'
// import Contact from './components/Contact'
// import ProjectDetails from './pages/ProjectDetails'
// import Footer from './components/Footer'
// import NotFound from './components/NotFound'
// import Education from './components/Education'

// function App() {
//   useEffect(() => {
//     document.title = "Bhabasidhu | Portfolio";
//   }, []);
//   return (
//     <div>
//       <Navbar/>
//       <Routes>
//         <Route path='/' element={<Home/>} />
//         <Route path='/project/:id' element={<ProjectDetails />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//       <Footer/>
//     </div>
//   )
// }

// export default App









import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import ProjectDetails from './pages/ProjectDetails'
import Footer from './components/Footer'
import NotFound from './components/NotFound'
import ChatbotWidget from './components/ChatbotWidget' // 1. Import your chatbot component

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

      {/* 2. Place it here so it stays visible everywhere */}
      <ChatbotWidget />

      <Footer />
    </div>
  )
}

export default App
