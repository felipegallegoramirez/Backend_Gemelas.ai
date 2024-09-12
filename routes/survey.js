const express = require("express");
const router = express.Router();
const survey = require("../controllers/survey.controller")
const {checkAuth } = require('../midleware/authverify')
const { uploadimage } = require("../utils/savestorage")

router.get("/",checkAuth, survey.getSurveys);
router.get("/oneSurvey/:id",checkAuth, survey.getSurvey);
router.post("/", survey.createSurvey); 
router.put("/survey/:id",checkAuth,survey.editSurvey);
router.delete("/:id",checkAuth, survey.deleteSurvey);

module.exports = router 