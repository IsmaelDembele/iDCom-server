const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");

router.get("/csrf", authController.getCsrf);

router.post("/register", authController.register);

router.get("/sign", authController.getSign);

router.post("/sign", authController.postSign);

router.post("/sign-out", authController.signOut);

router.post("/verifyemail", authController.postVerifyEmail);

router.post("/requestToken", authController.postRequestToken);

router.post("/changePassword", authController.postChangePassword);

module.exports = router;
