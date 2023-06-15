import mongoose from "mongoose";

import collections from "../../models/index.js";
import response from "../../response-handler/response.js";
import { statusCode, messages, response_status } from "../../core/constants.js";

const eduOperations = {
    addEducation: async (req, res) => {
        try {
            const user = await collections.User.findById({ _id: req.params.id });
            if (user) {
                const userEdu = await collections.Education.findOne({ programLevel: req.body.programLevel, userID: req.params.id });
                if (!userEdu) {
                    const edu = await collections.Education({
                        programName: req.body.programName,
                        programLevel: req.body.programLevel,
                        collegeName: req.body.collegeName,
                        collegeLocation: req.body.collegeLocation,
                        startDate: req.body.startDate,
                        endDate: req.body.endDate,
                        isActive: req.body.isActive,
                        desc: req.body.desc,
                        userID: req.params.id
                    });
                    await edu.save();
                    response.httpResponse(res, statusCode.created, response_status.success, messages.created, edu);

                } else {
                    response.httpResponse(res, statusCode.badRequest, response_status.failure, messages.eduExist);
                }
            } else {
                response.httpResponse(res, statusCode.notFound, response_status.failure, messages.userUnavailable);
            }
        } catch (err) {
            console.log("Error in addEducation", err);
            response.httpResponse(res, statusCode.badRequest, response_status.failure, messages.notFound);
        }
    },
    updateEdu: async (req, res) => {
        try {
            const updated_edu = await collections.Education.updateOne({ _id: req.query.updateId }, {
                $set: {
                    programName: req.body.programName,
                    programLevel: req.body.programLevel,
                    collegeName: req.body.collegeName,
                    collegeLocation: req.body.collegeLocation,
                    startDate: req.body.startDate,
                    endDate: req.body.endDate,
                    isActive: req.body.isActive,
                    desc: req.body.desc,
                }
            });
            if (updated_edu.modifiedCount) {
                response.httpResponse(res, statusCode.ok, response_status.success, messages.updateSuccess);
            } else {
                response.httpResponse(res, statusCode.badRequest, response_status.failure, messages.unableToUpdate);
            }
        } catch (err) {
            console.log("Error in updateEdu", err);
            response.httpResponse(res, statusCode.badRequest, response_status.failure, messages.notFound);
        }
    },
    deleteEdu: async (req, res) => {
        try {
            const deleted_edu = await collections.Education.deleteOne({ _id: req.query.deleteId });
            if (deleted_edu) {
                response.httpResponse(res, statusCode.ok, response_status.success, messages.deletedSuccess);
            } else {
                response.httpResponse(res, statusCode.notFound, response_status.failure, messages.unavailable);
            }

        } catch (err) {
            console.log("Error in deleteEdu", err);
            response.httpResponse(res, statusCode.badRequest, response_status.failure, messages.notFound);
        }
    }
}

export default eduOperations;