const express = require("express");
const cors = require("cors");

const data = require('./data');

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

// respond with "hello world" when a GET request is made to the homepage
app.get("/index", function (req, res) {
  // console.log(data);
  res.send(data.data);
});

app.listen(PORT, () => {
  console.log(`app is listening on http://localhost:${PORT}`);
});
