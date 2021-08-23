// const express = require("express");
// const cors = require("cors");
// const data = require('./data');

import express from "express";
import cors from "cors";
// import data from "./data";
import mongoose from "mongoose";

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

mongoose.connect("mongodb://localhost:27017/idcomdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//creating a schema
//structure of our data
const productSchema = new mongoose.Schema({
  type: {
    type: String,
    required: [true, "no type specified"],
  },
  url: {
    type: String,
    required: [true, "no url specified"],
  },
  url2: String,
  name: {
    type: String,
    required: [true, "no name specified"],
  },
  price: {
    type: String,
    required: [true, "no price specified"],
  },
  description: String,
});

// creating a model
//we use the schema to create a model
//this will be save in a collection called "products" in PLURAL
const Product = mongoose.model("Product", productSchema);

/**
 * 
 * I have previously inserted the data into the database 
 * using this code.
 * 
 * Product.insertMany([...data], (err, res) => {
 * if (err) {
 *   console.log(err);
 * } else {
 *   console.log(res);
 * }
});
 */

app.get("/index", function (req, res) {
  //this is equivalent to select * from products;
  Product.find((error, response) => {
    if (error) {
      console.log(`something went wrong while trying to retrieve the data: ${error}`);
    } else {
      //we send the data retrieved to the client
      res.send(response);
    }

    //we close out the connection
    mongoose.connection.close();
  });
});

app.listen(PORT, () => {
  console.log(`app is listening on http://localhost:${PORT}`);
});
