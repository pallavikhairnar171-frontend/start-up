import React from 'react'
import logo from '../../assets/logo.jpg'

const Navbar = () => {
  return (
  <div className='flex justify-between z-4 fixed items-start w-full'>
    <div  className='h-30 w-30 p-1'>
    <img className='h-full w-full rounded-2xl' src={logo} alt="" />
    </div>
    <div>

    </div>
  </div>
  )
}

export default Navbar