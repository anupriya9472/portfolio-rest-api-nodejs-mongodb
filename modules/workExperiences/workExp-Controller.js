import mongoose from "mongoose";

import collections from "../../models/index.js";
import response from "../../response-handler/response.js";
import { statusCode, messages, response_status } from "../../core/constants.js";

const workExpOperations = {
    addWorkExperience: async (req, res) => {
        try {
            const user = await collections.User.findById({ _id: req.params.id });
            if (user) {
                const workExp = await collections.WorkExperience({
                    jobTitle: req.body.jobTitle,
                    organizationName: req.body.organizationName,
                    organizationLocation: req.body.organizationLocation,
                    organizationWebsite: req.body.organizationWebsite,
                    startDate: req.body.startDate,
                    endDate: req.body.endDate,
                    isActive: req.body.isActive,
                    desc: req.body.desc,
                    tasks: req.body.tasks,
                    userID: req.params.id
                });
                await workExp.save();

                response.httpResponse(res, statusCode.created, response_status.success, messages.created, workExp);
            } else {
                response.httpResponse(res, statusCode.notFound, response_status.failure, messages.userUnavailable);
            }
        } catch (err) {
            console.log("Error in addWorkExperience", err);
            response.httpResponse(res, statusCode.badRequest, response_status.failure, messages.notFound);
        }
    },
    updateWorkExp: async (req, res) => {
        try {
            const updated_workExp = await collections.WorkExperience.updateOne({
                _id: req.query.updateId
            }, {
                $set: {
                    jobTitle: req.body.jobTitle,
                    organizationName: req.body.organizationName,
                    organizationLocation: req.body.organizationLocation,
                    organizationWebsite: req.body.organizationWebsite,
                    startDate: req.body.startDate,
                    endDate: req.body.endDate,
                    isActive: req.body.isActive,
                    desc: req.body.desc,
                    tasks: req.body.tasks,
                }
            });
            if (updated_workExp.modifiedCount) {
                console.log(updated_workExp);
                response.httpResponse(res, statusCode.ok, response_status.success, messages.updateSuccess);
            } else {
                response.httpResponse(res, statusCode.badRequest, response_status.failure, messages.unableToUpdate);
            }

        } catch (err) {
            console.log("Error in updateWorkExp", err);
            response.httpResponse(res, statusCode.badRequest, response_status.failure, messages.notFound);
        }
    },
    deleteWorkExp: async (req, res) => {
        try {
            if (req.query.deleteId) {
                const deleted_workExp = await collections.WorkExperience.findByIdAndDelete(req.query.deleteId);
                if (deleted_workExp) {
                    response.httpResponse(res, statusCode.ok, response_status.success, messages.deletedSuccess);
                } else {
                    response.httpResponse(res, statusCode.notFound, response_status.failure, messages.unavailable);
                }
            } else {
                throw new Error("Delete id is unavailable");
            }

        } catch (err) {
            console.log("Error in deleteWorkExp", err);
            response.httpResponse(res, statusCode.badRequest, response_status.failure, messages.notFound);
        }
    }
}

export default workExpOperations;