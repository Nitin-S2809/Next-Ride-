import React from "react";
import { Clock, MapPin, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";



function VehicleSelect() {
  const location = useLocation();
  const { pickup, destination, fare, distance, duration , distanceText , durationText } = location.state?.data || {};

const vehicleOptions = [
  {
    id: "nextridego",
    name: "NextRideGO",
    seats: 4,
    
    desc: "Affordable compact AC rides",
    price: fare?.car || 0,
    tag: null,
  },
  {
    id: "bikesaver",
    name: "Bike Saver",
    seats: 1,
    
    desc: "Wait a little for discounted Bike rides",
    price: fare?.bike || 0,
    tag: "40% off",
  },
  {
    id: "bike",
    name: "Bike",
    seats: 1,
    
    desc: "Fastest solo bike delivery",
    price: fare?.auto || 0,
    tag: "40% off",
    extraLabel: "Faster",
  },
];
  
  return (
    <div className="min-h-screen relative text-white overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0f172a_0%,#020617_15%,#000_40%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[url('/image.png')] bg-cover bg-center opacity-60" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-center md:text-left mb-10">
          <span className="text-white">Choose a </span>
          <span className="text-cyan-400">Ride</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-8">

          <motion.aside
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-border relative border border-white/15 bg-white/5 backdrop-blur-xl rounded-2xl p-5 shadow-[0_0_40px_rgba(0,255,255,0.12)]"
          >
            <div className="mb-6 rounded-xl border border-cyan-400/30 bg-cyan-500/10 p-3 text-sm text-cyan-100">
              <span className="font-semibold">100% off your next 2 rides.</span> Up to ₹350.00
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 rounded-lg border border-white/20 bg-black/25 p-3">
                <MapPin className="h-5 w-5 text-cyan-300" />
                <span className="text-sm text-white">{pickup}</span>
              </div>

              <div className="flex items-center justify-between rounded-lg border border-white/20 bg-black/25 p-3">
                <span className="flex items-center gap-2 text-sm text-white">
                  <img src="/Car-image.png" alt="Car" className="h-5 w-5 object-contain" /> {destination}
                </span>
                <span className="text-cyan-300 font-bold text-xs">+</span>
              </div>

              <div className="flex items-center justify-between rounded-lg border border-white/20 bg-black/25 p-3">
                <span className="flex items-center gap-2 text-sm text-white">
                  <Clock className="h-5 w-5 text-cyan-300" /> Pick-up now
                </span>
                <span className="text-gray-300 text-xs">⌄</span>
              </div>

              <div className="flex items-center justify-between rounded-lg border border-white/20 bg-black/25 p-3">
                <span className="flex items-center gap-2 text-sm text-white">
                  <Users className="h-5 w-5 text-cyan-300" /> For me
                </span>
                <span className="text-gray-300 text-xs">⌄</span>
              </div>
            </div>
          </motion.aside>

          <section className="space-y-4">
            {vehicleOptions.map((item, idx) => (
              <motion.article
                key={item.id}
                whileHover={{ y: -3, scale: 1.005 }}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
                className="vehicle-card relative overflow-hidden rounded-2xl border border-white/20 bg-black/30 p-5 backdrop-blur-lg"
              >
                {item.tag && (
                  <div className="absolute right-4 top-4 rounded-full bg-green-500/15 px-3 py-1 text-xs text-emerald-300 backdrop-blur-sm">
                    {item.tag}
                  </div>
                )}
                <div className="flex items-center gap-4">
                  <div className="h-20 w-20 rounded-full bg-white/10 border border-cyan-300/40 flex items-center justify-center">
                    <img
                      src={item.id.includes("bike") ? "/Bike-image.png" : "/Car-image.png"}
                      alt={item.name}
                      className="h-[100%] w-[100%] object-contain"
                    />
                  </div>

                  <div className="flex-1">
                    <h2 className="text-3xl font-extrabold tracking-tight text-white">{item.name}</h2>
                    <p className="text-gray-300 mt-1 text-sm">{item.desc}</p>
                    <p className="mt-1 text-sm text-gray-300">⏱ {durationText} • 📏 {distanceText}</p>
                  </div>

                  <div className="text-right">
                    <p className="text-2xl font-black text-white leading-none">INR {item.price.toFixed(2)}</p>
                    {item.oldPrice && (
                      <p className="text-xs text-gray-400 line-through">INR {item.oldPrice.toFixed(2)}</p>
                    )}
                  </div>
                </div>

                {item.extraLabel && (
                  <span className="mt-3 inline-flex items-center rounded-lg bg-blue-600/20 px-2.5 py-1 text-xs font-semibold text-blue-300">
                    {item.extraLabel}
                  </span>
                )}
              </motion.article>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}

export default VehicleSelect;
