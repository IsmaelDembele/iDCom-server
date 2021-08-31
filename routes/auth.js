const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../model/users");
const funct = require("../Helper/functions");
/*
get the last user id
let id = '',
const lastUser = await User.findOne().sort('-created_at').exec(function(err, post) { 
if(err){
console.log(err)
  return;
 });
verify if the user have 
if(!lastUser){
  id = 'A-0000001';
}else{
  id = generateID(lastUser.userID);
}

*/

router.post("/register", async (req, res, next) => {
  console.log(req.body);
  const { fullname, email, password } = req.body;
  let pwd = "";
  let userID = "";
  let lastUser ="";

  //generating the Account UserID
  //getting the last user created
  try {
    lastUser = await User.find().sort({created_at: -1});
  } catch (error) {
    res.send('error')
    return;
  }

console.log();

    if(!lastUser){
      userID = 'A-0000001';
    }else{
      userID = funct.generateID(lastUser[0].userID);
    }
    


  try {
    pwd = await bcrypt.hash(password, 10);
  } catch (error) {
    console.log(`error while generating the hash ${error}`);
    return res.send("error");
  }

  if (await pwd) {
    const _user = new User({
      name: fullname,
      email: email,
      password: pwd,
      userID: userID,
    });

    if (!_user) {
      console.log(`error while creating the user`);
      return res.send("error");
    }

    try {
      _user.save();
      return res.send("account created");
    } catch (err) {
      console.error(`error while saving the user ${err}`);
    }
  } else {
    res.send("error");
  }
});

router.get("/sign", async (req, res, next) => {
  res.send(req.session.isLoggedIn === true); // to send a boolean value
});

router.post("/sign", async (req, res, next) => {
  const { email, password } = req.body;

  if (req.session.isLoggedIn) {
    console.log("user is already logged in");
    return res.send("OK");
  }

  try {
    const _user = await User.findOne({ email });
    if (!_user) {
      return res.send("error invalid email/password");
    }

    if (await bcrypt.compare(password, _user.password)) {
      req.session.isLoggedIn = true;
      req.session.user = _user;
      return req.session.save(err => {
        if (err) {
          console.log(err);
        }
        console.log("user is loggin");
        return res.send("OK");
      });
    }
  } catch (error) {
    console.error(error);
    res.send("error");
  }
});

router.post("/sign-out", (req, res, next) => {
  req.session.destroy(err => {
    if (err) return res.send("error");
    else {
      console.log("user is logged out");
      res.send("OK");
    }
  });
});

router.get("/account",(req,res,next)=>{
  if(!req.session.isLoggedIn){
    return res.send('error');
  }else{

    return res.send({
      userID: req.session.user.userID,
      name: req.session.user.name,
      email: req.session.user.email,
    });
  }
})

module.exports = router;
