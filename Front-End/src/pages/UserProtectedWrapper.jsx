import React, {useContext}from 'react'
import { UserDatacontext } from '../Context/Usercontext'

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function UserProtectedWrapper({ children }) {

  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if(!token){
      navigate('/Userlogin');
    }
  }, [token, navigate]);

  return (
    <>
      {children}
    </>
  )
}

export default UserProtectedWrapper;