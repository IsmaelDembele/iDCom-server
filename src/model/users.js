const mongoose = require("mongoose");
// const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "no name specified"],
  },
  userID: {
    type: String,
    require: [true, "userID is missing"],
    // unique: [true, "userID must be unique"],
  },
  email: {
    type: String,
    required: [true, "no email"],
    unique: [true, "this email is already taken"],
  },
  password: {
    type: String,
    //we don't save any password when we create an account with google
  },
  emailVerified: {
    type: Boolean,
    required: [true, "email verification field missing"],
  },
});

module.exports = mongoose.model("User", userSchema);
