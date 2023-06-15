const projectInput = {
  type: "object",
  properties: {
    title: {
      type: "string",
      required: "true",
      description: "Title of the Project",
    },
    category: {
      type: "string",
      required: "true",
      description: "Category of the Project",
    },
    startDate: {
      type: "date",
      required: "true",
      description: "Start date of the Project",
    },
    endDate: {
      type: "date",
      description: "End date of the Project",
    },
    desc: {
      type: "string",
      description: "Description of the Project",
    },
    technologies: {
      type: "array",
      items: {
        type: "string",
      },
      description: "List of technologies used in the Project",
    },
  },
};

const addProjectResponse = {
  type: "object",
  properties: {
    status: {
      type: "string",
    },
    message: {
      type: "string",
    },
    data: {
      type: "object",
      properties: {
        _id: {
          type: "string",
          description: "id of project",
        },
        title: {
          type: "string",
          description: "Title of the Project",
        },
        category: {
          type: "string",
          description: "Category of the Project",
        },
        startDate: {
          type: "date",
          description: "Start date of the Project",
        },
        endDate: {
          type: "date",
          description: "End date of the Project",
        },
        desc: {
          type: "string",
          description: "Description of the Project",
        },
        technologies: {
          type: "array",
          items: {
            type: "string",
          },
          description: "List of technologies used in the Project",
        },
        userID: {
          type: "string",
          description: "Id of user who made the project",
        },
      },
    },
  },
};

const projectListResponse = {
  type: "object",
  properties: {
    status: {
      type: "string",
    },
    message: {
      type: "string",
    },
    data: {
      type: "array",
      items: {
        type: "object",
        properties: {
          _id: {
            type: "string",
            description: "id of project",
          },
          title: {
            type: "string",
            description: "Title of the Project",
          },
          category: {
            type: "string",
            description: "Category of the Project",
          },
          startDate: {
            type: "date",
            description: "Start date of the Project",
          },
          endDate: {
            type: "date",
            description: "End date of the Project",
          },
          desc: {
            type: "string",
            description: "Description of the Project",
          },
          technologies: {
            type: "array",
            items: {
              type: "string",
            },
            description: "List of technologies used in the Project",
          },
          userID: {
            type: "string",
            description: "Id of user who made the project",
          },
          made_by: {
            type: "array",
            items: {
              type: "object",
              properties: {
                name: {
                  type: "string",
                  description: "Name of the user",
                },
                email: {
                  type: "string",
                  description: "Email Address of the user",
                },
                skills: {
                  type: "array",
                  items: {
                    type: "string",
                  },
                  description: "Skills of the user",
                },
              },
            },
          },
        },
      },
    },
  },
};


export {
  projectInput,
  addProjectResponse,
  projectListResponse,
};
