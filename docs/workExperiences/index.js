import {
  workExpInput,
  addWorkExpResponse,
} from "./component.js";

const workExpPaths = {
  "/workExperience/addWorkExperience/{id}": {
    post: {
      tags: ["Work-Experience"],
      summary: "Add Work Experience of the User",
      description: "Add Work Experience of the User",
      operationId: "addWorkExperience",
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
            schema: workExpInput,
          },
        },
      },
      responses: {
        201: {
          description: "Created",
          content: {
            "application/json": {
              schema: addWorkExpResponse,
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
  "/workExperience/update-workExp?": {
    patch: {
      tags: ["Work-Experience"],
      summary: "Update Work Experience",
      description: "Update Work Experience",
      operationId: "update-workExp",
      parameters: [
        {
          name: "updateId",
          in: "query",
          description: "Id of the Work Experience.",
          required: "true",
          schema: {
            type: "string",
          },
        },
      ],
      requestBody: {
        content: {
          "application/json": {
            schema: workExpInput,
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
  "/workExperience/delete-workExp?": {
    delete: {
      tags: ["Work-Experience"],
      summary: "Delete Work Experience",
      description: "Delete Work Experience",
      operationId: "delete-workExp",
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
export default workExpPaths;
