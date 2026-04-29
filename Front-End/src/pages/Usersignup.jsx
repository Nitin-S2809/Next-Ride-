import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDatacontext } from "../Context/Usercontext";

function Usersignup() {

  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const navigate = useNavigate();
  const { user, setUser } = useContext(UserDatacontext);

  const submitHandler = async (e) => {
    e.preventDefault();

    const newUser = {
      fullname: {
        firstname: FirstName,
        lastname: LastName
      },
      email: Email,
      password: Password
    };

    try {

      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/register`,
        newUser
      );

      if (response.status === 201) {

        const data = response.data;


        setUser(data.user);
        localStorage.setItem('token' , data.token);

        navigate("/");
      }

    } catch (error) {
      console.error("Signup error:", error.response?.data || error.message);
      alert("Signup failed. Check console.");
    }

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/bg-image.png')] bg-cover bg-center relative text-white">

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 w-[90%] max-w-md backdrop-blur-xl bg-white/5 border border-white/20 rounded-2xl p-8 shadow-[0_0_40px_rgba(0,255,255,0.15)]">

        <div className="flex bg-white/5 rounded-full p-1 mb-8 border border-white/10">

          <Link
            to="/Userlogin"
            className="w-1/2 text-center py-2 rounded-full text-gray-400 hover:text-white transition"
          >
            Login
          </Link>

          <Link
            to="/Captainsignup"
            className="w-1/2 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium text-center"
          >
            Sign Up
          </Link>

        </div>

        <h2 className="text-2xl font-semibold text-center mb-1">
          Create Your Account
        </h2>

        <p className="text-gray-400 text-center mb-6">
          Join NextRide today!
        </p>

        <form onSubmit={submitHandler} className="space-y-4">

          <input
            type="text"
            placeholder="First Name"
            required
            value={FirstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-600 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition"
          />

          <input
            type="text"
            placeholder="Last Name"
            required
            value={LastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-600 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition"
          />

          <input
            type="email"
            placeholder="Email Address"
            required
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-600 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition"
          />

          <input
            type="password"
            placeholder="Set Password"
            required
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-600 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 font-semibold hover:scale-105 transition shadow-[0_0_30px_rgba(0,255,255,0.4)]"
          >
            Sign Up
          </button>

        </form>

      </div>
    </div>
  );
}

export default Usersignup;