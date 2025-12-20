import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-2 bg-red-500'>
        <Link className='text-[4vw] border-2 px-8 border-white rounded-2xl uppercase'>Home</Link>
         <Link className='text-[4vw] border-2 px-8 border-white rounded-2xl uppercase'>Product</Link>
          <Link className='text-[4vw] border-2 px-8 border-white rounded-2xl uppercase'>About</Link>
           <Link className='text-[4vw] border-2 px-8 border-white rounded-2xl uppercase'>Contact</Link>
    </div>
  )
}

export default HomeBottomText