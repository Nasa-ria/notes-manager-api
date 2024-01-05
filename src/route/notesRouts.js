const express = require("express");
const controller = require("../Controller/noteController");
// const authenticateToken = require("../lib/authentication");
const router = require("express").Router();

router.post("/notes" ,controller.create);
router.put("/notes/:id" ,controller.update);
router.get("/notes" ,controller.notes);
router.get("/notes/:id" ,controller.note);
router.delete("/notes/:id" ,controller.delete);


module.exports = router;
