import React from "react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="font-[font2] flex items-center justify-center gap-2 mb-2">
      <div className="h-15 hover:border-red-950 hover:text-red-950 flex items-center border-2 px-6 pt-1 pb-0 border-white rounded-4xl uppercase">
        <Link to={"/"} className="text-[3vw] leading-[5vw] ">
          Home
        </Link>
      </div>
      <div className="h-15 hover:border-red-950 hover:text-red-950 flex items-center border-2 px-6 pt-1 pb-0 border-white rounded-4xl uppercase">
        <Link
          to={"/product"}
          className="text-[3vw] leading-[5vw] "
        >
          Product
        </Link>{" "}
      </div>
      <div className="h-15 hover:border-red-950 hover:text-red-950 flex items-center border-2 px-6 pt-1 pb-0 border-white rounded-4xl uppercase">
        <Link
          to={"/about"}
          className="text-[3vw] leading-[5vw] "
        >
          About
        </Link>{" "}
      </div>
      <div className="h-15 hover:border-red-950 hover:text-red-950 flex items-center border-2 px-6 pt-1 pb-0 border-white rounded-4xl uppercase">
        <Link
          to={"/contact"}
          className="text-[3vw] leading-[5vw] "
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default HomeBottomText;
