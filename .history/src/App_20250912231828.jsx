import React, { useRef } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'

const App = () => {
  const animParentRef = useRef(null)
useGSAP(function(){
  // const tl = gsap.timeline
  gsap.to(animParentRef.current,{
    display:'block'
  })
  gsap.from('.anim',{
    height:0,
    // duration:3,
    stagger:{
      amount:-35
    }
  })
 gsap.to('.anim',{
    y:'100%',
    // duration:3,
     
    stagger:{
      amount:-35
    }
  })
  gsap.to(animParentRef.current,{
    display:'none'
  })
  gsap.to('.anim',{
    y:'0%'
  })
})

  return (
    <div className="text-white ">
      <div ref={animParentRef} className="h-screen w-full  fixed z-20 top-0">
      <div className="h-full w-full flex  ">
        <div className="anim h-full w-1/5 bg-black"></div>
        <div className="anim h-full w-1/5 bg-black"></div>
        <div className="anim h-full w-1/5 bg-black"></div>
        <div className="anim h-full w-1/5 bg-black"></div>
        <div className="anim h-full w-1/5 bg-black"></div>
      </div>

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
