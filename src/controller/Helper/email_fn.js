const nodemailer = require("nodemailer");
const { google } = require("googleapis");

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
      rejectUnauthorized: false,
    },
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

module.exports = sendMail;
