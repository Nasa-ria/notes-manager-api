const express = require("express");
const controller = require("../Controller/userController");
const router = require("express").Router();




router.post("/login", controller.login);
router.post("/signup" ,controller.create);




module.exports = router;
