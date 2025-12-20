import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";

const Onloading = (props) => {
  const animParentRef = useRef(null);
  const childDivRef =useRef(null);
  const currentPath =useLocation().pathname
  console.log(currentPath ,props);
  useGSAP(function () {
    if(props.data == 'pallavi'){
       const tl = gsap.timeline();
    tl.to(animParentRef.current, {
      display: "block",
    });
    tl.from(".anim", {
      height: 0,
      stagger: {
        amount: -0.25,
      },
    });
    tl.to(".anim", {
      y: "100%",
      duration: 1,
      stagger: {
        amount: -0.25,
      },
    });
    tl.to(animParentRef.current, {
      display: "none",
    });
    tl.to(".anim", {
      y: "0%",
    });
    gsap.from(childDivRef.current,{
      opacity:0,
      delay:1.3,
      scale:1.2
    })
  }
   
  },[currentPath]);

  return (
    <div>
      <div ref={animParentRef} className="h-screen w-full  fixed z-20 top-0">
        <div className="h-full w-full flex  ">
          <div className="anim h-full w-1/5 bg-black"></div>
          <div className="anim h-full w-1/5 bg-black"></div>
          <div className="anim h-full w-1/5 bg-black"></div>
          <div className="anim h-full w-1/5 bg-black"></div>
          <div className="anim h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div ref={childDivRef}>
        { props.children}
      </div>
    </div>
  );
};

export default Onloading;
