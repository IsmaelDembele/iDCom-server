require("dotenv").config();
const express = require("express");
const session = require("express-session");
const cors = require("cors");
const mongoose = require("mongoose");
const MongoDBStore = require("connect-mongodb-session")(session);
const helmet = require("helmet");
const compression = require("compression");
const csrf = require("csurf");
const routes = require("./routes/routes");
const authRoute = require("./routes/auth");
const googleRoute = require("./routes/authGoogle");

const app = express();

const corsOptions = {
  origin: [process.env.CORS_ORIGIN],
  method: ["GET", "POST"],
  credentials: true,
};

const csrfProtection = csrf();

app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

app.use(cors(corsOptions));

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const store = new MongoDBStore({
  uri: MONGO_URI,
  collection: "session",
  databaseName: process.env.MONGO_DB_NAME,
});

app.set("trust proxy", app.get("env") === "production"); // trust first proxy

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    proxy: true,
    cookie: {
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax", // must be 'none' to enable cross-site delivery
      maxAge: 86400000, //1000*60*60*24 => 1 day in milliseconds
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    },
    store: store,
  })
);

app.use(helmet());
app.use(compression());
app.use(csrfProtection);

app.use(routes);
app.use(authRoute);
app.use(googleRoute);

app.listen(PORT, () => {
  console.log(`app is listening on http://localhost:${PORT}`);
});
