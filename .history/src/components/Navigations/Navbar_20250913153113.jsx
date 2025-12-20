import React from "react";
import logo from "../../assets/logo.jpg";

const Navbar = () => {
  return (
    <div className="flex justify-between z-4 fixed items-start w-full">
     
      <div className="h-35 w-35 p-1">
        <img className="h-full w-full rounded-2xl" src={logo} alt="" />
      </div>
      <div className="h-10 bg-black w-60">
        <div className="bg-red-950 absolute top-0 h-0 w-full"></div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default Navbar;
