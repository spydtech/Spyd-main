import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Ecommerce_sol from "./Ecommerce_sol";
import MagentoDetails from "./MagentoDetails";
import MobileDetails from "./MobileDetails";
import EcommerceDeatils from "./EcommerceDeatils";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Ecommerce_sol />} />
        <Route path="/magento-details" element={<MagentoDetails />} />
        <Route path="/mobile-details" element={<MobileDetails />} />
        <Route path="/ecommerce-details" element={<EcommerceDeatils />} />
      </Routes>
    </Router>
  );
}

export default App;
