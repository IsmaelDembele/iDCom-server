const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const jwt = require("jsonwebtoken");

const OAuth2 = google.auth.OAuth2;

const OAuth2Client = new OAuth2(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET);

OAuth2Client.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH_TOKEN });

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
    rejectUnauthorized: false,
  },
});

const sendEmail = (name, recipient, subject, mycallback) => {
  //expire in 60 min
  const token = jwt.sign({ name, recipient }, process.env.JWT_SECRET, { expiresIn: "1h" });

  const mailOptions = {
    from: `iDCom ${process.env.GOOGLE_EMAIL}`,
    to: recipient,
    subject: subject,
    html: mycallback(name, token),
  };

  transporter.sendMail(mailOptions, (error, result) => {
    if (error) {
      console.log("Could not send the email", error);
    }
    transporter.close();
  });
};

exports.createAccountMail = (name, recipient) => {
  const subject = "Account creation";
  sendEmail(name, recipient, subject, createAccountMessage);
};

exports.resetPasswordMail = (name, recipient) => {
  const subject = "Password Reset";
  sendEmail(name, recipient, subject, resetPasswordMessage);
};

exports.confirmChangePwdMail = (name, recipient) => {
  const subject = "Password Changed";
  sendEmail(name, recipient, subject, PasswordChangedConfirmationMessage);
};

// -----------------------------Email bodies ----------------------------------------------------------

const createAccountMessage = (name, token) => {
  return `
      <p> ${name}, your account has been created successfully,
       please click on this <a href='${process.env.CORS_ORIGIN}/verifyEmail/${token}' 	target="_blank" >link</a>
        to verify your email.</p>
    
      <h3>iDCom</h3>
      `;
};

const resetPasswordMessage = (name, token) => {
  return `
      <p> ${name}, you have requested a token to change your password.
       please click on this <a href='${process.env.CORS_ORIGIN}/passwordreset/${token}' 	target="_blank" >link</a>
       to change your password.</p>
    
      <h3>iDCom</h3>
      `;
};

const PasswordChangedConfirmationMessage = name => {
  return `
      <p> ${name}, your password has been changed successfully!!!</p>
    
      <h3>iDCom</h3>
      `;
};

// module.exports = sendMail;
