// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Navbar from './components/Navbar'
// import Home from './components/Home'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AdvancedTech from './components/OtherTechnology/AdvancedTech'
import Navbar from './components/Navbar'
import AboutUs from './components/company/AboutUs'

// import CloudTech from './components/OtherTechnology/CloudTech/CloudTech'
// import Testing from './components/OtherTechnology/Testing/Testing'
// import AiandMl from './components/OtherTechnology/Ai&Ml/AiandMl'
// import Aws from './components/OtherTechnology/CloudTech/Aws'

function App() {
 

  return (
    <>
      {/* <div>
      <Router>
      <div>
        <Navbar /> 

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/othertech" element={<AdvancedTech />} />
          <Route path="/cloudtech" element={<CloudTech />} />
          <Route path="/testing" element={<Testing />} />
          <Route path="/ai&ml" element={<AiandMl />} />
          <Route path="/aws" element={<Aws />} />
         
        </Routes>
      </div>
    </Router>
      </div> */}
      <>
      <Navbar />
      <AboutUs />
      </>
     
    </>
  )
}

export default App
