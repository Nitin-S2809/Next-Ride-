const rideModel = require('../Models/ride.model');
const mapService = require('./maps.service');
const crypto = require('crypto');   

async function calculateFare(distance, duration) {
    if (!distance || !duration) {
        throw new Error('Distance and duration are required');
    }

    const baseFare = {
        auto: 30,
        bike: 20,
        car: 42
    };

    const perKmRate = {
        auto: 10,
        bike: 5,
        car: 15
    };

    const perMinRate = {
        auto: 1.5,
        bike: 1,
        car: 2
    };

    return {
        auto: baseFare.auto + ((perKmRate.auto * distance)/1000) + ((perMinRate.auto * duration)/60),
        bike: baseFare.bike + ((perKmRate.bike * distance)/1000) + ((perMinRate.bike * duration)/60),
        car: baseFare.car + ((perKmRate.car * distance)/1000) + ((perMinRate.car * duration)/60)
    };
};
module.exports.calculateFare = calculateFare;

function getOtp(num) {
    function generateOtp(num) {
        const otp = crypto.randomInt(Math.pow(10, num - 1), Math.pow(10, num)).toString();
        return otp;
    }
    return generateOtp(num);
}

module.exports.createRide = async ({ user, pickup, destination, vehicleType }) => {

    if (!user || !pickup || !destination || !vehicleType) {
        throw new Error('All fields are required');
    }

    // ✅ Get distance & duration
    const distanceTime = await mapService.getDistanceAndTime(pickup, destination);

    // ✅ Calculate fare
    const fare = await calculateFare(distanceTime.distance.value, distanceTime.duration.value);

    const ride = new rideModel({
        user,
        pickup,
        destination,
        vehicleType,
        otp: getOtp(6),
        distance: distanceTime.distance.value,
        duration: distanceTime.duration.value,
        fare: fare[vehicleType]
    });
    await ride.save();

    return ride;
};