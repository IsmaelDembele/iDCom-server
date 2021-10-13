const Product = require("../model/products");
const User = require("../model/users");

exports.server = (req, res, next) => {
  res.send("server working");
};

exports.products = (req, res) => {
  Product.find()
    .then(response => {
      res.send(response);
    })
    .catch(err => {
      console.error(`something went wrong: ${err}`);
      res.send("error");
    });
};

exports.accounts = (req, res) => {
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
};

exports.delete = (req, res) => {
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
};
