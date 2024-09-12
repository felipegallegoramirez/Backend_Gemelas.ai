const express = require("express");
const router = express.Router();
const flujo = require("../controllers/flujo.controller")
const {checkAuth } = require('../midleware/authverify')
const { uploadimage } = require("../utils/savestorage")

router.get("/",checkAuth, flujo.getFlujos);
router.get("/oneFlujo/:id",checkAuth, flujo.getFlujo);
router.post("/", flujo.createFlujo); 
router.put("/flujo/:id",checkAuth,flujo.editFlujo);
router.delete("/:id",checkAuth, flujo.deleteFlujo);

module.exports = router 