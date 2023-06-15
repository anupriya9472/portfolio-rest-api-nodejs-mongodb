import { educationInput } from "./component.js";

const eduPaths = {
  "/education/addEducation/{id}": {
    post: {
      tags: ["Education"],
      summary: "Add education of the User",
      description: "Add education of the User",
      operationId: "addEducation",
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
            schema: educationInput,
          },
        },
      },
      responses: {
        201: {
          description: "Created",
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
  "/education/update-education?":{
    patch:{
      tags: ["Education"],
      summary: "Update Education",
      description: "Update Education",
      operationId: "update-education",
      parameters: [
        {
          name: "updateId",
          in: "query",
          description: "Id of the Education.",
          required: "true",
          schema: {
            type: "string",
          },
        },
      ],
      requestBody:{
        content: {
          "application/json": {
            schema: educationInput,
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
    }
  },
  "/education/delete-education?": {
    delete: {
      tags: ["Education"],
      summary: "Delete Education",
      description: "Delete Education",
      operationId: "delete-education",
      parameters: [
        {
          name: "deleteId",
          in: "query",
          description: "Id of the Education.",
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

export default eduPaths;
