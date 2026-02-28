import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Features from "./pages/Features";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import SafeMap from "./pages/SafeMap";
import SOS from "./pages/SOS";
import TrustedNetwork from "./pages/TrustedNetwork";
import CompanyRatings from "./pages/CompanyRatings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/safemap" element={<SafeMap />} />
        <Route path="/sos" element={<SOS />} />
        <Route path="/trusted-network" element={<TrustedNetwork />} />
        <Route path="/company-ratings" element={<CompanyRatings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;