import express from "express";
import projectOperations from "./project-Controller.js";
import Validator from "../../helper/expressValidator.js";

import { checkUserAuthenticated } from "../../middlewares/middlewares.js";
const project_router = express.Router();
const validator = new Validator();

project_router.post("/addProject/:id", checkUserAuthenticated, [validator.projectInput(), validator.validate], projectOperations.addProject);

project_router.get("/project-list", projectOperations.listOfProjects);

project_router.patch("/update-project", checkUserAuthenticated, [validator.projectInput(), validator.validate], projectOperations.updateProject);

project_router.delete("/delete-project", checkUserAuthenticated, projectOperations.deleteProject);

export default project_router;