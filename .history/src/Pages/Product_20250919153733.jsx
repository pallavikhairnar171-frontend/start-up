import React from "react";
import prod from '../assets/product/prod.png'

const Product = () => {
  return (
    <div className="p-4">
      <div className="bg-red-950 pt-[45vh]">
        <h2 className="font-[font2] text-[8vw] uppercase">Products</h2>
      </div>
      <div>
        <div className="w-full  h-[700px] mb-4 flex gap-4 bg-amber-200 ">
          <div className="w-1/2 group transition-all relative rounded-none hover:rounded-[70px] overflow-hidden h-full bg-green-700">
          <img className="h-full w-full object-cover " src="" alt="" />
          <div className="opacity-0 transition-all group-hover:opacity-100 absolute top-0 flex  items-center justify-center left-0 w-full  h-full">
            <h2 className="uppercase text-3xl font-[font1]  border-4 pt-4 px-8 text-white border-white rounded-full">Vitoe project</h2>
          </div>
          </div>
          <div className="w-1/2 h-full transition-all relative rounded-none hover:rounded-full overflow-hidden bg-blue-900"></div>
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
