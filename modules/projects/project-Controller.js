import mongoose from "mongoose";

import collections from "../../models/index.js";
import response from "../../response-handler/response.js";
import { statusCode, messages, response_status } from "../../core/constants.js";

const projectOperations = {
    addProject: async (req, res) => {
        try {
            const user = await collections.User.findById({ _id: req.params.id });
            if (user) {
                const project = await collections.Project({
                    title: req.body.title,
                    category: req.body.category,
                    startDate: req.body.startDate,
                    endDate: req.body.endDate,
                    desc: req.body.desc,
                    technologies: req.body.technologies,
                    userID: req.params.id,
                });
                await project.save();
                response.httpResponse(
                    res,
                    statusCode.created,
                    response_status.success,
                    messages.created,
                    project
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
            console.log("Error in addProject", err);
            response.httpResponse(
                res,
                statusCode.badRequest,
                response_status.failure,
                messages.notFound
            );
        }
    },
    listOfProjects: async (req, res) => {
        try {
            const projects = await collections.Project.aggregate([
                {
                    $lookup: {
                        from: "users",
                        let: { userID: "$userID" },
                        pipeline: [
                            {
                                $match: {
                                    $expr: {
                                        $and: [{ $eq: ["$_id", "$$userID"] }],
                                    },
                                },
                            },
                            {
                                $project: {
                                    _id: 0,
                                    phone: 0,
                                    password: 0,
                                    cpassword: 0,
                                    dob: 0,
                                    about: 0,
                                },
                            },
                        ],
                        as: "made_by",
                    },
                },
            ]);

            if (projects.length > 0) {
                response.httpResponse(
                    res,
                    statusCode.ok,
                    response_status.success,
                    messages.projectList,
                    projects
                );
            } else {
                response.httpResponse(
                    res,
                    statusCode.ok,
                    response_status.success,
                    messages.unavailable
                );
            }
        } catch (err) {
            console.log("Error in listOfProjects", err);
            response.httpResponse(
                res,
                statusCode.badRequest,
                response_status.failure,
                messages.notFound
            );
        }
    },
    updateProject: async (req, res) => {
        try {
            const updated_pro = await collections.Project.updateOne({ _id: req.query.updateId }, {
                $set: {
                    title: req.body.title,
                    category: req.body.category,
                    startDate: req.body.startDate,
                    endDate: req.body.endDate,
                    desc: req.body.desc,
                    technologies: req.body.technologies,
                }
            });
            if (updated_pro.modifiedCount) {
                response.httpResponse(res, statusCode.ok, response_status.success, messages.updateSuccess);
            } else {
                response.httpResponse(res, statusCode.badRequest, response_status.failure, messages.unableToUpdate);
            }
        } catch (err) {
            console.log("Error in updateProject", err);
            response.httpResponse(
                res,
                statusCode.badRequest,
                response_status.failure,
                messages.notFound
            );
        }
    },
    deleteProject: async (req, res) => {
        try {
            const deleted_project = await collections.Project.deleteOne({
                _id: req.query.deleteId,
            });
            if (deleted_project) {
                response.httpResponse(
                    res,
                    statusCode.ok,
                    response_status.success,
                    messages.deletedSuccess
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
            console.log("Error in deleteProject", err);
            response.httpResponse(
                res,
                statusCode.badRequest,
                response_status.failure,
                messages.notFound
            );
        }
    },
};

export default projectOperations;
