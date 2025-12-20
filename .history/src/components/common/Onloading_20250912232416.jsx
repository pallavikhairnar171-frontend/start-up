import React from 'react'

const Onloading = () => {
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