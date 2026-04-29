import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import WhyChooseUs from "./WhyChooseUs";
import FutureRide from "./FutureRide";


function Home() {
  return (
    
    <div className="font-sans text-white bg-black">

      {/* ================= NAVBAR ================= */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="absolute w-full z-20 flex justify-between items-center px-6 md:px-12 py-6"
      >

        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-bold tracking-wide">
          <span className="text-cyan-400">N</span>
          <span className="text-white">ext</span>
          <span className="text-cyan-400">R</span>
          <span className="text-white">ide</span>
        </h1>

        {/* Right Section */}
        <div className="flex items-center gap-6 md:gap-40">

          {/* Menu */}
          <div className="hidden md:flex gap-8 text-gray-300">
            <Link to="/" className="text-cyan-400 border-b-2 border-cyan-400 pb-1">
              Home
            </Link>
            <Link to="/services" className="hover:text-cyan-400 transition">Services</Link>
            <Link to="/how-it-works" className="hover:text-cyan-400 transition">How It Works</Link>
            
            <Link to="/future-ride" className="hover:text-cyan-400 transition">Future Ride</Link>
            <a href="#" className="hover:text-cyan-400 transition">Contact</a>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3">

            <motion.div whileHover={{ scale: 1.08 }}>
              <Link
                to="/captainlogin"
                className="bg-gradient-to-r from-cyan-400 to-blue-600 px-4 md:px-6 py-2 rounded-full text-sm md:text-base"
              >
                Drive with Next Ride
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.08 }}>
              <Link
                to="/Userlogin"
                className="bg-gradient-to-r from-cyan-400 to-blue-600 px-4 md:px-6 py-2 rounded-full text-sm md:text-base"
              >
                Login
              </Link>
            </motion.div>

          </div>

        </div>
      </motion.nav>


      {/* ================= HERO SECTION ================= */}
      <section
        className="min-h-screen bg-cover bg-center relative flex items-center"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      >

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 px-6 md:px-12 max-w-6xl">

          {/* Heading */}
          <motion.h2
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6"
          >
            <span className="text-gray-200">NEXT </span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              RIDE
            </span>
          </motion.h2>

          {/* Tagline */}
          <motion.h3
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4"
          >
            Smart <span className="text-cyan-400">•</span> Safe{" "}
            <span className="text-cyan-400">•</span> Fast
          </motion.h3>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-gray-400 mb-8 text-sm sm:text-base md:text-lg max-w-xl"
          >
            Your Ride, Your Way – Anytime, Anywhere.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            <Link to="/booking">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-400 to-blue-600 px-6 py-3 rounded-full font-semibold"
              >
                Book Your Ride
              </motion.button>
            </Link>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="border border-gray-500 px-6 py-3 rounded-full backdrop-blur-md bg-white/10 hover:bg-white hover:text-black transition"
            >
              ▶ Watch Demo
            </motion.button>
          </motion.div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-gray-800 hover:border-cyan-400 transition"
            >
              <h4 className="text-lg font-semibold text-cyan-400">
                Live Tracking
              </h4>
              <p className="text-gray-400 mt-2">Real-Time GPS</p>
            </motion.div>

            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-gray-800 hover:border-cyan-400 transition"
            >
              <h4 className="text-lg font-semibold text-cyan-400">
                Safe Rides
              </h4>
              <p className="text-gray-400 mt-2">Verified Drivers</p>
            </motion.div>

            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-gray-800 hover:border-cyan-400 transition"
            >
              <h4 className="text-lg font-semibold text-cyan-400">
                Fast Booking
              </h4>
              <p className="text-gray-400 mt-2">In 1 Tap</p>
            </motion.div>

          </div>

          {/* Trust Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-10 text-lg text-gray-200"
          >
            Trusted by 10,000+ Users
            <span className="text-yellow-400 text-xl ml-4">★★★★★</span>
          </motion.div>

        </div>
      </section>
      <FutureRide />
      < WhyChooseUs />
      
      
       
    </div>
     
    
    
    
  );
}

export default Home;