const express = require("express");
require('dotenv').config();
// const rateLimit = require('express-rate-limit');

const PORT = process.env.PORT;

const app = express();
app.use(express.json());

app.use(express.urlencoded({extended: false}));

// // Apply rate limiting middleware
// const limiter = rateLimit({
//     windowMs: 15 * 60 * 1000, // 15 minutes
//     max: 100, // limit each IP to 100 requests per windowMs
//   });
  
//   // Apply request throttling middleware
//   const speedLimiter = slowDown({
//     windowMs: 15 * 60 * 1000, // 15 minutes
//     delayAfter: 50, // allow 50 requests to go at full-speed, then start delaying
//     delayMs: 500, // add 500ms delay per request above 50 requests
//   });
  

//   app.use(limiter);
//   app.use(speedLimiter);

  

const userroute = require("./src/route/userRoute");
app.use('/api',userroute)


  

const noteroute = require("./src/route/noteRoute");
app.use('/api',noteroute)

app.listen(PORT, () => {
    console.log(`Server listening on port :${PORT}`);
});
