import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    <div className="text-white ">
      <div className="h-screen w-full flex fixed z-20 top-0">
        <div className="anim h-full w-1/5 bg-black"></div>
        <div className="anim h-full w-1/5 bg-black"></div>
        <div className="anim h-full w-1/5 bg-black"></div>
        <div className="anim h-full w-1/5 bg-black"></div>
        <div className="anim h-full w-1/5 bg-black"></div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
