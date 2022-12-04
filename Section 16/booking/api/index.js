import dotenv from "dotenv";
import express from "express"; // "type": "module", in package.json
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"

dotenv.config({ path: "./config.env" });
const app = express();


app.get("/", (req, res) => {
    res.send('hello first request')
})

//middleware
app.use(express.json());

app.use("/api/auth", authRoute)
app.use("/api/users", usersRoute)
app.use("/api/hotels", hotelsRoute)
app.use("/api/rooms", roomsRoute)


// Server configuration
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
