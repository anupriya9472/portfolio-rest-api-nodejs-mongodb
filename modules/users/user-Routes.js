/***********************************
 **** node module defined here *****
 ***********************************/
import express from "express";
import passport from "passport";

/** importing user controller*/
import userOperations from "./user-Controller.js";
/** importing express validator */
import Validator from "../../helper/expressValidator.js";

import {
  isUserMailVerified,
  isLogedIn,
  checkUserAuthenticated,
} from "../../middlewares/middlewares.js";

const user_router = express.Router();
const validator = new Validator();

/**
 * Post route for login
 * @param {*} isLogedIn Checking user already loged in or not
 * @param {*} isUserMailVerified Checking user's mail is verified or not
 * @param {*} passport.authenticate 
 * @param {*} userOperations.login Login controller
 */

user_router.post("/login", isLogedIn, isUserMailVerified, passport.authenticate("local"),
  userOperations.login
);

user_router.get("/logout", checkUserAuthenticated, userOperations.logout);

user_router.post("/register", [isLogedIn, validator.registerInput(), validator.validate], userOperations.register);

user_router.get("/verify-mail", userOperations.verifyMail);

user_router.get("/list", checkUserAuthenticated, userOperations.listOfUsers);

user_router.get("/getone-user/:uid", checkUserAuthenticated, userOperations.getOneUser);

user_router.get("/list-public", userOperations.listOfUsersPublicView);

user_router.patch("/update-user", checkUserAuthenticated, userOperations.updateUser);

user_router.patch("/change-password", checkUserAuthenticated, [validator.changePasswordInput(), validator.validate], userOperations.changePassword);

user_router.delete("/delete-user", checkUserAuthenticated, userOperations.deleteUser);

export default user_router;
