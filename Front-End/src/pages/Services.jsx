import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Zap, // ✅ FIXED (LightningBolt → Zap)
  Clock,
  MapPin,
  ShieldCheck,
  CreditCard,
  Star,
} from "lucide-react";

const services = [
  {
    id: 1,
    icon: <Zap className="w-7 h-7 text-cyan-400" />, // ✅ FIXED
    title: "Instant Ride",
    description: "Book a ride instantly and reach your destination quickly.",
  },
  {
    id: 2,
    icon: <Clock className="w-7 h-7 text-cyan-400" />,
    title: "Scheduled Ride",
    description: "Plan your rides in advance for stress-free travel.",
  },
  {
    id: 3,
    icon: <MapPin className="w-7 h-7 text-cyan-400" />,
    title: "Live Tracking",
    description: "Track your ride in real-time with GPS support.",
  },
  {
    id: 4,
    icon: <ShieldCheck className="w-7 h-7 text-cyan-400" />,
    title: "Safe Rides",
    description: "Verified drivers and safety-first approach.",
  },
  {
    id: 5,
    icon: <CreditCard className="w-7 h-7 text-cyan-400" />,
    title: "Multiple Payments",
    description: "Pay via UPI, card, wallet or cash.",
  },
  {
    id: 6,
    icon: <Star className="w-7 h-7 text-cyan-400" />,
    title: "Premium Experience",
    description: "Enjoy top-quality rides with premium drivers.",
  },
];

function Services() {
  return (
    <div className="relative min-h-screen bg-[#020205] text-white overflow-hidden">

      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1f9cff_0%,#061026_45%,#04060f_100%)] opacity-70"></div>
      <div className="absolute inset-0 pointer-events-none bg-[url('/services-grid.png')] bg-center bg-cover opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 sm:py-24">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-cyan-300 mb-2">
            Our Services
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            <span className="text-gray-200">Our </span>
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 bg-clip-text text-transparent">
              Services
            </span>
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-gray-300 text-base sm:text-lg">
            Fast, safe and reliable rides at your fingertips. NextRide powers every journey with innovation and care.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.45 }}
              whileHover={{ scale: 1.05 }}
              className="group relative p-6 rounded-2xl border border-cyan-400/20 bg-white/5 backdrop-blur-xl 
              shadow-[0_20px_45px_-25px_rgba(0,0,0,0.8)] hover:border-cyan-400/60 transition"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition 
              bg-gradient-to-r from-cyan-400/10 to-blue-500/10 blur-xl"></div>

              <div className="relative z-10">
                <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-lg bg-cyan-900/40">
                  {item.icon}
                </div>

                <h3 className="text-xl font-semibold text-gray-100 mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 rounded-2xl border border-cyan-400/20 bg-white/5 backdrop-blur-xl p-8 text-center">

          <h2 className="text-3xl font-bold text-gray-200 mb-3">
            Why Choose NextRide?
          </h2>

          <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
            We provide fast, safe and reliable rides with modern technology and user-friendly experience.
            Your comfort and safety is our priority.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">

            {/* Book Button */}
            <Link
              to="/booking"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full 
              bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold 
              shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:scale-105 transition"
            >
              Book a Ride
            </Link>

            {/* Join Button */}
            <Link
              to="/Userlogin"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full 
              border border-cyan-400 text-cyan-300 hover:bg-cyan-400/20 transition"
            >
              Join Now
            </Link>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Services;