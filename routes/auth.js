const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../model/users");

router.post("/register", async (req, res, next) => {
  console.log(req.body);
  const { fullname, email, password } = req.body;
  let pwd = "";

  try {
    pwd = await bcrypt.hash(password, 10);
  } catch (error) {
    console.log(`error while generating the hash ${error}`);
    return res.send("error");
  }

  if (await pwd) {
    const _user = new User({
      name: fullname,
      email: email,
      password: pwd,
    });

    if (!_user) {
      console.log(`error while creating the user`);
      return res.send("error");
    }

    try {
      _user.save();
      return res.send("account created");
    } catch (err) {
      console.error(`error while saving the user ${err}`);
    }
  } else {
    res.send("error");
  }
});

router.get("/sign", async(req,res,next)=>{
    res.send(req.session.isLoggedIn === true);// to send a boolean value
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

module.exports = router;
