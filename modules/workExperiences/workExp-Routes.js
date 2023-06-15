import express from "express";
import workExpOperations from "./workExp-Controller.js";
import Validator from "../../helper/expressValidator.js";

import { checkUserAuthenticated } from "../../middlewares/middlewares.js";
const workExp_router = express.Router();
const validator = new Validator();

workExp_router.post("/addWorkExperience/:id", checkUserAuthenticated, [validator.workExperienceInput(), validator.validate], workExpOperations.addWorkExperience);

workExp_router.patch("/update-workExp", checkUserAuthenticated, [validator.workExperienceInput(), validator.validate], workExpOperations.updateWorkExp);

workExp_router.delete("/delete-workExp", checkUserAuthenticated, workExpOperations.deleteWorkExp);

export default workExp_router;