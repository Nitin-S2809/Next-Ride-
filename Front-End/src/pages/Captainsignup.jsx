import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from "react"
import { CaptainDatacontext } from '../Context/Captaincontext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Captainsignup() {

  const navigate = useNavigate()

  const [FirstName, setFirstName] = useState('')
  const [LastName, setLastName] = useState('')
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')

  const [VehicleColor, setVehicleColor] = useState('')
  const [VehiclePlate, setVehiclePlate] = useState('')
  const [VehicleCapacity, setVehicleCapacity] = useState('')
  const [VehicleType, setVehicleType] = useState('')

  const { captain, setCaptain } = React.useContext(CaptainDatacontext)

  const submitHandler = async (e) => {
    e.preventDefault()

    const captainData = {
      fullname: {
        firstname: FirstName,
        lastname: LastName
      },
      email: Email,
      password: Password,
      vehicle: {
        color: VehicleColor,
        plate: VehiclePlate,
        capacity: Number(VehicleCapacity),
        vehicleType: VehicleType
      }
    }

    try {

      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captains/register`,
        captainData
      )

      if (response.status === 201) {
        const data = response.data
        setCaptain(data.captain)
        localStorage.setItem('token', data.token)
        navigate('/captain-home')
      }

    } catch (error) {

      console.log("Full Error:", error)
      console.log("Backend Response:", error.response?.data)
      console.log("Validation Error:", error.response?.data?.error)

    }

    // Reset form
    setFirstName('')
    setLastName('')
    setEmail('')
    setPassword('')
    setVehicleColor('')
    setVehiclePlate('')
    setVehicleCapacity('')
    setVehicleType('')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/bg-image.png')] bg-cover bg-center relative text-white">

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 w-[90%] max-w-md backdrop-blur-xl bg-white/5 border border-white/20 rounded-2xl p-8 shadow-[0_0_40px_rgba(0,255,255,0.15)]">

        <div className="flex bg-white/5 rounded-full p-1 mb-8 border border-white/10">

          <Link
            to='/Captainlogin'
            className="w-1/2 text-center py-2 rounded-full text-gray-400 hover:text-white transition"
          >
            Captain-Login
          </Link>

          <Link className="w-1/2 text-center py-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium">
            Sign Up
          </Link>

        </div>

        <h2 className="text-2xl font-semibold text-center mb-1">
          Create Your Account
        </h2>

        <p className="text-gray-400 text-center mb-6">
          Join NextRide today!
        </p>

        <form className="space-y-4" onSubmit={submitHandler}>

          <input
            type="text"
            placeholder="First Name"
            required
            value={FirstName}
            onChange={(e)=>setFirstName(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-600"
          />

          <input
            type="text"
            placeholder="Last Name"
            required
            value={LastName}
            onChange={(e)=>setLastName(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-600"
          />

          <input
            type="email"
            placeholder="Email Address"
            required
            value={Email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-600"
          />

          <input
            type="password"
            placeholder="Set Password"
            required
            value={Password}
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-600"
          />

          <p className="text-cyan-400 font-semibold pt-2">
            Vehicle Information
          </p>

          <input
            type="text"
            placeholder="Vehicle Color"
            required
            value={VehicleColor}
            onChange={(e)=>setVehicleColor(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-600"
          />

          <input
            type="text"
            placeholder="Vehicle Plate Number"
            required
            value={VehiclePlate}
            onChange={(e)=>setVehiclePlate(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-600"
          />

          <input
            type="number"
            placeholder="Vehicle Capacity"
            required
            value={VehicleCapacity}
            onChange={(e)=>setVehicleCapacity(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-600"
          />

          <select
            required
            value={VehicleType}
            onChange={(e)=>setVehicleType(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-600 text-white"
          >
            <option value="" className="text-black">Select Vehicle Type</option>
            <option value="Bike" className="text-black">Bike</option>
            <option value="Car" className="text-black">Car</option>
            <option value="Auto" className="text-black">Auto</option>
          </select>

          <button
            type="submit"
            
            className="w-full py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 font-semibold hover:scale-105 transition"
          >
            Captain-Sign Up
          </button>

        </form>

      </div>
    </div>
  )
}

export default Captainsignup