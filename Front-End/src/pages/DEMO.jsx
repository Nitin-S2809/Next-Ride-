import React from "react";

const Demo = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center">
            <header className="mb-12 text-center">
                <h1 className="text-5xl font-bold text-white drop-shadow-lg">Car Booking App</h1>
                <p className="mt-4 text-lg text-white/80">Book your ride in seconds. Fast, easy, and reliable.</p>
            </header>
            <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
                <form className="space-y-6">
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Pick-up Location</label>
                        <input
                            type="text"
                            placeholder="Enter location"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Drop-off Location</label>
                        <input
                            type="text"
                            placeholder="Enter destination"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Date & Time</label>
                        <input
                            type="datetime-local"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-pink-500 text-white font-bold text-lg shadow-md hover:scale-105 transition-transform"
                    >
                        Book Now
                    </button>
                </form>
            </div>
            <footer className="mt-12 text-white/70 text-sm">
                &copy; {new Date().getFullYear()} Car Booking App. All rights reserved.
            </footer>
        </div>
    );
};

export default Demo;