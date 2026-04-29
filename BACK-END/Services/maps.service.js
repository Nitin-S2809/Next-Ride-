const axios = require('axios');
require('dotenv').config();

// 🔹 GET COORDINATES
module.exports.getAddressCoordinates = async (address) => {
    const encodedAddress = encodeURIComponent(address);
    const apiKey = process.env.GOOGLE_MAPS_API_KEY;

    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${apiKey}`;

    console.log("Fetching coordinates for:", address);

    try {
        const response = await axios.get(url);

        console.log('Geocode API response:', response.data);

        if (
            response.data &&
            response.data.status === "OK" &&
            response.data.results.length > 0
        ) {
            const location = response.data.results[0].geometry.location;

            return {
                lat: location.lat,
                lng: location.lng
            };
        } else {
            throw new Error(
                `Unable to fetch coordinates. Status: ${response.data.status}`
            );
        }

    } catch (error) {
        console.error('Geocode Error:', error.message);
        throw error;
    }
};


// 🔹 GET DISTANCE & TIME
module.exports.getDistanceAndTime = async (origin, destination) => {
    if (!origin || !destination) {
        throw new Error('Origin and destination are required');
    }

    const apiKey = process.env.GOOGLE_MAPS_API_KEY;

    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;

    console.log("Origin:", origin);
    console.log("Destination:", destination);

    try {
        const response = await axios.get(url);

        console.log("Distance API response:", response.data);

        if (response.data && response.data.status === "OK") {

            const element = response?.data?.rows?.[0]?.elements?.[0];

            // 🔥 SAFETY CHECK
            if (!element) {
                throw new Error("Invalid API response structure");
            }

            // 🔥 CORRECT CONDITION
            if (element.status !== "OK") {
                throw new Error("No route found");
            }

            return {
                distance: element.distance,
                duration: element.duration
            };

        } else {
            throw new Error("Unable to fetch distance and time");
        }

    } catch (error) {
        console.error("Distance API Error:", error.message);
        throw error;
    }
};


module.exports.getSuggestions = async (input) => {
    if (!input) {
        throw new Error('Input is required');
    }

    const apiKey = process.env.GOOGLE_MAPS_API_KEY;

    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}`;
    try {
        const response = await axios.get(url);
        if(response.data.status === "OK") {
            return response.data.predictions;
        } else {
            throw new Error('Unable to fetch suggestions Status');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }

};