import React, { useRef } from "react";
import logo from "../../assets/logo.jpg";

const Navbar = () => {
  const hoverDiv = useRef(null);
  return (
    <div className="flex justify-between z-4 fixed items-start w-full">
      <div className="h-35 w-35 p-1">
        <img className="h-full w-full rounded-2xl" src={logo} alt="" />
      </div>
      <div
        onMouseEnter={() => {
          hoverDiv.current.style.height = "100%";
        }}
        onMouseLeave={() => {
          hoverDiv.current.style.height = "0%";
        }}
        className="h-10 relative bg-black w-60"
      >
        <div
          ref={hoverDiv}
          className="bg-red-200 transition-all absolute top-0 h-0 w-full"
        ></div>
        <div className=" relative flex flex-col gap-4">
          <div className="w-20 h-0.5 bg-white"></div>
          <div className="w-12 h-0.5 bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
