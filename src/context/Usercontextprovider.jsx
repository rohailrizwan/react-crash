import React, { useState } from 'react'
import Usercontext from './Usercontext'
const Usercontextprovider=({children})=> {
    const [user,setUser]=useState()
  return (
    <Usercontext.Provider value={{user,setUser}}>
        {children}
    </Usercontext.Provider>
  )
}

export default Usercontextprovider
