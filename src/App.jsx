import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Navbar from './components/Navbar'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
 

  return (
    <>
      <div>
      <Router>
      <div>
        {/* <Navbar />  */}

        <Routes>
          <Route path="/" element={<Home />} />
         
        </Routes>
      </div>
    </Router>
      </div>
     
    </>
  )
}

export default App
