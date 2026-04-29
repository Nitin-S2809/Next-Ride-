import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Car, Navigation, ShieldCheck, ArrowRight } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Enter Your Details",
    description: "Open the app and input your pickup and drop-off locations.",
    icon: <MapPin className="w-10 h-10 text-cyan-300" />,
  },
  {
    number: 2,
    title: "Choose Your Ride",
    description: "Pick your ride from a range of options.",
    icon: <Car className="w-10 h-10 text-cyan-300" />, // ✅ FIXED
  },
  {
    number: 3,
    title: "Track Your Ride",
    description: "Follow your ride in real-time as it arrives.",
    icon: <Navigation className="w-10 h-10 text-cyan-300" />, // better than Eye
  },
  {
    number: 4,
    title: "Arrive Safely",
    description: "Reach your destination securely and comfortably.",
    icon: <ShieldCheck className="w-10 h-10 text-cyan-300" />,
  },
];

function HowItWorks() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">

      {/* BG IMAGE */}
      <div className="absolute inset-0 bg-[url('/hero-bg.png')] bg-cover bg-center" />
      

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/80" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 py-20">
        

        {/* TITLE */}
        <div className="text-center mb-14">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            How It <span className="text-cyan-400">Works</span>
          </h1>
        </div>

        {/* STEPS */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15 * idx, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="relative rounded-2xl border border-cyan-400/30 
              bg-white/5 backdrop-blur-xl p-6 
              shadow-[0_0_25px_rgba(0,255,255,0.1)] 
              hover:shadow-[0_0_40px_rgba(0,255,255,0.4)] 
              transition duration-300"
            >

              {/* STEP NUMBER */}
              <div className="absolute top-4 left-4 w-10 h-10 rounded-full 
              bg-black/60 border border-cyan-400 
              flex items-center justify-center text-sm font-bold">
                {step.number}
              </div>

              {/* ICON */}
              <div className="pt-10 pb-4">{step.icon}</div>

              {/* TITLE */}
              <h2 className="text-xl font-semibold mb-2">{step.title}</h2>

              {/* DESC */}
              <p className="text-gray-300 text-sm">{step.description}</p>

              {/* GLOW LINE */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 hover:opacity-100 transition"></div>

            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-3xl font-semibold">Ready to Ride?</p>
          <p className="text-gray-300 mt-2 mb-6">
            Book your ride in seconds with NextRide.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <button className="px-5 py-3 rounded-lg bg-black/60 border border-white/20 hover:border-cyan-400 transition">
              <ArrowRight className="inline mr-2 w-4 h-4" /> App Store
            </button>

            <button className="px-5 py-3 rounded-lg bg-black/60 border border-white/20 hover:border-cyan-400 transition">
              <ArrowRight className="inline mr-2 w-4 h-4" /> Google Play
            </button>
          </div>

          <Link
            to="/booking"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 
            text-white font-semibold shadow-[0_0_25px_rgba(0,255,255,0.5)] 
            hover:scale-105 transition"
          >
            Book Now
          </Link>
        </div>

      </div>
    </div>
  );
}

export default HowItWorks;