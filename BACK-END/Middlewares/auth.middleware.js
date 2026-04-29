const userModel = require('../MODELS/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const blacklistModel = require('../MODELS/blacklisttoken.model');
const captainModel = require('../MODELS/Captain.model');

module.exports.authUser = async (req, res, next) => {
    console.log("HEADERS:", req.headers.authorization);

    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized - No token' });
    }

    const isBlacklisted = await blacklistModel.findOne({ token });

    if (isBlacklisted) {
        return res.status(401).json({ message: 'Token blacklisted' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        console.log("DECODED:", decoded); // ✅ ADD THIS

        const user = await userModel.findById(decoded._id);

        if (!user) {
            console.log("USER NOT FOUND"); // ✅ ADD THIS
            return res.status(401).json({ message: 'User not found' });
        }

        req.user = user;
        next();

    } catch (error) {
        console.log("JWT ERROR:", error.message); // ✅ ADD THIS

        return res.status(401).json({ message: 'Unauthorized' });
    }
};
module.exports.authcaptain = async (req, res, next) => {

    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    const isBlacklisted = await blacklistModel.findOne({token: token});
    if(isBlacklisted) {
        return res.status(401).json({message: 'unaurthorized'});
    }

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const captain = await captainModel.findById(decoded._id);

        req.captain = captain;

        next();

    } catch (error) {
        console.log("JWT ERROR:", error.message); 

        return res.status(401).json({ message: 'Unauthorized' });

    }
}

