import React from 'react'
import { createContext } from 'react'

const NavContext = ({children}) => {
    const NavBarContext=  createContext()
  return (
    <div>
   <NavBarContext.Provider>
    {children}
   </NavBarContext.Provider>

    </div>
  )
}

export default NavContext