const mongoose = require("mongoose");

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

//this will be save in a collection called "products" in PLURAL
Product = mongoose.model("Product", productSchema);

module.exports = Product;
