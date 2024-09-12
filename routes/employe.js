const express = require("express");
const router = express.Router();
const employe = require("../controllers/employe.controller")
const {checkAuth } = require('../midleware/authverify')
const { uploadimage } = require("../utils/savestorage")

router.get("/",checkAuth, employe.getEmployes);
router.get("/oneEmploye/:id",checkAuth, employe.getEmploye);
router.post("/", employe.createEmploye); 
router.put("/employe/:id",checkAuth,employe.editEmploye);
router.delete("/:id",checkAuth, employe.deleteEmploye);

module.exports = router 