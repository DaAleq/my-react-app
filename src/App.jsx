import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import CoursesPage from "./pages/CoursesPage.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import FantasySpace from "./pages/FantasySpace.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import ShopPage from "./pages/ShopPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/fantasy-space" element={<FantasySpace />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
