import React, { useRef } from "react";
import img from "../../assets/slider/img.jpg";
import img1 from "../../assets/slider/img1.jpg";
import img2 from "../../assets/slider/img2.jpg";
import img3 from "../../assets/slider/img3.jpg";
import img4 from "../../assets/slider/img4.jpg";

import logo from "../../assets/logo.jpg";
import Onloading from "../common/Onloading";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useContext } from "react";
import NavContext, { NavBarContext } from "../../context/NavContext";

const NavbarPage = () => {
  const [navOpen, SetNavOpen] = useContext(NavBarContext);
  console.log(navOpen, "========");
  const fullScreenNav = useRef(null);
  const fullScreenDiv = useRef(null);
  
  const gsapAnimation = ()=>{
    const tl = gsap.timeline()
     tl.from(".animi", {
        delay: 0.5,
        height: 0,
        stagger: {
          amount: -0.2,
        },
      });
      tl.from(fullScreenNav.current, {
        opacity: 0,
      });
      tl.from(".link", {
        opacity: 0,
        rotateX: 90,
        stagger: {
          amount: -0.25,
        },
      });
      tl.from('.nav_link',{
        opacity:0
      })
  }

    const gsapAnimationRevers = ()=>{
    const tl = gsap.timeline()
    console.log(1)
      tl.from(".link", {
        opacity: 0,
        rotateX: 90,
        stagger: {
          amount: -0.25,
        },
      });
      //  console.log(2)
    //  tl.from(".animi", {
    //     delay: 0.5,
    //     height: 0,
    //     stagger: {
    //       amount: -0.2,
    //     },
    //   });
      //  console.log(3)
      // tl.from(fullScreenNav.current, {
      //   opacity: 0,
      // });
     console.log(4)
      // tl.from('.nav_link',{
      //   opacity:0
      // })
       gsap.to('.fullScreen_Nav',{
        delay:1.5,
          display:'none'
        })
  }

  useGSAP(
    function () {
      // const tl = gsap.timeline();
      if (navOpen) {
        gsap.to('.fullScreen_Nav',{
          display:'block'
        })
        gsapAnimation();
        // fullScreenDiv.current.style.display = "block";
      } else {
        gsapAnimationRevers()
        
        // fullScreenDiv.current.style.display = "none";
      }
    },
    [navOpen]
  );

  return (
    <div
      ref={fullScreenDiv}
      id="fullScreen"
      className="hidden fullScreen_Nav h-screen z-50 overflow-hidden  w-full absolute bg-black"
    >
      <div className="h-screen w-full fixed">
        <div className="h-full w-full flex  ">
          <div className="animi h-full w-1/5 bg-black"></div>
          <div className="animi h-full w-1/5 bg-black"></div>
          <div className="animi h-full w-1/5 bg-black"></div>
          <div className="animi h-full w-1/5 bg-black"></div>
          <div className="animi h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div ref={fullScreenNav} className="relative">
        <div className="nav_link flex w-full p-5 justify-between items-start">
          <div className="h-35 w-35 p-1">
            <img className="h-full w-full rounded-2xl" src={logo} alt="" />
          </div>
          <div
            className="h-28 relative  w-28 cursor-pointer"
            onClick={() => SetNavOpen(false)}
          >
            <div className="h-40 w-0.5 -rotate-45 origin-top absolute bg-white"></div>
            <div className="h-40 w-0.5 right-0 rotate-45 origin-top absolute bg-white"></div>
          </div>
        </div>
        <div id="all-linkk" className="py-40">
          <div className="link origin-top relative  border-t-1 ">
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
          <div className="link origin-top relative  border-t-1 ">
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
          <div className="link origin-top relative  border-y-1 ">
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
