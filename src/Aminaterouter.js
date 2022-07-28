import React from 'react'
import Skillset from './Components/pages/Skillset';
import Education from './Components/pages/Education';
import Projects from './Components/pages/Projects';
import Contactme from './Components/pages/contactme';
import Home from './Components/pages/Home';
import {  Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';


function Aminaterouter() {
    const location = useLocation();
  return (
      <AnimatePresence>
    <Routes location={location} key={location.pathname}>
    <Route path='/' exact element={<Home />} />
    <Route path='/skillset' element={<Skillset />} />
    <Route path='/education' element={<Education />} />
    <Route path='/projects' element={<Projects />} />
    <Route path='/contact' element={<Contactme />} />
  </Routes>
  </AnimatePresence>
  )
}

export default Aminaterouter