const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../model/users");
const funct = require("../Helper/functions");

router.post("/register", async (req, res) => {
  console.log(req.body);
  const { fullname, email, password } = req.body;
  let pwd = "";
  let _userID = "";

  //generating the Account UserID
  try {
    _userID = await funct.generateID();
  } catch (error) {
    return res.send("error");
  }

  //hash the password
  try {
    pwd = await bcrypt.hash(password, 12);
  } catch (error) {
    console.log(`error while generating the hash ${error}`);
    return res.send("error");
  }

  //create a new user
  const _user = new User({
    name: fullname,
    email: email,
    password: pwd,
    userID: _userID,
  });

  try {
    _user.save();
    return res.send("account created");
  } catch (err) {
    console.error(`error while saving the user ${err}`);
    res.send("error");
  }
});

router.get("/sign", async (req, res,next) => {
  console.log('req.session.isLoggedIn in get /sing',req.session.isLoggedIn);
  // req.request.session.isLoggedIn
  res.send(req.session.isLoggedIn); // to send a boolean valu
});

router.post("/sign", async (req, res, next) => {
  const { email, password } = req.body;

  if (req.session.isLoggedIn) {
    console.log("user is already logged in");
    return res.send("OK");
  }

  try {
    const _user = await User.findOne({ email });
    if (!_user) {
      return res.send("error invalid email/password");
    }

    if (await bcrypt.compare(password, _user.password)) {
      req.session.isLoggedIn = true;
      req.session.user = _user;
      return req.session.save(err => {
        if (err) {
          console.log(err);
        }
        console.log("user is loggin");
        return res.send("OK");
      });
    }
  } catch (error) {
    console.error(error);
    res.send("error");
  }
});

router.post("/sign-out", (req, res, next) => {
  req.session.destroy(err => {
    if (err) return res.send("error");
    else {
      console.log("user is logged out");
      res.send("OK");
    }
  });
});

module.exports = router;
