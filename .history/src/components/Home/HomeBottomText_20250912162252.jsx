import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-2'>
        <Link className='text-[3vw] leading-[5vw] border-2 px-5.5 pt-1 pb-0 border-white rounded-4xl uppercase'>Home</Link>
         <Link className='text-[3vw] leading-[5vw] border-2 px-5.5 pt-1 pb-0 border-white rounded-4xl uppercase'>Product</Link>
          <Link className='text-[3vw] leading-[5vw] border-2 px-5.5 pt-1 pb-0 border-white rounded-4xl uppercase'>About</Link>
           <Link className='text-[3vw] leading-[5vw] border-2 px-5.5 pt-1 pb-0 border-white rounded-4xl uppercase'>Contact</Link>
    </div>
  )
}

export default HomeBottomText