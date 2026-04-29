import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Zap, Smartphone, Wallet } from "lucide-react";

const features = [
  {
    icon: <Zap className="w-10 h-10 text-cyan-300" />,
    title: "Fast & Reliable",
    description: "Get a ride in minutes, anytime and anywhere.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-cyan-300" />,
    title: "Safety First",
    description: "Ride with vetted, professional drivers for your peace of mind.",
  },
  {
    icon: <Smartphone className="w-10 h-10 text-cyan-300" />,
    title: "Easy to Use",
    description: "User-friendly app with seamless booking & live tracking.",
  },
  {
    icon: <Wallet className="w-10 h-10 text-cyan-300" />,
    title: "Affordable Rates",
    description: "Enjoy competitive pricing with no hidden fees.",
  },
];

function WhyChooseUs() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      
      <div className="absolute inset-0 bg-[url('/hero-bg.png')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 max-w-6xl mx-auto px-5 py-20">
        <div className="text-center mb-14">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            Why Choose <span className="text-cyan-400">Us</span>
          </h1>
          <p className="text-gray-300 mt-4 text-lg sm:text-xl">
            Experience the <span className="text-white font-semibold">NextRide Advantage</span>
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl border border-cyan-400/30 bg-white/5 backdrop-blur-xl p-7 text-left
              shadow-[0_0_30px_rgba(0,255,255,0.18)] hover:shadow-[0_0_45px_rgba(0,255,255,0.3)] transition"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-cyan-900/40 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-3xl font-semibold">Ready to Ride?</p>
          <p className="text-gray-300 mt-2 mb-6">Download NextRide and book your ride today!</p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button className="px-5 py-3 rounded-lg bg-black/60 border border-white/20 hover:border-cyan-400 transition">
              App Store
            </button>
            <button className="px-5 py-3 rounded-lg bg-black/60 border border-white/20 hover:border-cyan-400 transition">
              Google Play
            </button>
          </div>
          <Link
            to="/booking"
            className="mt-6 inline-block px-8 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 text-black font-semibold hover:scale-105 transition"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
