const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const CaptainSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required:true,
            minlength:[3,'firstname should be atleast 3']
        },
        lastname: {
            type: String,
            minlength:[3,'firstname should be atleast 3']
        }
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required:true,
        select: false
    },
    socketId: {
        type: String
    },
    status: {
        type: String,
        enum: ['active','inactive'],
        default: 'inactive'
    },
    vehicle: {
        color:{
            type: String,
            required: true,
            minlength: [3 , 'length should be atleast 3']
        },
        plate: {
            type: String,
            required: true,
            minlength: [3,'Number Plate should be atleast 3']
        },
        capacity: {
            type: Number,
            required: true,
            minlength: [1,'capacity of vehicle should be atleast 1']
        },
        vehicleType: {
            type: String,
            required: true,
            enum: ['Car','Auto','Bike']    
        },
        location: {
            lat: {
                type: Number
            },
            lng: {
                type: Number
            }
        }
    }
})

CaptainSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
}

CaptainSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password , this.password);
}

CaptainSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password, 10);
}

const captainModel = mongoose.models.captain || mongoose.model('captain', CaptainSchema);

module.exports = captainModel;