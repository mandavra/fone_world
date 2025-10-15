import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import SERVICES from "./Pages/SERVICES";
import UNLOCKING_PHONE from "./Pages/UNLOCKING_PHONE";
import BUY from "./Pages/BUY";
import BLOG from "./Pages/BLOG";
import BlogDetail from "./Pages/BlogDetail";
import CONTACT_US from "./Pages/CONTACT_US";
import SMARTPHONE_REPAIR from "./Pages/SMARTPHONE_REPAIR";
import LAPTOP_REPAIR from "./Pages/LAPTOP_REPAIR";
import TABLET_REPAIR from "./Pages/TABLET_REPAIR";
import SMARTWATCH_REPAIR from "./Pages/SMARTWATCH_REPAIR";
import IPHONE_REPAIR_SERVICE from "./Pages/IPHONE_REPAIR_SERVICE";
import SARNGSUNG_MOBILE_REPAIR_SERVICE from "./Pages/SARNGSUNG_MOBILE_REPAIR_SERVICE";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<SERVICES />} />
        <Route path="/unlocking-phone" element={<UNLOCKING_PHONE />} />
        <Route path="/buy-sell" element={<BUY />} />
        <Route path="/blog" element={<BLOG />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/contact-us" element={<CONTACT_US />} />
        <Route path="/smartphone-repair" element={<SMARTPHONE_REPAIR />} />
        <Route path="/laptop-repair" element={<LAPTOP_REPAIR />} />
        <Route path="/tablet-repair" element={<TABLET_REPAIR />} />
        <Route path="/smartwatch-repair" element={<SMARTWATCH_REPAIR />} />
        <Route path="/iphone-repair-service" element={<IPHONE_REPAIR_SERVICE />} />
        <Route path="/sarnsung-mobile-repair-service" element={<SARNGSUNG_MOBILE_REPAIR_SERVICE />} />

      </Routes>
    </>
  );
}

export default App;
