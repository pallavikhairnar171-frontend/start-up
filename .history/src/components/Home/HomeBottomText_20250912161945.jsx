import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-2 bg-red-500'>
        <Link className='text-[4vw] leading-[5vw] border-2 px-8 pt-1 pb-0 border-white rounded-3xl uppercase'>Home</Link>
         <Link className='text-[4vw] leading-[5vw] border-2 px-8 pt-1 pb-0 border-white rounded-3xl uppercase'>Product</Link>
          <Link className='text-[4vw] leading-[5vw] border-2 px-8 pt-1 pb-0 border-white rounded-3xl uppercase'>About</Link>
           <Link className='text-[4vw] leading-[5vw] border-2 px-8 pt-1 pb-0 border-white rounded-3xl uppercase'>Contact</Link>
    </div>
  )
}

export default HomeBottomText