import response from "../response-handler/response.js";
import { statusCode, messages, response_status } from "../core/constants.js";
import collections from "../models/index.js";

const isUserMailVerified = async (req, res, next) => {
    try {
        const user = await collections.User.findOne({ email: req.body.email });
        if (user.isMailVerified) {
            next();
        } else {
            response.httpResponse(res, statusCode.unauthorized, response_status.failure, "Please verify your mail before login");
        }
    } catch (err) {
        next(err);
    }
}

const isLogedIn = (req, res, next) => {
    try {
        if (req.user) {
            response.httpResponse(res, statusCode.badRequest, response_status.failure, "User already LogedIn");
        } else {
            res.set('Cache-Control', 'no-cache,private,no-store,must-revalidate,post-check=0,pre-check=0');
            return next();
        }
    } catch (err) {
        next(err);
    }
}

const checkUserAuthenticated = (req, res, next) => {
    try {
        if (req.isAuthenticated()) {
            res.set('Cache-Control', 'no-cache,private,no-store,must-revalidate,post-check=0,pre-check=0');
            return next();
        } else {
            response.httpResponse(res, statusCode.unauthorized, response_status.failure, "User Unauthorized");
        }
    } catch (err) {
        next(err);
    }
}

export { isUserMailVerified, isLogedIn, checkUserAuthenticated };