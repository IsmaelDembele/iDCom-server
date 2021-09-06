const express = require("express");
const router = express.Router();
const { OAuth2Client } = require("google-auth-library"); //to verifier the token
const User = require("../model/users");
const funct = require("../Helper/functions");

const GoogleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

router.post("/googlelogin", async (req, res) => {
  const { tokenId } = req.body;

  try {
    const response = await GoogleClient.verifyIdToken({
      idToken: tokenId,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const { email_verified, name, email } = response.payload;

    let _user = await User.findOne({ email: email });

    //if user does not exist
    if (!_user) {
      //generating the Account ID
      let _userID = "";

      _userID = await funct.generateID();

      _user = new User({
        name: name,
        email: email,
        userID: _userID,
      });
      try {
        _user.save();
      } catch (err) {
        console.error(`error while saving the user ${err}`);
        res.send("error");
      }
    }

    //sign in the user
    req.session.isLoggedIn = true;
    req.session.user = _user;
    return req.session.save(err => {
      if (err) {
        console.log(err);
        res.send("error");
      }
      console.log("user is loggin");
      return res.send("OK");
    });
  } catch (error) {
    return res.send("error");
  }
});
module.exports = router;
