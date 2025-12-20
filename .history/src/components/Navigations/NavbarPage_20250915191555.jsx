import React from "react";
import img from "../../assets/slider/img.jpg";
import img1 from "../../assets/slider/img1.jpg";
import img2 from "../../assets/slider/img2.jpg";
import img3 from "../../assets/slider/img3.jpg";
import img4 from "../../assets/slider/img4.jpg";

const NavbarPage = () => {
  return (
    <div id='fullScreen' className="h-screen w-full absolute bg-amber-950">
      <div id="all-linkk">
        <div className="link mt-[20vw]">
          <h1>Product</h1>
          <div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarPage;
