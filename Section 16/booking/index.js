import dotenv from "dotenv";
import express from "express"; // "type": "module", in package.json
import mongoose from "mongoose";

dotenv.config({ path: "./config.env" });

const app = express();

const connect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE);
    console.log("DB connection is established!")
  } catch (error) {
    throw error;
  }
};

app.listen(3001, () => {
  connect();
  console.log("Connected to backend!");
});
