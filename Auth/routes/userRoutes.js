const express = require("express");
// const userController = require("../controllers/userController.js");
const authController = require("../controllers/authController.js");

const router = express.Router();

router.post("/signup", authController.signup);

router.route("/");
//   .get(userController.getAllUsers)
//   .post(userController.createUser);

router.route("/:id");
//   .get(userController.getUser)
//   .patch(userController.updateUser)
//   .delete(userController.deleteUser);

module.exports = router;
