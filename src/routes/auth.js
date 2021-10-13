const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");

router.post("/register", authController.register);

router.get("/sign", authController.getSign);

router.post("/sign", authController.setSign);

router.post("/sign-out", authController.signOut);

module.exports = router;
