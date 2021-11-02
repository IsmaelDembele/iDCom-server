const bcrypt = require("bcryptjs");
const User = require("../model/users");
const {
  validateEmail,
  validateFullname,
  validatePassword,
  generateID,
} = require("../controller/Helper/functions");
const { createAccountMail, resetPasswordMail, confirmChangePwdMail } = require("./Helper/email_fn");
const { RESPONSE, MESSAGE } = require("./Helper/constants");
const jwt = require("jsonwebtoken");

exports.getCsrf = (req, res) => {
  res.send(req.csrfToken());
};

exports.register = async (req, res) => {
  const { fullname, email, password } = req.body;

  if (!validateEmail(email) || !validateFullname(fullname) || !validatePassword(password)) {
    return res.send(RESPONSE.FAILURE);
  }

  let pwd = "";
  let _userID = "";

  //generating the Account UserID
  try {
    _userID = await generateID();
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
    emailVerified: false,
  });

  try {
    await _user.save();
  } catch (error) {
    console.error(`error while saving the user ${error}`);
    return res.send(MESSAGE.EMAIL_EXIST);
  }

  try {
    //sending the confirmation email
    createAccountMail(fullname, email);
    return res.send(MESSAGE.ACCOUNT_CREATED);
  } catch (error) {
    console.log("coult not send the email", error);
    return res.send(RESPONSE.FAILURE);
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

  if (!validateEmail(email) || !validatePassword(password)) {
    return res.send(RESPONSE.FAILURE);
  }

  try {
    const _user = await User.findOne({ email });
    if (!_user) {
      return res.send(MESSAGE.LOGIN_FAILURE);
    }

    // console.log(_user);

    if (!_user.emailVerified) {
      console.log("email is not verify");
      //sending the confirmation email
      createAccountMail(_user.name, email);
      return res.send(MESSAGE.VERIFY_EMAIL);
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

exports.postVerifyEmail = async (req, res, next) => {
  const { token } = req.body;
  let decoded = "";

  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    console.error("jwt fail to verify", error);
    return res.send(MESSAGE.EXPIRED_TOKEN);
  }

  const { name, recipient, exp } = decoded;

  // const exp = decoded.exp;
  const current = Math.floor(Date.now() / 1000);

  if (exp < current) {
    console.log("token expired");
    return res.send(MESSAGE.EXPIRED_TOKEN);

    //remove the email from the database and let the user now
  } else {
    //get emailVerified field to true
    User.findOneAndUpdate({ email: recipient }, { emailVerified: true }, (error, result) => {
      if (error) {
        console.error("Cannot updated the user emailVerified field", error);
        res.send("error can't update the user");
      } else {
        console.log(`${name} emailVerified field updated!!!`);
        return res.send(RESPONSE.SUCCESS);
      }
    });
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

exports.postRequestToken = async (req, res, next) => {
  const { email } = req.body;

  let _user = null;

  try {
    //check if the email exist in the database
    _user = await User.findOne({ email });
    // res.send(exist);
  } catch (error) {
    console.log(error);
    return res.send(false);
  }

  const { name } = _user;
  // send a password reset token to the user
  try {
    resetPasswordMail(name, email);
  } catch (error) {
    console.log(error);
    return res.send("Could not send the reset email", false);
  }
  res.send(_user !== null);
};

exports.postChangePassword = async (req, res, next) => {
  const { token, pwd } = req.body;
  const error = [];

  let decoded = "";
  let hash = "";

  try {
    //verifier the token
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    error.push({
      field: "jwt",
      message: `jwt fail to verify ${err}`,
    });
    //it is ok to send the wrong error message if the someone tempered with the token
    res.send(MESSAGE.EXPIRED_TOKEN);
  }

  // console.log(decoded);

  const { name, recipient } = decoded;

  try {
    //hash the password
    hash = await bcrypt.hash(pwd, 12);
  } catch (err) {
    error.push({
      field: "hash",
      message: `error while generating the hash ${err}`,
    });
  }

  //if there is no error
  if (error.length === 0) {
    User.findOneAndUpdate({ email: recipient }, { password: hash }, (err, result) => {
      if (err) {
        console.log();
        error.push({
          field: "Update password",
          message: `could not update the password ${err}`,
        });
        res.send(RESPONSE.FAILURE);
      }
    });
    try {
      confirmChangePwdMail(name, recipient);
    } catch (err) {
      error.push({
        field: "email",
        message: `Could not send the password changed confirmation email: ${err}`,
      });
    }
  }

  if (error.length > 0) {
    console.log(error);
    res.send(RESPONSE.FAILURE);
  } else {
    console.log("Password changed");
    res.send(RESPONSE.SUCCESS);
  }
};
