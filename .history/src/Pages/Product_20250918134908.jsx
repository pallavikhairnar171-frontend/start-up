import React from 'react'

const Product = () => {
  return (
    <div className='p-4'>
      <div className='bg-red-950 pt-[45vh]'>
        <h2 className='font-[font2] text-[8vw] uppercase'>Products</h2>
      </div>
      <div>
        <div className='w-full h-[800px] flex gap-1 bg-amber-200 -mt-10'>
          <div className='w-1/2 h-full bg-green-700'></div>
          <div className='w-1/2 h-full bg-blue-900'></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Product