// import bcrypt from "bcryptjs/dist/bcrypt.js";
// import User from "../models/User.js";
// import { createError } from "../utils/error.js";
// import jwt from "jsonwebtoken";

// const signToken = (id) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET, {
//     expiresIn: process.env.JWT_EXPIRES_IN,
//   });
// };

// const createSendToken = (user, statusCode, res) => {
//   const token = signToken(user._id);
//   const cookieOptions = {
//     expires: new Date(
//       Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000 // converting to milliseconds
//     ),
//     // secure: true, // to ensure that the cookie will be sent on an excrypted connection
//     // httpOnly: true, // to ensure the cookie won't be modified or access by the browser
//   };

//   // Stroring token in http cookie
//   // cookieOptions.secure = true;

//   res.cookie("jwt", token, cookieOptions);

//   res.status(statusCode).json({
//     status: "success",
//     token,
//     data: {
//       user,
//     },
//   });
// };

// export const signup = async (req, res, next) => {
// //   try {
// //     const salt = bcrypt.genSaltSync(10);
// //     const hash = bcrypt.hashSync(req.body.password, salt);

// //     const newUser = await User.create({
// //       username: req.body.username,
// //       email: req.body.email,
// //       password: hash,
// //     });

// //     res.status(200).json({
// //       status: "success",
// //       data: {
// //         data: newUser,
// //       },
// //     });
// //   } catch (err) {
// //     next(err);
// //   }
// };

// export const login = async (req, res, next) => {
// //   try {
// //     const user = await User.findOne({ email: req.body.email });

// //     if (!user) return next(createError(404, "User not found."));

// //     const isPasswordCorrect = await bcrypt.compare(
// //       req.body.password,
// //       user.password
// //     );

// //     if (!isPasswordCorrect)
// //       return next(createError(404, "Wrong password or email address."));

// //     createSendToken(user, 200, res);
// //   } catch (err) {
// //     next(err);
// //   }
// };
