import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-2 bg-red-500'>
        <Link className='text-[4vw] border-2 p-2 border-white rounded-full uppercase'>Home</Link>
    </div>
  )
}

export default HomeBottomText