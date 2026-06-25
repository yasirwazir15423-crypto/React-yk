import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Page/Home'
import About from './Page/About'
import Contact from './Page/Contact'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <div>
     
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
