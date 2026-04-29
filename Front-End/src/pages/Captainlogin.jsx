import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import { CaptainDatacontext } from '../Context/Captaincontext';

function Captainlogin() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const { captain, setCaptain } = React.useContext(CaptainDatacontext);
  const navigate = useNavigate();

    const submitHandler = async (e) => {
      e.preventDefault();
      const Captain = {
        email:email,
        password:password
      }

      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, Captain);
      if(response.status === 200) {
        const data = response.data;
        setCaptain(data.Captain);
        localStorage.setItem('captainToken', data.token);
        navigate('/captain-home');

      }
      setEmail('');
      setPassword('');
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/bg-image.png')] bg-cover bg-center bg-no-repeat relative">

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 px-6 md:px-12 py-6">
        <h1 className="text-2.5xl md:text-5xl font-bold tracking-wide">
          <span className="text-cyan-400">N</span>
          <span className="text-white">ext</span>
          <span className="text-cyan-400">R</span>
          <span className="text-white">ide</span>
        </h1>
      </div>

      {/* Glass Card */}
      <div className="relative z-10 w-[90%] max-w-md bg-white/10 backdrop-blur-xl border border-cyan-400/30 rounded-2xl p-8 shadow-[0_0_40px_rgba(0,255,255,0.15)]">

        {/* Logo */}
        <div className="flex bg-white/5 rounded-full p-1 mb-8 border border-white/10">
                  
          <Link
            to='/Captainlogin'
            className="w-1/2 text-center py-2 rounded-full  bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium">
            Captain-Login
          </Link>
        
          <Link to='/Captainsignup' className="w-1/2 text-center py-2 text-gray-400 hover:text-white transition rounded-full">
            Sign Up
          </Link>
        
        </div>
        

        {/* Welcome Text */}
        <h2 className="text-3xl font-semibold text-white text-center mb-2">
          Welcome Back!
        </h2>

        <p className="text-gray-300 text-center mb-6">
          Login to your captain account
        </p>

        {/* Form */}
        <form className="space-y-5" onSubmit={(e)=> {
          submitHandler(e);
        }}>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e)=> {
                setEmail(e.target.value)
              }}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 outline-none transition duration-300 text-white placeholder-gray-400"
            />
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e)=> {
                setPassword(e.target.value)
              }}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 outline-none transition duration-300 text-white placeholder-gray-400"
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right text-sm text-gray-400 hover:text-cyan-400 cursor-pointer transition">
            Forgot Password?
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-semibold text-lg hover:scale-105 transition duration-300 shadow-[0_0_25px_rgba(0,255,255,0.4)]"
          >
            Captain-Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-600"></div>
          <span className="px-3 text-gray-400 text-sm">OR</span>
          <div className="flex-grow border-t border-gray-600"></div>
        </div>

        {/* Social Buttons */}
        <div className="flex gap-4">
          <button className="flex-1 py-2 text-white rounded-lg border border-gray-600 hover:border-cyan-400 hover:bg-white/5 transition">
            Google
          </button>
          <button className="flex-1 py-2 text-white rounded-lg border border-gray-600 hover:border-cyan-400 hover:bg-white/5 transition">
            Facebook
          </button>
        </div>

        {/* Signup Link */}
        <p className="text-center text-gray-400 mt-6 text-sm">
          Don’t have an account?{" "}
          <Link to='/Captainsignup' className="text-cyan-400 hover:underline cursor-pointer">
            Captain-Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}





export default Captainlogin