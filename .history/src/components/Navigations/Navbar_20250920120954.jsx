import React, { use, useContext, useRef } from "react";
import logo from "../../assets/logo.jpg";
import { NavBarContext } from "../../context/NavContext";

const Navbar = () => {
  const hoverDiv = useRef(null);
  const [openNav, setOpenNav] = useContext(NavBarContext);
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
        className="h-10 relative bg-slate-800 w-60"
      >
        <div
          ref={hoverDiv}
          className="bg-slate-400 transition-all absolute top-0 h-0 w-full"
        ></div>
        <div className=" relative h-full px-12 flex flex-col justify-center items-end gap-1" onClick={()=>setOpenNav(true)}>
          <div className="w-18 h-0.5 bg-white"></div>
          <div className="w-10 h-0.5 bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
