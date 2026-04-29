const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const Usercontroller = require('../Controller/user.controller');
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
.withMessage('Password must be at least 6 characters')
],
Usercontroller.registerUser
);

router.post('/login',[
    body('email').isEmail().withMessage('Invalid email'),
    body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters')
],
Usercontroller.loginUser
)

router.get('/profile', authMiddleware.authUser , Usercontroller.getUserProfile)
router.get('/logout', authMiddleware.authUser , Usercontroller.logoutUser)
module.exports = router;