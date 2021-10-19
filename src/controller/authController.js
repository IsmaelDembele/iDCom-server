const bcrypt = require("bcryptjs");
const User = require("../model/users");
const funct = require("../controller/Helper/functions");
const { RESPONSE, MESSAGE } = require("./Helper/constants");

exports.getCsrf = (req, res) => {
  res.send(req.csrfToken());
};

exports.register = async (req, res) => {
  const { fullname, email, password } = req.body;
  let pwd = "";
  let _userID = "";

  //generating the Account UserID
  try {
    _userID = await funct.generateID();
    if (_userID === RESPONSE.FAILURE) {
      return res.send(RESPONSE.FAILURE);
    }
  } catch (error) {
    console.log(`error id generation ${error}`);
    return res.send(RESPONSE.FAILURE);
  }

  //hash the password
  try {
    pwd = await bcrypt.hash(password, 12);
  } catch (error) {
    console.log(`error while generating the hash ${error}`);
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
  } catch (error) {
    console.error(`error while saving the user ${error}`);
    res.send(RESPONSE.FAILURE);
  }
};

exports.getSign = async (req, res, next) => {
  if (req.session.isLoggedIn) {
    res.send(RESPONSE.SUCCESS);
  } else {
    res.send(RESPONSE.FAILURE);
  }
};

exports.postSign = async (req, res, next) => {
  const { email, password } = req.body;
  if (req.session.isLoggedIn) {
    return res.send(RESPONSE.SUCCESS);
  }

  try {
    const _user = await User.findOne({ email });
    if (!_user) {
      return res.send(MESSAGE.LOGIN_FAILURE);
    }

    bcrypt.compare(password, _user.password, (err, result) => {
      if (err) {
        console.error("something went wrong with bcrypt", err);
        return res.send(RESPONSE.FAILURE);
      } else {
        if (result) {
          req.session.isLoggedIn = true;
          req.session.user = _user;
          return res.send(RESPONSE.SUCCESS);
        } else {
          console.log("password does not much");
          return res.send(MESSAGE.LOGIN_FAILURE);
        }
      }
    });
  } catch (error) {
    console.error("something went wrong with user model", error);
    return res.send(RESPONSE.FAILURE);
  }
};

exports.signOut = (req, res, next) => {
  req.session.destroy(err => {
    if (err) {
      return res.send(RESPONSE.FAILURE);
    } else {
      res.send(RESPONSE.SUCCESS);
    }
  });
};
