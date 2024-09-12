const express = require("express");
const router = express.Router();
const request = require("../controllers/request.controller")
const {checkAuth } = require('../midleware/authverify')
const { uploadimage } = require("../utils/savestorage")

router.get("/",checkAuth, request.getRequests);
router.get("/oneRequest/:id",checkAuth, request.getRequest);
router.post("/", request.createRequest); 
router.put("/request/:id",checkAuth,request.editRequest);
router.delete("/:id",checkAuth, request.deleteRequest);

module.exports = router 