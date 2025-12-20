import React from 'react'
import logo from '../../assets/logo.jpg'

const Navbar = () => {
  return (
  <div className='flex justify-between z-4 fixed items-start w-full'>
    <div  className='h-[3vw] w-[4vw]'>
    <img className='h-full w-full' src={logo} alt="" />
    </div>
    <div>

    </div>
  </div>
  )
}

export default Navbar