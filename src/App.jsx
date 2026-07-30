import React, {useEffect} from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'
import NotFound from './components/NotFound'
import Education from './components/Education'

function App() {
  useEffect(() => {
    document.title = "Bhabasidhu | Portfolio";
  }, []);
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
