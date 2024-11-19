import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import Navbar from './components/Navbar'
import Home from "./components/Home";
import Seo from "./components/digitalmarketing/seo/SeoMain";
import Main from "./components/digitalmarketing/digitalmarketing/Main";
import Ppc from "./components/digitalmarketing/ppc/PpcMain";

function App() {
  return (
    <>
      <div>
        {/* <Home /> */}
        {/* <Main /> */}
        {/* <Seo /> */}
        <Ppc />
      </div>
    </>
  );
}

export default App;
