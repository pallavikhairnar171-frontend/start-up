import React from "react";
import { imageArray } from "../data.jsx/data";
import ProductCard from "../components/Product/ProductCard";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/all'

const Product = () => {
gsap.registerPlugin(ScrollTrigger)
  useGSAP(function() {

    gsap.from('.child',{
      height:'100px',
      stagger:{
        amount:0.4
      },
      scrollTrigger:{
        trigger:'.parrent',
        start:'top 100%',
        end:'top -550%',
        scrub:true
      }

    })
  })
 
  return (
    <div className="p-4">
      <div className=" pt-[45vh]">
        <h2 className="font-[font2] text-[6vw] text-black ">Products And Servises</h2>
      </div>
      <div className="lg:-mt-5 sm:mt-5 parrent">

        {imageArray.map((el,index)=>(
        
            <div className="child w-full  h-[700px] mb-4 flex gap-4">
              {index}
              <ProductCard className='sol' key={index} data={el} />
            </div>
          )
        )}
       
      </div>
    </div>
  );
};

export default Product;
