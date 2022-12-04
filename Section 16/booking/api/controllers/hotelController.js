import Hotel from "../models/Hotel.js";

export const createHotel = async (req, res, next) => {
  const newHotel = await Hotel.create(req.body);

  try {
    res.status(200).json({
      status: "success",
      data: {
        data: newHotel,
      },
    });
  } catch (err) {
    next(err);
  }
};

export const updateHotel = async (req, res, next) => {
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
    next(err);
  }
};

export const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        data: "Hotel was deleted",
      },
    });
  } catch (err) {
    next(err);
  }
};

export const getOneHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        data: hotel,
      },
    });
  } catch (err) {
    next(err);
  }
};

export const getAllHotels = async (req, res, next) => {
  try {
    const hotels = await Hotel.find();

    res.status(200).json({
      status: "success",
      results: hotels.length,
      data: {
        data: hotels,
      },
    });
  } catch (err) {
    next(err);
  }
};
