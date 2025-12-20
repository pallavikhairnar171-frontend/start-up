import React from "react";
import img from "../../assets/slider/img.jpg";
import img1 from "../../assets/slider/img1.jpg";
import img2 from "../../assets/slider/img2.jpg";
import img3 from "../../assets/slider/img3.jpg";
import img4 from "../../assets/slider/img4.jpg";

const NavbarPage = () => {
  return (
    <div id='fullScreen' className="h-screen py-40 w-full absolute bg-amber-950">
      <div id="all-linkk" className="">
        <div className="link  border-t-1 ">
          <h1 className="font-[font2]  text-[6vw] uppercase leading-[0.7] pt-4 text-center">Product</h1>
          <div className="absolute flex">
            <div className="flex overflow-auto  items-center">
              <h2 className="whitespace-nowrap font-[font2]  text-[6vw] uppercase leading-[0.7] pt-4 text-center">Pour top viss</h2>
              <img className="h-20 w-80 rounded-full object-cover" src={img} alt="" />
              <h2 className="whitespace-nowrap font-[font2]  text-[6vw] uppercase leading-[0.7] pt-4 text-center">Pour top viss</h2>
              <img className="h-20 w-80 rounded-full object-cover" src={img2} alt="" />
            </div>
            {/* <div>
              <h2>Pour top viss</h2>
              <img src={img} alt="" />
              <h2>Pour top viss</h2>
              <img src={img2} alt="" />
            </div> */}
          </div>
        </div>
        <div className="link  border-t-1 ">
          <h1 className="font-[font2]  text-[6vw] uppercase leading-[0.7] pt-4 text-center">About</h1>
          {/* <div>
            <div>
              <h2>Pour top viss</h2>
              <img src={img} alt="" />
              <h2>Pour top viss</h2>
              <img src={img2} alt="" />
            </div>
            <div>
              <h2>Pour top viss</h2>
              <img src={img} alt="" />
              <h2>Pour top viss</h2>
              <img src={img2} alt="" />
            </div>
          </div> */}
        </div>
        <div className="link  border-t-1 ">
          <h1 className="font-[font2]  text-[6vw] uppercase leading-[0.7] pt-4 text-center">Contact</h1>
          {/* <div>
            <div>
              <h2>Pour top viss</h2>
              <img src={img} alt="" />
              <h2>Pour top viss</h2>
              <img src={img2} alt="" />
            </div>
            <div>
              <h2>Pour top viss</h2>
              <img src={img} alt="" />
              <h2>Pour top viss</h2>
              <img src={img2} alt="" />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default NavbarPage;
