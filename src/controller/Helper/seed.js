const data = require("../../model/data");
const Product = require("../../model/products");

const insterData = () => {
  Product.insertMany([...data], (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log(res);
    }
  });
};
