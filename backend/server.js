require('dotenv').config();

const express = require('express');
const workoutRoutes = require('./routes/workouts');
const mongoose = require('mongoose');
const server = express();

//Middleware
server.use(express.json());

server.use((req,res,next) => {
    console.log(req.path,req.method);
    next();
});

//Routes
server.use('/api/workouts',workoutRoutes);

//connect to DB
mongoose.connect(process.env.MONG_URI)
    .then( () => {
        //listen for request
        server.listen(process.env.PORT, ()=>{
            console.log("Connected to DB. Listening for requests on localhost 3000.");
        });
    })
    .catch((err) => {
        console.log(err);
    });

