import express from "express";
import eduOperations from "./edu-Controller.js";
import Validator from "../../helper/expressValidator.js";

import { checkUserAuthenticated } from "../../middlewares/middlewares.js";

const edu_router = express.Router();
const validator = new Validator();

edu_router.post("/addEducation/:id", checkUserAuthenticated, [validator.eductionInput(), validator.validate], eduOperations.addEducation);

edu_router.patch("/update-education", checkUserAuthenticated, [validator.eductionInput(), validator.validate], eduOperations.updateEdu);

edu_router.delete("/delete-education", checkUserAuthenticated, eduOperations.deleteEdu);

export default edu_router;