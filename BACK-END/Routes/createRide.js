const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const rideController = require('../Controller/ride.controller');
const authMiddleware = require('../Middlewares/auth.middleware');

router.post('/create-ride', 
    authMiddleware.authUser,
    body('pickup').isString().isLength({ min: 3 }).withMessage('Invalid pickup location'),
    body('destination').isString().isLength({ min: 3 }).withMessage('Invalid destination'),
    body('vehicleType').isString().isIn(['auto', 'bike', 'car']).withMessage('Invalid vehicle type')
    , rideController.createRide
);

router.post('/calculate-fare',
    authMiddleware.authUser,
    body('distance').isNumeric().withMessage('Distance must be a number'),
    body('duration').isNumeric().withMessage('Duration must be a number'),
    body('vehicleType').isString().isIn(['auto', 'bike', 'car']).withMessage('Invalid vehicle type')
    , rideController.calculateFare
);


module.exports = router;