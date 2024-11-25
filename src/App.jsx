import Navbar from "./components/Navbar";
import AboutUs from "./components/company/AboutUs";
import OurCoreValues from "./components/company/OurCoreValues";
import VisionAndMission from "./components/company/VisionAndMission";
import WhatMakesUsDifferent from "./components/company/WhatMakesUsDifferent";
import StaffingServices from "./components/company/staffingServices/StaffingServices";

function App() {
  return (
    <>
      <Navbar />
      {/* <AboutUs /> */}
      {/* <VisionAndMission /> */}
      {/* <WhatMakesUsDifferent /> */}
      {/* <OurCoreValues /> */}
      <StaffingServices />
    </>
  );
}

export default App;
