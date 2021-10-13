const express = require("express");
const router = require("express").Router();
const routeContoller = require("../controller/routeController");

router.get("/", routeContoller.server);

router.get("/products", routeContoller.products);

router.get("/account", routeContoller.accounts);

router.post("/delete", routeContoller.delete);

module.exports = router;
