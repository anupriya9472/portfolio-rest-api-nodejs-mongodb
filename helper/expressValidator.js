import bcrypt from "bcrypt";
import { check, validationResult } from "express-validator";
import collections from "../models/index.js";

class Validator {
    registerInput() {
        try {
            return [
                check('name').not().isEmpty().withMessage("Name is required").bail().isLength({ min: 3 }).withMessage("Name should be minimum 3 character.").bail().matches(/^[A-Za-z]+[A-Za-z \s]{2,}$/)
                    .withMessage('Name must be character only'),
                check('phone').not().isEmpty().withMessage("Phone number is required.").bail().isLength({min : 10 , max:10}).withMessage("Phone number is invalid. It should be 10 digit.").bail().matches(/^[0-9]{10}$/).withMessage("Phone number must be number only."),
                check('email').not().isEmpty().withMessage("Email is required").bail().isEmail().withMessage("Email is invalid").bail().custom(async (value) => {
                    const isUserExist = await collections.User.findOne({ email: value });
                    if (isUserExist) {
                        throw new Error();
                    }
                }).withMessage("User already exist"),
                check('password').not().isEmpty().withMessage("Password is required").bail().isLength({ min: 8, max: 15 }).withMessage("Password should be min 8 character and max 15 character.").bail().matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/).withMessage("Password should contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character"),
                check('cpassword').custom((value, { req }) => {
                    return value === req.body.password;
                }).withMessage("Password and Confirm Password is Not matched"),
                check('dob').not().isEmpty().withMessage("Date of Birth is required")
            ]
        } catch (err) {
            console.log(err);
        }
    }

    validate(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log("in errors");
            errors.array().forEach(err => console.log("err", err));
            next(errors.array());
        } else {
            next();
        }
    }

    changePasswordInput() {
        try {
            return [
                check('oldpassword').not().isEmpty().withMessage("Old Password is required").bail().custom(async (value, { req }) => {
                    const user = await collections.User.findById(req.query.changeId);
                    if (!await bcrypt.compare(value, user.password)) {
                        throw new Error();
                    }
                }).withMessage("Old password is not matched"),
                check('newPassword').not().isEmpty().withMessage("Password is required").bail().isLength({ min: 8, max: 15 }).withMessage("Password should be min 8 character and max 15 character.").bail().matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/).withMessage("Password should contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character"),
                check('newCpassword').custom((value, { req }) => {
                    return value === req.body.newPassword;
                }).withMessage("Password and Confirm Password is Not matched"),
            ]
        } catch (err) {
            console.log(err);
        }
    }

    eductionInput() {
        try {
            return [
                check('programName').not().isEmpty().withMessage("Program name is required"),
                check('programLevel').not().isEmpty().withMessage("Program Level is required"),
                check('collegeName').not().isEmpty().withMessage("College name is required"),
                check('startDate').not().isEmpty().withMessage("Start date is required"),
            ]
        } catch (err) {
            console.log(err);
        }
    }

    workExperienceInput() {
        try {
            return [
                check('jobTitle').not().isEmpty().withMessage("Job Title is required"),
                check('organizationName').not().isEmpty().withMessage("Organization Name is required"),
                check('organizationWebsite').not().isEmpty().withMessage("Organization Website is required"),
                check('startDate').not().isEmpty().withMessage("Start date is required"),
            ]
        } catch (err) {
            console.log(err);
        }
    }

    projectInput() {
        try {
            return [
                check('title').not().isEmpty().withMessage("Title is required"),
                check('category').not().isEmpty().withMessage("category is required"),
                check('startDate').not().isEmpty().withMessage("Start date is required"),
            ]
        } catch (err) {
            console.log(err);
        }
    }
}

export default Validator;