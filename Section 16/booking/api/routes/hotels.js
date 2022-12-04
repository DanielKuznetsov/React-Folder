import express from "express";
import Hotel from "../models/Hotel.js";
import {
  createHotel,
  updateHotel,
  deleteHotel,
  getOneHotel,
  getAllHotels,
} from "../../api/controllers/hotelController.js";

const router = express.Router();

router.post("/", createHotel);
router.put("/:id", updateHotel);
router.delete("/:id", deleteHotel);
router.get("/:id", getOneHotel);
router.get("/", getAllHotels);

export default router;
