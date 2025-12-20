import React from "react";
import prod from '../assets/product/prod.png'

import ProductCard from "../components/Product/ProductCard";

const Product = () => {
  const prodArray=[
    
  ]
  return (
    <div className="p-4">
      <div className="bg-red-950 pt-[45vh]">
        <h2 className="font-[font2] text-[8vw] uppercase">Products</h2>
      </div>
      <div>
       
       <ProductCard />
      </div>
    </div>
  );
};

export default Product;
