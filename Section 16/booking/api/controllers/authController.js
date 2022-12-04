import bcrypt from "bcryptjs/dist/bcrypt.js";
import User from "../models/User.js";
import { createError } from "../utils/error.js";

export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });

    res.status(200).json({
      status: "success",
      data: {
        data: newUser,
      },
    });
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) return next(createError(404, "User not found."));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordCorrect)
      return next(createError(404, "Wrong password or email address."));

    const {password, isAdmin, ...otherDetails} = user._doc;

    res.status(200).json({
      status: "success",
      data: {
        data: {...otherDetails},
      },
    });
  } catch (err) {
    next(err);
  }
};
