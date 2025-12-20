import React,{useRef} from 'react'
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'


const Onloading = () => {
     const animParentRef = useRef(null)
useGSAP(function(){
  // const tl = gsap.timeline
  gsap.to(animParentRef.current,{
    display:'block'
  })
  gsap.from('.anim',{
    height:0,
     duration: 1,
    // duration:3,
    stagger:{
      amount:-0.25
    }
  })
 gsap.to('.anim',{
    y:'100%',
    // duration:3,
     duration: 1,
    stagger:{
      amount:-0.25
    }
  })
  gsap.to(animParentRef.current,{
    display:'none'
  })
  gsap.to('.anim',{
    y:'0%'
  })
})

  return (
    <div ref={animParentRef} className="h-screen w-full  fixed z-20 top-0">
      <div className="h-full w-full flex  ">
        <div className="anim h-full w-1/5 bg-black"></div>
        <div className="anim h-full w-1/5 bg-black"></div>
        <div className="anim h-full w-1/5 bg-black"></div>
        <div className="anim h-full w-1/5 bg-black"></div>
        <div className="anim h-full w-1/5 bg-black"></div>
      </div>

      </div>
  )
}

export default Onloading