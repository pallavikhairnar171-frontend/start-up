import React from "react";
import prod from '../assets/product/'

const Product = () => {
  return (
    <div className="p-4">
      <div className="bg-red-950 pt-[45vh]">
        <h2 className="font-[font2] text-[8vw] uppercase">Products</h2>
      </div>
      <div>
        <div className="w-full  h-[700px] mb-4 flex gap-4 bg-amber-200 ">
          <div className="w-1/2 transition-all relative rounded-none hover:rounded-full overflow-hidden h-full bg-green-700">
          <img src="" alt="" />
          <div>
            <h2>Vitoe project</h2>
          </div>
          </div>
          <div className="w-1/2 h-full bg-blue-900"></div>
        </div>
         <div className="w-full h-[700px] mb-4 flex gap-4 bg-amber-200 ">
          <div className="w-1/2 h-full bg-green-700"></div>
          <div className="w-1/2 h-full bg-blue-900"></div>
        </div>
      </div>
    </div>
  );
};

export default Product;
