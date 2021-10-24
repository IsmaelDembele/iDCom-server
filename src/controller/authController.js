const bcrypt = require("bcryptjs");
const User = require("../model/users");
const funct = require("../controller/Helper/functions");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const { RESPONSE, MESSAGE } = require("./Helper/constants");

const OAuth2 = google.auth.OAuth2;

const OAuth2Client = new OAuth2(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET);

OAuth2Client.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH_TOKEN });

const sendMail = (name, recipent) => {
  const accessToken = OAuth2Client.getAccessToken();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.GOOGLE_EMAIL,
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
      accessToken: accessToken,
    },
    tls: {
      rejectUnauthorized: false
  }
  });

  const mailOptions = {
    from: `iDCom ${process.env.GOOGLE_EMAIL}`,
    to: recipent,
    Subject: "Account creation",
    html: get_html_message(name),
  };

  transporter.sendMail(mailOptions, (error, result) => {
    if (error) {
      console.log("Could not send the email", error);
    } else {
      console.log("Success: ", result);
    }
    transporter.close();
  });
};

const get_html_message = name => {
  return `
  <h3> ${name}, your account has been created successfully, please use your email and password to 
  login.</h3>

  <h3>iDCom</h3>
  `;
};

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

    // --------------------------------------------------------
    sendMail(fullname, email);
    // -------------------------------------------------------

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
