import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './homeComponents/Home'
import SignUp from './SignUp'
function App() {
  return (
    <>
    <div className="app">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
    </>
  )
}

export default App
  