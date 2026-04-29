import React, {useContext, useState}from 'react'
import { captainDatacontext } from '../Context/Captaincontext'

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function CaptainProtectedWrapper({ children }) {

  const navigate = useNavigate();
  const {captain , setCaptain} = useContext(captainDatacontext);
  const [isLoading , setisLoading] = useState(true);
  const token = localStorage.getItem('token');

  useEffect(() => {
    if(!token){
      navigate('/captainlogin');
    }
  }, [token, navigate]);
  axios.get(`${import.meta.env.VITE_BASE_URL}/captains/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
  .then((response) => {
    if(response.status === 200) {
      
      setCaptain(response.data.captain);
      setisLoading(false);
    }
  })
  .catch((error) => {
    console.error('Error fetching captain data:', error);
    localStorage.removeItem('token');
    navigate('/captainlogin');
    setisLoading(false);
  });


  if(isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {children}
    </>
  )
}

export default UserProtectedWrapper;