import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Plan from "./Plan";
import ScrollToHash from "./ScrollToHash";
import Stats from "./Stats";
import "./App.css"; // Ensure global styles are imported
import Reviews from "./Reviews";
const App = () => {
  return (
    <>
      <Navbar />
      <ScrollToHash /> {/* ✅ This handles scrolling on hash links */}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div id="home"><Home /></div>
              <div id="about"><About /></div>
              <div id="services"><Services /></div>
              <div id="stats"><Stats /></div>
              <div id="reviews"><Reviews/></div>
              <div id="contact"><Contact /></div>
              
              
            </>
          }
        />
        <Route path="/plan" element={<Plan />} />
      </Routes>
    </>
  );
};

export default App;
