import React from "react";
import img from "../../assets/slider/img.jpg";
import img1 from "../../assets/slider/img1.jpg";
import img2 from "../../assets/slider/img2.jpg";
import img3 from "../../assets/slider/img3.jpg";
import img4 from "../../assets/slider/img4.jpg";

import logo from "../../assets/logo.jpg";

const NavbarPage = () => {
  return (
    <div
      id="fullScreen"
      className="h-screen overflow-x-hidden  w-full absolute bg-black"
    >
      <div className="flex w-full p-5 justify-between items-start">
        <div className="h-35 w-35 p-1">
          <img className="h-full w-full rounded-2xl" src={logo} alt="" />
        </div>
        <div className="h-35 w-35 bg-red-950">
          <div></div>
          <div></div>
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
  );
};

export default NavbarPage;
