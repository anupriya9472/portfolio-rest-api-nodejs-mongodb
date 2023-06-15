const workExpInput = {
  type: "object",
  properties: {
    jobTitle: {
      type: "string",
      required: "true",
      description: "Job title of the user",
    },
    organizationName: {
      type: "string",
      required: "true",
      description: "Name of the organization",
    },
    organizationLocation: {
      type: "string",
      description: "Location of the organization",
    },
    organizationWebsite: {
      type: "string",
      required: "true",
      description: "Website of the organization",
    },
    startDate: {
      type: "date",
      required: "true",
      description: "Start date of the job",
    },
    endDate: {
      type: "date",
      description: "End date of the job",
    },
    isActive: {
      type: "boolean",
      default: "true",
      description: "Is currently working?",
    },
    desc: {
      type: "string",
      description: "Description of the work",
    },
    tasks: {
      type: "array",
      items: {
        type: "string",
      },
      description: "Tasks to be completed",
    },
  },
};

const addWorkExpResponse = {
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
          description: "Id of the Job",
        },
        jobTitle: {
          type: "string",
          description: "Job title of the user",
        },
        organizationName: {
          type: "string",
          description: "Name of the organization",
        },
        organizationLocation: {
          type: "string",
          description: "Location of the organization",
        },
        organizationWebsite: {
          type: "string",
          description: "Website of the organization",
        },
        startDate: {
          type: "date",
          description: "Start date of the job",
        },
        endDate: {
          type: "date",
          description: "End date of the job",
        },
        isActive: {
          type: "boolean",
          description: "Is currently working?",
        },
        desc: {
          type: "string",
          description: "Description of the work",
        },
        tasks: {
          type: "array",
          items: {
            type: "string",
          },
          description: "Tasks to be completed",
        },
        userID: {
          type: "string",
          description: "Id of the user",
        },
      },
    },
  },
};


export { workExpInput, addWorkExpResponse,  };
