import {
  userInput,
  registerUsersResponse,
  loginInput,
  getUsersResponse,
  changePasswordInput,
  getListPublicResponse,
  getUserByIdResponse,
  updateUserInput
} from "./component.js";

const userPaths = {
  "/user/register": {
    post: {
      tags: ["Users"],
      summary: "Create a User",
      description: "Register user",
      operationId: "createuser",
      requestBody: {
        content: {
          "application/json": {
            schema: userInput,
          },
        },
      },
      responses: {
        201: {
          description: "Created",
          content: {
            "application/json": {
              schema: registerUsersResponse,
            },
          },
        },
        400: {
          description: "Bad Request",
          status: {
            type: "string",
          },
          message: {
            type: "string",
          },
        },
      },
    },
  },
  "/user/login": {
    post: {
      tags: ["Users"],
      summary: "Login",
      description: "Login",
      operationId: "login",
      requestBody: {
        content: {
          "application/json": {
            schema: loginInput,
          },
        },
      },
      responses: {
        200: {
          description: "Success",
          status: {
            type: "string",
          },
          message: {
            type: "string",
          },
        },
        400: {
          description: "Bad Request",
          status: {
            type: "string",
          },
          message: {
            type: "string",
          },
        },
        401:{
          description:"Unauthorized",
          status: {
            type: "string",
          },
          message: {
            type: "string",
          },
        },
        404: {
          description: "Not found",
          status: {
            type: "string",
          },
          message: {
            type: "string",
          },
        },
      },
    },
  },
  "/user/logout": {
    get: {
      tags: ["Users"],
      summary: "Logout",
      description: "Logout",
      operationId: "logout",
      responses: {
        200: {
          description: "Success",
          status: {
            type: "string",
          },
          message: {
            type: "string",
          },
        },
        401: {
          description: "Unauthorized",
          status: {
            type: "string",
          },
          message: {
            type: "string",
          },
        },
      },
    },
  },
  "/user/verify-mail?": {
    get: {
      tags: ["Users"],
      summary: "Verify Email",
      description: "Verify Email",
      operationId: "verify-mail",
      parameters: [
        {
          name: "verifyMailId",
          in: "query",
          description: "Id of the user.",
          required: "true",
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        200: {
          description: "Email Verified",
          status: {
            type: "string",
          },
          message: {
            type: "string",
          },
        },
        400: {
          description: "Bad Request",
          status: {
            type: "string",
          },
          message: {
            type: "string",
          },
        },
      },
    },
  },
  "/user/list": {
    get: {
      tags: ["Users"],
      summary: "Get users",
      description: "Get Stores",
      operationId: "getUsers",
      responses: {
        200: {
          description: "Success",
          content: {
            // content-type
            "application/json": {
              schema: getUsersResponse,
            },
          },
        },
        404: {
          description: "Not found",
          status: {
            type: "string",
          },
          message: {
            type: "string",
          },
        },
      },
    },
  },
  "/user/list-public": {
    get: {
      tags: ["Users"],
      summary: "List Public Users",
      description: "List Public Users",
      operationId: "list-public",
      responses: {
        200: {
          description: "Success",
          content: {
            "application/json": {
              schema: getListPublicResponse,
            },
          },
        },
        400: {
          description: "Bad Request",
          status: {
            type: "string",
          },
          message: {
            type: "string",
          },
        },
        404: {
          description: "Not Found",
          status: {
            type: "string",
          },
          message: {
            type: "string",
          },
        },
      },
    },
  },
  "/user/getone-user/{uid}": {
    get: {
      tags: ["Users"],
      summary: "Get one User by Id",
      description: "Get one User by Id",
      operationId: "getone-user",
      parameters: [
        {
          name: "uid",
          in: "path",
          description: "Id of the user.",
          required: "true",
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        200: {
          description: "Success",
          content: {
            "application/json": {
              schema: getUserByIdResponse,
            },
          },
        },
        400: {
          description: "Bad Request",
          status: {
            type: "string",
          },
          message: {
            type: "string",
          },
        },
        404: {
          description: "Not Found",
          status: {
            type: "string",
          },
          message: {
            type: "string",
          },
        },
      },
    },
  },
  "/user/change-password?": {
    patch: {
      tags: ["Users"],
      summary: "Change Password",
      description: "Change Password",
      operationId: "change-password",
      parameters: [
        {
          name: "changeId",
          in: "query",
          description: "Id of the user.",
          required: "true",
          schema: {
            type: "string",
          },
        },
      ],
      requestBody: {
        content: {
          "application/json": {
            schema: changePasswordInput,
          },
        },
      },
      responses: {
        200: {
          description: "Success",
          status: {
            type: "string",
          },
          message: {
            type: "string",
          },
        },
        400: {
          description: "Bad Request",
          status: {
            type: "string",
          },
          message: {
            type: "string",
          },
        },
      },
    },
  },
  "/user/update-user?": {
    patch: {
      tags: ["Users"],
      summary: "Update User",
      description: "Update User",
      operationId: "update-user",
      parameters: [
        {
          name: "updateId",
          in: "query",
          description: "Id of the user.",
          required: "true",
          schema: {
            type: "string",
          },
        },
      ],
      requestBody: {
        content: {
          "application/json": {
            schema: updateUserInput,
          },
        },
      },
      responses: {
        200: {
          description: "Success",
          status: {
            type: "string",
          },
          message: {
            type: "string",
          },
        },
        400: {
          description: "Bad Request",
          status: {
            type: "string",
          },
          message: {
            type: "string",
          },
        },
        404: {
          description: "Not Found",
          status: {
            type: "string",
          },
          message: {
            type: "string",
          },
        },
      },
    },
  },
  "/user/delete-user?": {
    delete: {
      tags: ["Users"],
      summary: "Delete User",
      description: "Delete User",
      operationId: "delete-user",
      parameters: [
        {
          name: "deleteId",
          in: "query",
          description: "Id of the user.",
          required: "true",
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        200: {
          description: "Success",
          status: {
            type: "string",
          },
          message: {
            type: "string",
          },
        },
        400: {
          description: "Bad Request",
          status: {
            type: "string",
          },
          message: {
            type: "string",
          },
        },
        404: {
          description: "Not Found",
          status: {
            type: "string",
          },
          message: {
            type: "string",
          },
        },
      },
    },
  },
};

export default userPaths;
