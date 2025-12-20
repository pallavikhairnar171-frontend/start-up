import React from "react";
import { imageArray } from "../data.jsx/data";
import ProductCard from "../components/Product/ProductCard";

const Product = () => {
 
  return (
    <div className="p-4">
      <div className="bg-red-950 pt-[45vh]">
        <h2 className="font-[font2] text-[8vw] camalcase">Products an</h2>
      </div>
      <div>

        {imageArray.map((el,index)=><ProductCard key={index} data={el} />)}
       
      </div>
    </div>
  );
};

export default Product;
