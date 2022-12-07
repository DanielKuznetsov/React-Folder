const express = require("express");
const Person = require("../models/userModel.js");

exports.signup = async (req, res, next) => {
  try {
    const newUser = await Person.create(req.body);

    res.status(200).json({
      status: "seccess",
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    console.log(err);
  }
};
