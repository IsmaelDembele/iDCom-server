const bcrypt = require("bcryptjs");
const User = require("../model/users");
const funct = require("../controller/Helper/functions");
const { RESPONSE, MESSAGE } = require("./Helper/constants");

exports.register = async (req, res) => {
  const { fullname, email, password } = req.body;
  let pwd = "";
  let _userID = "";

  //generating the Account UserID
  try {
    _userID = await funct.generateID();
  } catch (error) {
    return res.send(RESPONSE.FAILURE);
  }

  //hash the password
  try {
    pwd = await bcrypt.hash(password, 12);
  } catch (error) {
    // console.log(`error while generating the hash ${error}`);
    return res.send(RESPONSE.FAILURE);
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
    return res.send(MESSAGE.ACCOUNT_CREATED);
  } catch (err) {
    console.error(`error while saving the user ${err}`);
    res.send(RESPONSE.FAILURE);
  }
};

exports.getSign = async (req, res, next) => {
  res.send(req.session.isLoggedIn); // to send a boolean value
};

exports.postSign = async (req, res, next) => {
  const { email, password } = req.body;
  if (req.session.isLoggedIn) {
    console.log("user is already logged in");
    return res.send(RESPONSE.SUCCESS);
  }

  try {
    const _user = await User.findOne({ email });
    if (!_user) {
      return res.send(MESSAGE.LOGIN_FAILURE);
    }

    bcrypt.compare(password, _user.password, (err, result) => {
      if (err) {
        console.error("something went wrong with bcrypt", error);
        return res.send(RESPONSE.FAILURE);
      } else {
        if (result) {
          req.session.isLoggedIn = true;
          req.session.user = _user;
          console.log("user is loggin");
          return res.send(RESPONSE.SUCCESS);
        } else {
          console.log("password does not much");
          return res.send(MESSAGE.LOGIN_FAILURE);
        }
      }
    });
  } catch (error) {
    console.error("something went wronG with user model", error);
    return res.send(RESPONSE.FAILURE);
  }
};

exports.signOut = (req, res, next) => {
  req.session.destroy(err => {
    if (err) return res.send(RESPONSE.FAILURE);
    else {
      // console.log("user is logged out");
      res.send(RESPONSE.SUCCESS);
    }
  });
};
