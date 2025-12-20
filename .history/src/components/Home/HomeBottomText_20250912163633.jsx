import React from "react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="font-[font2] flex items-center justify-center gap-2">
      <div className="h-44 flex items-center border-2 px-5.5 pt-1 pb-0 border-white rounded-4xl uppercase">
      <Link
        to={"/"}
        className="text-[3vw] leading-[5vw] "
      >
        Home
      </Link>

      </div>
      <Link
        to={"/product"}
        className="text-[3vw] leading-[5vw] border-2 px-5.5 pt-1 pb-0 border-white rounded-4xl uppercase"
      >
        Product
      </Link>
      <Link
        to={"/about"}
        className="text-[3vw] leading-[5vw] border-2 px-5.5 pt-1 pb-0 border-white rounded-4xl uppercase"
      >
        About
      </Link>
      <Link
        to={"/contact"}
        className="text-[3vw] leading-[5vw] border-2 px-5.5 pt-1 pb-0 border-white rounded-4xl uppercase"
      >
        Contact
      </Link>
    </div>
  );
};

export default HomeBottomText;
