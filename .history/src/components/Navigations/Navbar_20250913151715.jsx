import React from 'react'
import logo from '../../assets/logo.jpg'

const Navbar = () => {
  return (
  <div className='flex justify-between z-4S fixed items-start w-full'>
    <div  className='h-[3vw]'>
    <img src={logo} alt="" />
    </div>
    <div>

    </div>
  </div>
  )
}

export default Navbar