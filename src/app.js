require("dotenv").config();
const express = require("express");
const session = require("express-session");
const cors = require("cors");
const mongoose = require("mongoose");
const MongoDBStore = require("connect-mongodb-session")(session);
const helmet = require("helmet");
const compression = require("compression");

const routes = require("./routes/routes");
const authRoute = require("./routes/auth");
const googleRoute = require("./routes/authGoogle");

const app = express();

const corsOptions = {
  origin: ["https://idcom.netlify.app"],
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

const store = new MongoDBStore({
  uri: MONGO_URI,
  collection: "session",
  databaseName: process.env.MONGO_DB_NAME,
});

if (app.get("env") === "production") {
  app.set("trust proxy", true); // trust first proxy
}

// console.log(app.get("env"));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    proxy: true,
    cookie: {
      maxAge: 86400000, //1000*60*60*24 => 1 day in milliseconds
      httpOnly: true,
      secure: true,
    },
    store: store,
  })
);

app.use(helmet());
app.use(compression());

app.use(routes);
app.use(authRoute);
app.use(googleRoute);

app.listen(PORT, () => {
  console.log(`app is listening on http://localhost:${PORT}`);
});
