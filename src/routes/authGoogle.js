const express = require("express");
const router = express.Router();
const authGoogleController = require("../controller/authGoogleController");

router.post("/googlelogin", authGoogleController.googleLogin);

module.exports = router;
