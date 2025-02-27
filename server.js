const express = require('express');
const db = require('./db');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
const PORT = 3000;


const userRoutes = require('./routes/userRoutes');

app.use('/user',userRoutes);




app.listen(3000, () => {
    console.log("listening on port 3000..");
  });
  
