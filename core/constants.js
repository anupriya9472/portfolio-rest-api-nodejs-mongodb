const statusCode = {
    "ok": 200,
    "created": 201,
    "badRequest": 400,
    "unauthorized": 401,
    "paymentRequired": 402,
    "notFound": 404,
    "unprocessableEntity": 422,
    "internalServerError": 500
}

const messages = {
    "pageNotFound": "Page Not found",
    "userCreated": "User register successfully",
    "userUpdated": "User updated successfully",
    "userDeleted": "User deleted successfully",
    "unableToCreate": "Unable to create",
    "unableToDelete": "Unable to delete",
    "unableToUpdate":"Unable to update",
    "userExist": "User is already exist",
    "userUnavailable": "User Unavailable",
    "logoutSuccess": "Logout Successfully",
    "loginSuccess": "Login Successfully",
    "requiredFields": "Please fill all required fields",
    "passwordNotMatched": "Password not matched",
    "listUsers": "List of users",
    "projectList": "List of Projects",
    "eduExist": "Eduction already entered",
    "created": "Created Successfully",
    "unavailable": "Unavailable",
    "deletedSuccess": "Deleted Successfully",
    "updateSuccess": "Updated Successfully",
    "notFound": "Not Found"
}

const response_status = {
    "success": 1,
    "failure": 0
}

export { statusCode, messages, response_status };