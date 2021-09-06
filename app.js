require("dotenv").config();
const express = require("express");
const session = require("express-session");
const cors = require("cors");
// const data = require("./data.js");
const mongoose = require("mongoose");
const Product = require("./model/products");
const User = require("./model/users");

const MongoDBStore = require("connect-mongodb-session")(session);

const authRoute = require("./routes/auth");
const googleRoute = require("./routes/authGoogle");

const app = express();

const corsOptions = {
  origin: "https://idcommerce.herokuapp.com",
  method: ["GET", "POST", "PUT"],
  credentials: true,
};

app.use(express.json());
app.use(cors(corsOptions));

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// Product.insertMany([...data], (err, res) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(res);
//   }
// });

const store = new MongoDBStore({
  uri: MONGO_URI,
  collection: "session",
  databaseName: process.env.MONGO_DB_NAME,
});

if (app.get("env") === "production") {
  app.set("trust proxy", true); // trust first proxy
}

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,//it was false on production
    proxy: true,
    cookie: {
      maxAge: 86400000, //1000*60*60*24 => 1day in milliseconds
      httpOnly: true,
      secure: true,
    },
    store: store,
  })
);

app.get("/", (req, res,next) => {
  res.send("server working");
});

app.get("/products", function (req, res) {
  Product.find()
    .then(response => {
      res.send(response);
    })
    .catch(err => {
      console.log(`something went wrong while trying to retrieve the data: ${err}`);
      res.send("error");
    });
});

app.get("/account", (req, res) => {
  if (!req.session.isLoggedIn) {
    return res.send("error");
  } else {
    return res.send({
      myStatus: "OK",
      userID: req.session.user.userID,
      name: req.session.user.name,
      email: req.session.user.email,
    });
  }
});

app.post("/delete", (req, res) => {
  console.log(req.session.user);

  User.deleteOne({ _id: req.session.user._id }, (err, result) => {
    if (err) {
      return res.send("error");
    }
    req.session.destroy(error => {
      if (error) return res.send("error");
      else {
        console.log("user is logged out");
        res.send("OK");
      }
    });
  });
});

app.use(authRoute);
app.use(googleRoute);

app.listen(PORT, () => {
  console.log(`app is listening on http://localhost:${PORT}`);
});
