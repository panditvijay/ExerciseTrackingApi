const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config()

const app = express();

const port = process.env.PORT || 1234

app.use(cors());
app.use(express.json());


//Database connection
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true,useUnifiedTopology: true, useCreateIndex: true }
);

const connection = mongoose.connection;

connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// Adding routes

const exercisesRouter = require('./routes/exercise');
const usersRouter = require('./routes/user');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);



app.listen(port,()=>{
    console.log(`server is runnig on port ${port}`)
})

