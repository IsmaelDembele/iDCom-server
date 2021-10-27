const data = require("../../model/data");
const Product = require("../../model/products");
const users = require("../../model/users");
// const Users = require("../../model/users");

exports.insterData = () => {
  Product.insertMany([...data], (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log(res);
    }
  });
};

exports.addVerifyEmailfield = () => {
  users.updateMany({}, { emailVerified: true }, (err, res) => {
    if (err) {
      console.log("could not update emailVerified field.");
    } else {
      console.log("emailVerified field updated successfully!");
    }
  });
};
