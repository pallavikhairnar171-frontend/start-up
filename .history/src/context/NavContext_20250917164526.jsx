import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const NavBarContext=  createContext()
const NavContext = ({children}) => {
    const [navShoe, setNavShow] = useState(false)
  return (
    <div>
   <NavBarContext.Provider value={ [navShoe, setNavShow]}>
    {children}
   </NavBarContext.Provider>

    </div>
  )
}

export default NavContext