import { projectInput, addProjectResponse, projectListResponse} from "./component.js";

const projectPaths = {
  "/project/addProject/{id}": {
    post: {
      tags: ["Projects"],
      summary: "Add project of the User",
      description: "Add project of the User",
      operationId: "addProject",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "ID of the user",
          required: true,
          schema: {
            type: "string",
          },
        },
      ],
      requestBody: {
        content: {
          "application/json": {
            schema: projectInput,
          },
        },
      },
      responses: {
        201: {
          description: "Created",
          content: {
            "application/json": {
                schema: addProjectResponse,
              },
          }
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
  "/project/project-list": {
    get: {
      tags: ["Projects"],
      summary: "List projects",
      description: "List of projects in public view",
      operationId: "project-list",
      responses: {
        200: {
          description: "Success",
          content: {
            "application/json": {
              schema: projectListResponse,
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
  "/project/update-project?": {
    patch: {
      tags: ["Projects"],
      summary: "Update project",
      description: "Update project",
      operationId: "update-project",
      parameters: [
        {
          name: "updateId",
          in: "query",
          description: "Id of the project",
          schema: {
            type: "string",
          },
        },
      ],
      requestBody: {
        content: {
          "application/json": {
            schema: projectInput,
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
      }
    },
  },
  "/project/delete-project?": {
    delete: {
      tags: ["Projects"],
      summary: "Delete Project",
      description: "Delete Project",
      operationId: "delete-project",
      parameters: [
        {
          name: "deleteId",
          in: "query",
          description: "Id of the Work Experience.",
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

export default projectPaths;
