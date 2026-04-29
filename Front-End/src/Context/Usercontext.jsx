import React from 'react'
import { createContext } from 'react'
import { useState } from "react";

export const UserDatacontext = createContext();

function Usercontext({children}) {
    const [user,setUser] = useState({
        email:'',
        fullname: {
            firstname:'',
            lastname:''
        }
    })
  return (
    <div>
        <UserDatacontext.Provider value={{user,setUser}}>
            {children}
        </UserDatacontext.Provider>
    </div>
  )
}

export default Usercontext