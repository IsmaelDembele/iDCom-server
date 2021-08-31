const mongoose = require("mongoose");
// const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "no name specified"],
  },
  email: {
    type: String,
    required: [true, "no email"],
    unique: [true, "this email is already taken"],
  },
  password: {
    type: String,
    required: [true, "no password specified"],
  },
});

// userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);

module.exports  = mongoose.model("User", userSchema);
