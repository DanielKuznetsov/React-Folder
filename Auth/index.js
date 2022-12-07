const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require('./routes/userRoutes.js')

dotenv.config({ path: "./config.env" });
const app = express();

// to suppress the warnings
mongoose.set('strictQuery', true);

// for api to work
app.use(express.json());

app.use('/api/v1/users', userRoutes);

// Server configuration
const connect = async () => {
  try {
    await mongoose.connect("mongodb+srv://booking:lfybkrf_1998Q@booking.lqszxhl.mongodb.net/test");
    console.log("DB connection is established!");
  } catch (error) {
    throw error;
  }
};

app.listen(3002, () => {
  connect();
  console.log("Connected to backend!");
});
