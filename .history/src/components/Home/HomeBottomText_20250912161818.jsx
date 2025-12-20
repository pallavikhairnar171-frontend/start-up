import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-2 bg-red-500'>
        <Link className='text-[4vw] leading-[4vw] border-2 px-8 pt-1 pb-0 border-white rounded-full uppercase'>Home</Link>
         <Link className='text-[4vw] leading-[6vw] border-2 px-8 pt-1 pb-0 border-white rounded-full uppercase'>Product</Link>
          <Link className='text-[4vw] leading-[6vw] border-2 px-8 pt-1 pb-0 border-white rounded-full uppercase'>About</Link>
           <Link className='text-[4vw] leading-[6vw] border-2 px-8 pt-1 pb-0 border-white rounded-full uppercase'>Contact</Link>
    </div>
  )
}

export default HomeBottomText