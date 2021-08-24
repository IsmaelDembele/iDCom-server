import express from "express";
import cors from "cors";
// import {data} from "./data.js";
import mongoose from "mongoose";
import { Product } from "./model/products.js";
import { User } from "./model/users.js";
import bcrypt from "bcryptjs";

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

mongoose.connect("mongodb://localhost:27017/idcomdb", {
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

app.get("/products", function (req, res) {
  //this is equivalent to select * from products;
  Product.find(async (error, response) => {
    if (error) {
      console.log(`something went wrong while trying to retrieve the data: ${error}`);
    } else {
      //we send the data retrieved to the client
      // console.log(response);
      res.send(await response);

      // we close out the connection
      // mongoose.connection.close();
    }
  });
});

app.post("/register", async (req, res) => {
  // console.log(req.body);
  const { fullname, email, password } = req.body;

  const pwd = await bcrypt.hash(password, 10);

  console.log(fullname,email, pwd);
  User.insertMany([{ name:fullname, email: email, password: pwd }], (err, response) => {
    if (err) {
      console.log(err);
      res.send("error");
    } else {
      res.send("account created");
    }
  });
});

app.post("/sign", function (req, res) {
  console.log(req.body);
  res.send("ok");
});

app.listen(PORT, () => {
  console.log(`app is listening on http://localhost:${PORT}`);
});
