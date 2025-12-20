import React, { useRef } from "react";
import img from "../../assets/slider/img.jpg";
import img1 from "../../assets/slider/img1.jpg";
import img2 from "../../assets/slider/img2.jpg";
import img3 from "../../assets/slider/img3.jpg";
import img4 from "../../assets/slider/img4.jpg";

import logo from "../../assets/logo.jpg";
import Onloading from "../common/Onloading";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'

const NavbarPage = () => {
  const fullScreenNav=useRef(null)
 useGSAP(function () {
   
       const tl = gsap.timeline();
   
    tl.from(".animi", {
      
      height: 0,
      stagger: {
        amount: -0.25,
      },
    });
   tl.from(fullScreenNav.current,{
    opacity:1,
    rotationX:
   })
  
   
   
  });


  return (
    <div
      id="fullScreen"
      className="h-screen overflow-hidden  w-full absolute bg-black"
    >
      <div className="h-screen w-full fixed">
        <div className="h-full w-full flex  ">
          <div className="animi h-full w-1/5 bg-white"></div>
          <div className="animi h-full w-1/5 bg-black"></div>
          <div className="animi h-full w-1/5 bg-white"></div>
          <div className="animi h-full w-1/5 bg-black"></div>
          <div className="animi h-full w-1/5 bg-white"></div>
        </div>
      </div>
      <div ref={fullScreenNav} className="relative">
        <div className="flex w-full p-5 justify-between items-start">
          <div className="h-35 w-35 p-1">
            <img className="h-full w-full rounded-2xl" src={logo} alt="" />
          </div>
          <div className="h-28 relative  w-28 cursor-pointer">
            <div className="h-40 w-0.5 -rotate-45 origin-top absolute bg-white"></div>
            <div className="h-40 w-0.5 right-0 rotate-45 origin-top absolute bg-white"></div>
          </div>
        </div>
        <div id="all-linkk" className="py-40">
          <div className="link relative transition-all  border-t-1 ">
            <h1 className="font-[font2]  text-[6vw] uppercase leading-[0.7] pt-4 text-center">
              Product
            </h1>
            <div className="absolute moveLink top-0 flex">
              <div className="moveX flex bg-amber-950   items-center">
                <h2 className="whitespace-nowrap font-[font2]  text-[6vw] uppercase leading-[0.7] pt-4 text-center">
                  Pour top viss
                </h2>
                <img
                  className="h-18 w-60 shrink-0 rounded-full object-cover"
                  src={img}
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2]  text-[6vw] uppercase leading-[0.7] pt-4 text-center">
                  Pour top viss
                </h2>
                <img
                  className="h-18 w-60 shrink-0 rounded-full object-cover"
                  src={img2}
                  alt=""
                />
              </div>

              <div className="moveX flex bg-amber-950   items-center">
                <h2 className="whitespace-nowrap font-[font2]  text-[6vw] uppercase leading-[0.7] pt-4 text-center">
                  Pour top viss
                </h2>
                <img
                  className="h-18 w-60 shrink-0 rounded-full object-cover"
                  src={img1}
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2]  text-[6vw] uppercase leading-[0.7] pt-4 text-center">
                  Pour top viss
                </h2>
                <img
                  className="h-18 w-60 shrink-0 rounded-full object-cover"
                  src={img3}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="link relative  border-t-1 ">
            <h1 className="font-[font2]  text-[6vw] uppercase leading-[0.7] pt-4 text-center">
              About
            </h1>
            <div className="absolute moveLink top-0 flex">
              <div className="moveX flex bg-amber-950   items-center">
                <h2 className="whitespace-nowrap font-[font2]  text-[6vw] uppercase leading-[0.7] pt-4 text-center">
                  Pour top viss
                </h2>
                <img
                  className="h-18 w-60 shrink-0 rounded-full object-cover"
                  src={img}
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2]  text-[6vw] uppercase leading-[0.7] pt-4 text-center">
                  Pour top viss
                </h2>
                <img
                  className="h-18 w-60 shrink-0 rounded-full object-cover"
                  src={img2}
                  alt=""
                />
              </div>
              <div className="moveX flex bg-amber-950   items-center">
                <h2 className="whitespace-nowrap font-[font2]  text-[6vw] uppercase leading-[0.7] pt-4 text-center">
                  Pour top viss
                </h2>
                <img
                  className="h-18 w-60 shrink-0 rounded-full object-cover"
                  src={img1}
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2]  text-[6vw] uppercase leading-[0.7] pt-4 text-center">
                  Pour top viss
                </h2>
                <img
                  className="h-18 w-60 shrink-0 rounded-full object-cover"
                  src={img3}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="link relative  border-y-1 ">
            <h1 className="font-[font2]  text-[6vw] uppercase leading-[0.7] pt-4 text-center">
              Contact
            </h1>
            <div className="absolute moveLink top-0 flex">
              <div className="moveX flex bg-amber-950   items-center">
                <h2 className="whitespace-nowrap font-[font2]  text-[6vw] uppercase leading-[0.7] pt-4 text-center">
                  Pour top viss
                </h2>
                <img
                  className="h-18 w-60 shrink-0 rounded-full object-cover"
                  src={img}
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2]  text-[6vw] uppercase leading-[0.7] pt-4 text-center">
                  Pour top viss
                </h2>
                <img
                  className="h-18 w-60 shrink-0 rounded-full object-cover"
                  src={img2}
                  alt=""
                />
              </div>
              <div className="moveX flex bg-amber-950   items-center">
                <h2 className="whitespace-nowrap font-[font2]  text-[6vw] uppercase leading-[0.7] pt-4 text-center">
                  Pour top viss
                </h2>
                <img
                  className="h-18 w-60 shrink-0 rounded-full object-cover"
                  src={img1}
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2]  text-[6vw] uppercase leading-[0.7] pt-4 text-center">
                  Pour top viss
                </h2>
                <img
                  className="h-18 w-60 shrink-0 rounded-full object-cover"
                  src={img3}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarPage;
