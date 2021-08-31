require("dotenv").config();
const express = require("express");
const session = require("express-session");
const cors = require("cors");
// require {data} = "./data.js";
const mongoose = require("mongoose");
const Product = require("./model/products");
const User = require("./model/users");

// const jwt = require("jsonwebtoken");
const MongoDBStore = require("connect-mongodb-session")(session);

const authRoute = require("./routes/auth");

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(express.json());
app.use(cors(corsOptions));

const PORT = process.env.PORT || 5000;
const MONGO_URI = "mongodb://localhost:27017/idcomdb";

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
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
  //we can add expire to specified how long an entry should last
});

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 86400000//1000*60*60*24 => 1day in milliseconds
    },
    store: store,
  })
);

app.get("/products", function (req, res) {
  //this is equivalent to select * from products;

  Product.find()
    .then(response => {
      // console.log(response);
      res.send(response);
    })
    .catch(err => {
      console.log(`something went wrong while trying to retrieve the data: ${err}`);
    });
});


app.use(authRoute);



app.listen(PORT, () => {
  console.log(`app is listening on http://localhost:${PORT}`);
});
