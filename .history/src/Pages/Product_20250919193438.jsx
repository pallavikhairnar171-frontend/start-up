import React from "react";
import { imageArray } from "../data.jsx/data";
import ProductCard from "../components/Product/ProductCard";

const Product = () => {
 
  return (
    <div className="p-4">
      <div className=" pt-[45vh]">
        <h2 className="font-[font2] text-[6vw] text-black ">Products And Servises</h2>
      </div>
      <div className="-mt-5 parrent">

        {imageArray.map((el,index)=>
        {return(

        <div>
          <ProductCard key={index} data={el} />)

        </div>
        )
          }
       
      </div>
    </div>
  );
};

export default Product;
