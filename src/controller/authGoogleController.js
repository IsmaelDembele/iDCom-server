const { OAuth2Client } = require("google-auth-library"); //to verifier the token
const User = require("../model/users");
const { generateID } = require("../controller/Helper/functions");
const { createAccountMail } = require("./Helper/email_fn");
const { MESSAGE } = require("./Helper/constants");
const crypto = require("crypto");

const GoogleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

exports.googleLogin = async (req, res) => {
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

      _userID = await generateID();

      _user = new User({
        name: name,
        email: email,
        password: crypto.randomBytes(60).toString("hex"),
        userID: _userID,
        emailVerified: email_verified,
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
      return res.send("OK");
    });
  } catch (error) {
    return res.send("error");
  }
};
