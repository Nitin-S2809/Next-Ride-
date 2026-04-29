import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, CheckCircle2, ShieldCheck, XCircle } from "lucide-react";

function FutureRide() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
        
      <div className="absolute inset-0 bg-[url('/bg-image.png')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 max-w-6xl mx-auto p-6  sm:p-10">
        <h1 className="text-4xl sm:text-6xl font-black leading-tight px-10">
            <span className="text-white">Book Future</span>{" "}
            <span className="text-cyan-300"> Ride</span>
        </h1>
        <div className="grid grid-cols-1 xl:grid-cols-12 py-10 gap-6">
          <div className="xl:col-span-7 rounded-3xl border border-cyan-400/40 bg-white/10 backdrop-blur-xl p-8 sm:p-10 shadow-[0_0_60px_rgba(0,255,255,0.15)]">
            <h1 className="text-4xl sm:text-5xl font-black leading-tight">
              <span className="text-white">Plan your ride</span>{" "}
              <span className="text-cyan-300">for later</span>
            </h1>
            <p className="mt-4 text-lg text-cyan-100/90">
              Schedule your ride in advance, effortlessly.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-gray-300 text-sm mb-2 block">Date</span>
                <div className="flex items-center gap-2 border border-cyan-300/40 rounded-lg px-3 py-2 bg-black/30">
                  <Calendar className="text-cyan-300" />
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="bg-transparent outline-none w-full text-white"
                  />
                </div>
              </label>

              <label className="block">
                <span className="text-gray-300 text-sm mb-2 block">Time</span>
                <div className="flex items-center gap-2 border border-cyan-300/40 rounded-lg px-3 py-2 bg-black/30">
                  <Clock className="text-cyan-300" />
                  <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="bg-transparent outline-none w-full text-white"
                  />
                </div>
              </label>
            </div>

            <button
              className="mt-8 w-full py-3 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-xl font-semibold text-black hover:scale-105 transition"
            >
              Next
            </button>
          </div>

          <div className="xl:col-span-5 rounded-3xl border border-cyan-400/40 bg-white/10 backdrop-blur-xl p-8 sm:p-10 shadow-[0_0_60px_rgba(0,255,255,0.15)]">
            <h2 className="text-3xl font-bold mb-5">Benefits</h2>
            <div className="space-y-4 text-gray-200">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-cyan-300 mt-1" />
                <div>
                  <h3 className="text-white font-semibold">Choose your exact pickup time</h3>
                  <p>up to 90 days in advance.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="text-cyan-300 mt-1" />
                <div>
                  <h3 className="text-white font-semibold">Extra wait time included</h3>
                  <p>to meet your ride.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <XCircle className="text-cyan-300 mt-1" />
                <div>
                  <h3 className="text-white font-semibold">Cancel at no charge</h3>
                  <p>up to 60 minutes in advance.</p>
                </div>
              </div>
            </div>

            <Link
              to="/services"
              className="mt-6 inline-block underline text-cyan-300 font-semibold hover:text-cyan-100"
            >
              See terms
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FutureRide;
