import React from 'react'
import { createContext } from 'react'

const NavContext = ({children}) => {
    const NavBarContext=  createContext()
  return (
   <NavBarContext.Provider>
    {children}
   </NavBarContext.Provider>
  )
}

export default NavContext