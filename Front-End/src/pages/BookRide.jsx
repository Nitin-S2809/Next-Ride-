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

  // Flags to track if a selection was made
  const [isPickupSelected, setIsPickupSelected] = useState(false);
  const [isDestinationSelected, setIsDestinationSelected] = useState(false);
  const [fare,setFare] = useState({});

  const navigate = useNavigate();

  // 🔥 API CALL FUNCTION
  const fetchSuggestions = async (input, setSuggestions, setLoading) => {
    if (!input || input.length < 3) {
      setSuggestions([]);
      return;
    }

    try {
      setLoading(true);
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/maps/get-suggestions?input=${input}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setSuggestions(response.data);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    } finally {
      setLoading(false);
    }
  };

  // 🔥 DEBOUNCE PICKUP
  useEffect(() => {
    if (isPickupSelected) return; // Kuch mat karo agar select ho chuka hai

    const timer = setTimeout(() => {
      fetchSuggestions(Pickup, setPickupSuggestions, setLoadingPickup);
    }, 300);

    return () => clearTimeout(timer);
  }, [Pickup, isPickupSelected]);

  // 🔥 DEBOUNCE DESTINATION
  useEffect(() => {
    if (isDestinationSelected) return;

    const timer = setTimeout(() => {
      fetchSuggestions(
        Destination,
        setDestinationSuggestions,
        setLoadingDestination
      );
    }, 300);

    return () => clearTimeout(timer);
  }, [Destination, isDestinationSelected]);

  const Bookride = async (e) => {
    e.preventDefault();
    if (!Pickup || !Destination) {
      alert("Please fill in both pickup and destination fields.");
      return;
    }
    navigate("/vehicle-select", {
      state: { data: { pickup: Pickup, destination: Destination } },
    });
    
    
    try {
      const mapRes = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/maps/get-distance-time`, {
          params: {
            origin: Pickup,
            destination: Destination
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const { distance, duration } = mapRes.data;
      console.log("Distance:", distance);
      console.log("Duration:", duration);
      

      const fareRes = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/rides/calculate-fare`,
        {
          distance: distance.value, // Convert to number
          duration: duration.value, // Convert to number
          vehicleType: "car", // For now, hardcoding vehicle type. You can make this dynamic based on user selection.
        },
        { headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          }, }
      );
      setFare(fareRes.data);
      console.log("Calculated Fare:", fareRes.data);

      navigate("/vehicle-select", {
        state: { 
          data: {
            pickup: Pickup,
            destination: Destination,
            distance: distance.value,
            duration: duration.value,
            distanceText: distance.text,
            durationText: duration.text,
            fare: fareRes.data.fare 
          } },
      });
      setPickup("");
      setDestination("");
    } catch (error) {
      console.error("error",error.response?.data || error.message);
    }
      

    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/bg-booking.png')] bg-cover bg-center relative text-white">
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="absolute inset-0 bg-black/50 px-6 md:px-12 py-6">
        <h1 className="text-2.5xl md:text-5xl font-bold tracking-wide">
          <span className="text-cyan-400">N</span>ext
          <span className="text-cyan-400">R</span>ide
        </h1>
      </div>

      <div className="glass-border relative z-10 w-[90%] max-w-4xl bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-10">
        <span className="text-gray-200 text-3xl ">Book Your </span>
        <span className="bg-gradient-to-r text-3xl from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Ride
        </span>

        {/* PICKUP */}
        <div className="relative mb-5 mt-5">
          <div className="flex items-center gap-4 border border-gray-600 rounded-xl px-5 py-4 bg-white/5">
            <MapPin className="text-cyan-400" />
            <input
              value={Pickup}
              type="text"
              onChange={(e) => {
                setPickup(e.target.value);
                setIsPickupSelected(false); // Type karte hi search enable karo
              }}
              placeholder="Enter pickup location"
              className="w-full bg-transparent outline-none text-white"
            />
          </div>

          {/* FIX: Check both !isPickupSelected AND that there is actual input */}
          {Pickup && !isPickupSelected && (
            <div className="absolute bg-black/90 rounded-lg mt-1 w-full max-h-60 overflow-y-auto z-50 border border-white/10">
              {loadingPickup ? (
                <p className="text-gray-400 text-sm p-3 italic">Searching...</p>
              ) : pickupSuggestions.length > 0 ? (
                pickupSuggestions.map((item, i) => (
                  <div
                    key={i}
                    className="p-3 text-sm cursor-pointer hover:bg-cyan-600/30 border-b border-white/5 last:border-0"
                    onClick={() => {
                      setPickup(item.description);
                      setIsPickupSelected(true); // Isse API band ho jayegi aur "No Result" hide ho jayega
                      setPickupSuggestions([]); 
                    }}
                  >
                    {item.description}
                  </div>
                ))
              ) : (
                <p className="text-gray-400 text-sm p-3">No Result found</p>
              )}
            </div>
          )}
        </div>

        {/* DESTINATION */}
        <div className="relative mb-8">
          <div className="flex items-center gap-4 border border-gray-600 rounded-xl px-5 py-4 bg-white/5">
            <MapPin className="text-cyan-400" />
            <input
              value={Destination}
              type="text"
              onChange={(e) => {
                setDestination(e.target.value);
                setIsDestinationSelected(false);
              }}
              placeholder="Enter destination"
              className="w-full bg-transparent outline-none text-white"
            />
          </div>

          {Destination && !isDestinationSelected && (
            <div className="absolute bg-black/90 rounded-lg mt-1 w-full max-h-60 overflow-y-auto z-50 border border-white/10">
              {loadingDestination ? (
                <p className="text-gray-400 text-sm p-3 italic">Searching...</p>
              ) : destinationSuggestions.length > 0 ? (
                destinationSuggestions.map((item, i) => (
                  <div
                    key={i}
                    className="p-3 text-sm cursor-pointer hover:bg-cyan-600/30 border-b border-white/5 last:border-0"
                    onClick={() => {
                      setDestination(item.description);
                      setIsDestinationSelected(true);
                      setDestinationSuggestions([]);
                    }}
                  >
                    {item.description}
                  </div>
                ))
              ) : (
                <p className="text-gray-400 text-sm p-3">No Result found</p>
              )}
            </div>
          )}
        </div>

        <div className="flex justify-center">
          <button
            onClick={Bookride}
            className="px-10 py-3 rounded-full text-lg font-medium bg-gradient-to-r from-cyan-400 to-blue-600 hover:scale-105 transition shadow-lg shadow-cyan-500/20"
          >
            Book a Ride
          </button>
        </div>
      </div>
    </div>
  );
};

export default Booking;