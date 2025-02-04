import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import BackGround from './Pages/BackGround'
import Slideer from './Pages/Slideer'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/background' element={<BackGround />} />
          <Route path='/slider' element={<Slideer />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App