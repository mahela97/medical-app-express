const express = require("express");
const symptomRouter = express.Router();
const {getAllSymptoms,addSymptom,getDisease} = require("../controller/symptomController");

symptomRouter.get("/",getAllSymptoms);
symptomRouter.post("/",addSymptom);
symptomRouter.post("/disease",getDisease);


module.exports = symptomRouter;