const express = require('express');
const db = require('./db');
const app = express();
// const {jwtMiddleware} = require('./jwt');
require('dotenv').config();
const PORT = 3000;
const bodyParser = require('body-parser');

app.use(express.json());

//import the router files
const userRoutes = require('./routes/userRoutes');
const candidateRoutes = require('./routes/candidateRoutes');
//use the routers
app.use('/user',userRoutes);
app.use('/candidate',candidateRoutes);
app.listen(3000, () => {
    console.log("listening on port 3000..");
  });
  
