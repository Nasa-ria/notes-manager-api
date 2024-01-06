const express = require("express");
const controller = require("../controller/noteController");
const authenticateToken = require("../lib/authentication");
const router = require("express").Router();

router.post("/notes" ,  authenticateToken ,controller.create);
router.put("/notes/:id" ,  authenticateToken ,controller.update);
router.get("/notes" , authenticateToken ,controller.notes);
router.get("/notes/:id" , authenticateToken ,controller.note);
router.delete("/notes/:id" , authenticateToken ,controller.delete);
router.get("/search" ,controller.search);
router.get("note/:id/shareNote" , authenticateToken ,controller.search);


module.exports = router;
