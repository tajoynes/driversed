import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
//->View Page Imports
import Home from "./views/Home";
import Contact from "./views/Contact";
import Services from "./views/Services";
//-> React-Boostrap
import "bootstrap/dist/css/bootstrap.min.css";
//-> CSS
import "./App.css";

function App() {
  const location = useLocation();
  return (
    <div className="app-wrapper">
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
