import React, {  } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navbar from "./components/Navigations/Navbar";
import NavbarPage from "./components/Navigations/NavbarPage";

const App = () => {
 
  return (
    <div className="text-white ">
      {/* <Navbar /> */}

      <NavbarPage></NavbarPage>

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
    </div>
  );
};

export default App;
