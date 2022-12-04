import express from "express";
import Hotel from "../models/Hotel.js";

const router = express.Router();

// Create
router.post("/", async (req, res) => {
  const newHotel = await Hotel.create(req.body);

  try {
    res.status(200).json({
      status: "success",
      data: {
        data: newHotel,
      },
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update
router.put("/:id", async (req, res) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json({
      status: "success",
      data: {
        data: updatedHotel,
      },
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        data: "Hotel was deleted",
      },
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET
router.get("/:id", async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        data: hotel,
      },
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL
router.get("/", async (req, res) => {
  try {
    const hotels = await Hotel.find();

    res.status(200).json({
      status: "success",
      data: {
        data: hotels,
      },
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
