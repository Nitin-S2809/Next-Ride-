const captainController = require('../Controller/captain.controller')
const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const authMiddleware = require('../Middlewares/auth.middleware')

router.post(
'/register',
[
body('email').isEmail().withMessage('Invalid email'),
body('fullname.firstname')
.isLength({ min: 3 })
.withMessage('First name must be at least 3 characters'),
body('password')
.isLength({ min: 6 })
.withMessage('Password must be at least 6 characters'),
body('vehicle.color').isLength({min: 3}).withMessage('color must be atleast 3 character'),
body('vehicle.plate').isLength({min: 3}).withMessage('plate no must be atleast 3 character'),
body('vehicle.capacity').isInt({min: 1}).withMessage('capacity must be atleast 1'),
body('vehicle.vehicleType').isIn(['Car','Bike','Auto']).withMessage('Invalid vehicle type'),
],
captainController.registerCaptain
)

router.post('/login' , [
    body('email').isEmail().withMessage('Invalid email'),
    body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters')
] ,
captainController.loginCaptain 
)

router.get('/profile', authMiddleware.authcaptain , captainController.getcaptainProfile)
router.get('/logout', authMiddleware.authcaptain , captainController.logoutcaptain)

module.exports = router;