const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");

dotenv.config({ path: "./config.env" });
const app = express();

// to suppress the warnings
mongoose.set('strictQuery', true);

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
