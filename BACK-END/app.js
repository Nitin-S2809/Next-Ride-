const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')
const cors = require('cors');
const connectTODB = require('./DB/db');
const userRoutes = require('./Routes/userRoutes')
const captainRoutes = require('./Routes/captainRoutes')
const mapsRoutes = require('./Routes/maps.routes')
const createRideRoutes = require('./Routes/createRide')



connectTODB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cookieParser());

app.get('/', (req,res)=> {
    res.send("hello bebs")
})


app.use('/users', userRoutes);
app.use('/captains', captainRoutes );
app.use('/maps', mapsRoutes);
app.use('/rides', createRideRoutes);



module.exports = app;