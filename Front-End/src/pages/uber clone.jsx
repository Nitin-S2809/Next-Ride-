import React, { useState, useEffect } from "react";
import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Booking() {
  const [Pickup, setPickup] = useState("");
  const [Destination, setDestination] = useState("");

  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);

  const [loadingPickup, setLoadingPickup] = useState(false);
  const [loadingDestination, setLoadingDestination] = useState(false);

  const [showPickupDropdown, setShowPickupDropdown] = useState(false);
  const [showDestinationDropdown, setShowDestinationDropdown] = useState(false);

  const [isSelectingPickup, setIsSelectingPickup] = useState(false);
  const [isSelectingDestination, setIsSelectingDestination] = useState(false);

  const navigate = useNavigate();

  // 🔥 API CALL
  const fetchSuggestions = async (input, setSuggestions, setLoading) => {
    if (!input || input.length < 3) {
      setSuggestions([]);
      return;
    }

    try {
      setLoading(true);
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/maps/get-suggestions?input=${input}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setSuggestions(res.data);
    } catch (err) {
      console.error("Error fetching suggestions:", err);
    } finally {
      setLoading(false);
    }
  };

  // 🔥 PICKUP DEBOUNCE
  useEffect(() => {
    if (isSelectingPickup) return;

    const timer = setTimeout(() => {
      fetchSuggestions(Pickup, setPickupSuggestions, setLoadingPickup);
    }, 300);

    return () => clearTimeout(timer);
  }, [Pickup]);

  // 🔥 DESTINATION DEBOUNCE
  useEffect(() => {
    if (isSelectingDestination) return;

    const timer = setTimeout(() => {
      fetchSuggestions(
        Destination,
        setDestinationSuggestions,
        setLoadingDestination
      );
    }, 300);

    return () => clearTimeout(timer);
  }, [Destination]);

  const Bookride = (e) => {
    e.preventDefault();

    if (!Pickup || !Destination) {
      alert("Please fill in both fields");
      return;
    }

    navigate("/vehicle-select", {
      state: { data: { pickup: Pickup, destination: Destination } },
    });

    setPickup("");
    setDestination("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/bg-booking.png')] bg-cover bg-center relative text-white">
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="absolute inset-0 bg-black/50 px-6 py-6">
        <h1 className="text-3xl font-bold">
          <span className="text-cyan-400">Next</span>Ride
        </h1>
      </div>

      <div className="relative z-10 w-[90%] max-w-4xl bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-10">

        <h2 className="text-3xl mb-6">Book Your Ride</h2>

        {/* PICKUP */}
        <div className="relative mb-5">
          <div className="flex items-center gap-3 border rounded-xl px-4 py-3 bg-white/5">
            <MapPin />
            <input
              value={Pickup}
              onChange={(e) => {
                setPickup(e.target.value);
                setShowPickupDropdown(true);
                setIsSelectingPickup(false);
              }}
              placeholder="Enter pickup location"
              className="w-full bg-transparent outline-none"
            />
          </div>

          {showPickupDropdown && (
            <div className="absolute w-full bg-black/80 rounded mt-1 z-50">
              {loadingPickup ? (
                <p className="p-2 text-gray-400">Loading...</p>
              ) : Pickup.length >= 3 && pickupSuggestions.length === 0 ? (
                <p className="p-2 text-gray-400">No Result found</p>
              ) : (
                pickupSuggestions.map((item, i) => (
                  <div
                    key={i}
                    className="p-2 cursor-pointer hover:bg-gray-700"
                    onClick={() => {
                      setIsSelectingPickup(true);
                      setPickup(item.description);
                      setPickupSuggestions([]);
                      setShowPickupDropdown(false);
                    }}
                  >
                    {item.description}
                  </div>
                ))
              )}
            </div>
          )}
        </div>

        {/* DESTINATION */}
        <div className="relative mb-6">
          <div className="flex items-center gap-3 border rounded-xl px-4 py-3 bg-white/5">
            <MapPin />
            <input
              value={Destination}
              onChange={(e) => {
                setDestination(e.target.value);
                setShowDestinationDropdown(true);
                setIsSelectingDestination(false);
              }}
              placeholder="Enter destination"
              className="w-full bg-transparent outline-none"
            />
          </div>

          {showDestinationDropdown && (
            <div className="absolute w-full bg-black/80 rounded mt-1 z-50">
              {loadingDestination ? (
                <p className="p-2 text-gray-400">Loading...</p>
              ) : Destination.length >= 3 &&
                destinationSuggestions.length === 0 ? (
                <p className="p-2 text-gray-400">No Result found</p>
              ) : (
                destinationSuggestions.map((item, i) => (
                  <div
                    key={i}
                    className="p-2 cursor-pointer hover:bg-gray-700"
                    onClick={() => {
                      setIsSelectingDestination(true);
                      setDestination(item.description);
                      setDestinationSuggestions([]);
                      setShowDestinationDropdown(false);
                    }}
                  >
                    {item.description}
                  </div>
                ))
              )}
            </div>
          )}
        </div>

        {/* BUTTON */}
        <div className="flex justify-center">
          <button
            onClick={Bookride}
            className="px-8 py-3 bg-cyan-500 rounded hover:scale-105 transition"
          >
            Book Ride
          </button>
        </div>
      </div>
    </div>
  );
}

export default Booking;