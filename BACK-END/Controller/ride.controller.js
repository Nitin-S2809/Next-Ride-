const rideService = require('../Services/ride.service');
const { validationResult } = require('express-validator');

module.exports.createRide = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { userID, pickup, destination, vehicleType } = req.body;
    try {
        const ride = await rideService.createRide({ user: req.user._id , pickup, destination, vehicleType });
        return res.status(201).json(ride);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports.calculateFare = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { distance, duration } = req.body;

    try {
        const fare = await rideService.calculateFare(distance, duration);

        return res.status(200).json({
            fare,        // 👈 all fares
            distance,
            duration
        });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};