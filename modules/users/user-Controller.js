/***********************************
 **** node module defined here *****
 ***********************************/
import mongoose from "mongoose";
import bcrypt from "bcrypt";


import collections from "../../models/index.js";
import response from "../../response-handler/response.js";
import { statusCode, messages, response_status } from "../../core/constants.js";
import sendVerifyMail from "../../helper/sendMail.js";

const userOperations = {
  /**
   * Login
   * @param {*} req 
   * @param {*} res 
   * @param {*} next 
   */
  login: async (req, res, next) => {
    // console.log("login");
    response.httpResponse(
      res,
      statusCode.ok,
      response_status.success,
      messages.loginSuccess
    );
  },
  /**
   * Logout
   * @param {*} req 
   * @param {*} res 
   * @param {*} next 
   */
  logout: async (req, res, next) => {
    req.logout((err) => {
      if (err) return next(err);
      response.httpResponse(
        res,
        statusCode.ok,
        response_status.success,
        messages.logoutSuccess
      );
    });
  },
  /**
   * Register
   * @param {*} req 
   * @param {*} res 
   */
  register: async (req, res) => {
    try {
      // console.log("register");
      const { name, phone, email, password, dob, about, skills } =
        req.body;

      const hashpwd = await bcrypt.hash(password, 12);
      const user = await collections.User.create({
        name,
        phone,
        email,
        password: hashpwd,
        dob,
        about,
        skills,
      });

      // Sending mail verification link
      // const content = `<p>Hello ${name},\n\nPlease <a href="http://localhost:5000/user/verify-mail?verifyMailId=${user._id}"> Click here </a> to verify your mail.</p>`;

      //await sendVerifyMail(user.email, "Verify your mail", content);
      response.httpResponse(
        res,
        statusCode.created,
        response_status.success,
        messages.userCreated,
        user
      );

    } catch (err) {
      console.log("Error in register ", err);
      response.httpResponse(
        res,
        statusCode.badRequest,
        response_status.failure,
        messages.unableToCreate
      );
    }
  },
  /**
   * Mail verify
   * @param {*} req 
   * @param {*} res 
   */
  verifyMail: async (req, res) => {
    try {
      // console.log("verify")
      await collections.User.findByIdAndUpdate(req.query.verifyMailId, {
        $set: { isMailVerified: true },
      });
      response.httpResponse(
        res,
        statusCode.ok,
        response_status.success,
        "Email Successfully verified"
      );
    } catch (err) {
      console.log("Error in verifyMail ", err);
      response.httpResponse(
        res,
        statusCode.badRequest,
        response_status.failure,
        "Unable to verify mail"
      );
    }
  },
  /**
   * List of users
   * @param {*} req 
   * @param {*} res 
   */
  listOfUsers: async (req, res) => {
    try {
      const users = await collections.User.aggregate([
        { $project: { password: 0 } }
      ]);
      if (users.length > 0) {
        response.httpResponse(
          res,
          statusCode.ok,
          response_status.success,
          messages.listUsers,
          users
        );
      } else {
        response.httpResponse(
          res,
          statusCode.notFound,
          response_status.failure,
          messages.userUnavailable
        );
      }
    } catch (err) {
      console.log("Error in list users", err);
      response.httpResponse(
        res,
        statusCode.badRequest,
        response_status.failure,
        messages.notFound
      );
    }
  },
  /**
   * Getting one user details
   * @param {*} req 
   * @param {*} res 
   */
  getOneUser: async (req, res) => {
    try {
      const user = await collections.User.aggregate([
        { $match: { _id: new mongoose.Types.ObjectId(req.params.uid) } },
        { $project: { password: 0 } },
        {
          $lookup: {
            from: "educations",
            let: { id: "$_id" },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $and: [{ $eq: ["$userID", "$$id"] }],
                  },
                },
              },
              { $project: { userID: 0 } },
            ],
            as: "Education",
          },
        },
        {
          $lookup: {
            from: "projects",
            let: { id: "$_id" },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $and: [{ $eq: ["$userID", "$$id"] }],
                  },
                },
              },
              { $project: { userID: 0 } },
            ],
            as: "Projects",
          },
        },
        {
          $lookup: {
            from: "workexperiences",
            let: { id: "$_id" },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $and: [{ $eq: ["$userID", "$$id"] }],
                  },
                },
              },
              { $project: { userID: 0 } },
            ],
            as: "WorkExperience",
          },
        }
      ]);
      if (user.length > 0) {
        response.httpResponse(
          res,
          statusCode.ok,
          response_status.success,
          messages.listUsers,
          user
        );
      } else {
        response.httpResponse(
          res,
          statusCode.notFound,
          response_status.failure,
          messages.unavailable
        );
      }
    } catch (err) {
      console.log("Error in getOneUser", err);
      response.httpResponse(
        res,
        statusCode.badRequest,
        response_status.failure,
        messages.notFound
      );
    }
  },
  /**
   * List of users in public view
   * @param {*} req 
   * @param {*} res 
   */
  listOfUsersPublicView: async (req, res) => {
    try {
      const users = await collections.User.aggregate([
        {
          $lookup: {
            from: "educations",
            let: { id: "$_id" },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $and: [{ $eq: ["$userID", "$$id"] }],
                  },
                },
              },
              { $project: { _id: 0, userID: 0 } },
            ],
            as: "Education",
          },
        },
        {
          $lookup: {
            from: "projects",
            let: { id: "$_id" },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $and: [{ $eq: ["$userID", "$$id"] }],
                  },
                },
              },
              { $project: { _id: 0, userID: 0 } },
            ],
            as: "Projects",
          },
        },
        {
          $lookup: {
            from: "workexperiences",
            let: { id: "$_id" },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $and: [{ $eq: ["$userID", "$$id"] }],
                  },
                },
              },
              { $project: { _id: 0, userID: 0 } },
            ],
            as: "WorkExperience",
          },
        },
        { $project: { phone: 0, password: 0, isMailVerified: 0 } }
      ]);
      if (users.length > 0) {
        response.httpResponse(
          res,
          statusCode.ok,
          response_status.success,
          messages.listUsers,
          users
        );
      } else {
        response.httpResponse(
          res,
          statusCode.notFound,
          response_status.failure,
          messages.unavailable
        );
      }
    } catch (err) {
      console.log("Error in listOfUsers PublicView", err);
      response.httpResponse(
        res,
        statusCode.badRequest,
        response_status.failure,
        messages.notFound
      );
    }
  },
  /**
   * Update user details
   * @param {*} req 
   * @param {*} res 
   */
  updateUser: async (req, res) => {
    try {
      const updated_user = await collections.User.findByIdAndUpdate(
        req.query.updateId,
        {
          $set: {
            name: req.body.name,
            phone: req.body.phone,
            dob: req.body.dob,
            about: req.body.about,
            skills: req.body.skills,
          },
        }
      );

      if (updated_user.modifiedCount) {
        response.httpResponse(
          res,
          statusCode.ok,
          response_status.success,
          messages.userUpdated
        );
      } else {
        response.httpResponse(
          res,
          statusCode.badRequest,
          response_status.failure,
          messages.unableToUpdate
        );
      }
    } catch (err) {
      console.log("Error in updateUser", err);
      response.httpResponse(
        res,
        statusCode.notFound,
        response_status.failure,
        messages.notFound
      );
    }
  },
  /**
   * Change Password
   * @param {*} req 
   * @param {*} res 
   */
  changePassword: async (req, res) => {
    try {
      const { newPassword } = req.body;

      await collections.User.updateOne({ _id: req.query.changeId }, {
        $set: {
          password: await bcrypt.hash(newPassword, 12)
        }
      });
      response.httpResponse(res, statusCode.ok, response_status.success, messages.updateSuccess);

    } catch (err) {
      console.log("Error in changePassword", err);
      response.httpResponse(
        res,
        statusCode.badRequest,
        response_status.failure,
        messages.notFound
      );
    }
  },
  /**
   * Delete user
   * @param {*} req 
   * @param {*} res 
   */
  deleteUser: async (req, res) => {
    try {
      if (req.query.deleteId) {
        const deleted_user = await collections.User.findByIdAndDelete(
          req.query.deleteId
        );
        if (deleted_user) {
          const isEducation = await collections.Education.findOne({ userID: req.query.deleteId });
          const isProject = await collections.Project.findOne({ userID: req.query.deleteId });

          const isWorkExp = await collections.WorkExperience.findOne({ userID: req.query.deleteId });

          if (isEducation) {
            await collections.Education.deleteMany({ userID: req.query.deleteId });
          }

          if (isProject) {
            await collections.Project.deleteMany({ userID: req.query.deleteId });
          }

          if (isWorkExp) {
            await collections.WorkExperience.deleteMany({ userID: req.query.deleteId });
          }

          response.httpResponse(
            res,
            statusCode.ok,
            response_status.success,
            messages.userDeleted
          );
        } else {
          response.httpResponse(
            res,
            statusCode.notFound,
            response_status.failure,
            messages.userUnavailable
          );
        }
      }
      else {
        response.httpResponse(res, statusCode.badRequest, response_status.failure, "Fill Required Information");
      }

    } catch (err) {
      console.log("Error in deleteUser", err);
      response.httpResponse(
        res,
        statusCode.badRequest,
        response_status.failure,
        messages.notFound
      );
    }
  },
};

export default userOperations;