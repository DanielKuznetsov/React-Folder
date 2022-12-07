const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please tell us your name!"],
  },
  email: {
    type: String,
    required: [true, "Please tell us your email!"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email!"],
  },
  password: {
    type: String,
    required: [true, "Please provide your password!"],
    minlength: 8,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password!"],
    validate: {
        // On CREATE or SAVE
        validator: function(el) {
            // return true or false
            return el === this.password; 
        },
        message: "Passwords are not the same!",
    }
  },
});

personSchema.pre('save', async function(next) {
    if(!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 12);

    this.passwordConfirm = undefined;
    next();
})

const Person = mongoose.model("Person", personSchema);

module.exports = Person;
