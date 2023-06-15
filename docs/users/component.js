const userInput = {
  type: "object",
  properties: {
    name: {
      type: "string",
      required: "true",
      description: "Name of the user",
    },
    phone: {
      type: "string",
      required: "true",
      description: "Phone number of user",
    },
    email: {
      type: "string",
      required: "true",
      description: "Email Address of the user",
    },
    password: {
      type: "string",
      required: "true",
      description: "Password of the user",
    },
    cpassword: {
      type: "string",
      required: "true",
      description: "Confirm Password of the user",
    },
    dob: {
      type: "date",
      required: "true",
      description: "Date of Birth of the user",
    },
    about: {
      type: "string",
      description: "About of the user",
    },
    skills: {
      type: "array",
      items: {
        type: "string",
      },
      description: "Skills of the user",
    },
  },
};
const registerUsersResponse = {
  type: "object",
  properties: {
    status: {
      type: "string",
    },
    message: {
      type: "string",
    },
    Data: {
      type: "object",
      properties: {
        _id: {
          type: "string",
          description: "Id of the user",
        },
        name: {
          type: "string",
          description: "Name of the user",
        },
        phone: {
          type: "string",
          description: "Phone number of user",
        },
        email: {
          type: "string",
          description: "Email Address of the user",
        },
        password: {
          type: "string",
          description: "Password of the user",
        },
        dob: {
          type: "date",
          description: "Date of Birth of the user",
        },
        about: {
          type: "string",
          description: "About of the user",
        },
        skills: {
          type: "array",
          items: {
            type: "string",
          },
          description: "Skills of the user",
        },
        isMailVerified: {
          type: "boolean",
          description: "Is the user verified by email",
        },
      },
    },
  },
};

const loginInput = {
  type: "object",
  properties: {
    email: {
      type: "string",
      required: "true",
      description: "Email Address of the user",
    },
    password: {
      type: "string",
      required: "true",
      description: "Password of the user",
    },
  },
};
const getUsersResponse = {
  type: "object",
  properties: {
    status: {
      type: "string",
      description: "status of users api",
    },
    message: {
      type: "string",
      description: "message get from backend",
    },
    data: {
      type: "array",
      items: {
        type: "object",
        properties: {
          _id: {
            type: "string",
            description: "id of user",
          },
          name: {
            type: "string",
            description: "Name of user",
          },
          phone: {
            type: "string",
            description: "phone of user",
          },
          email: {
            type: "string",
            description: "email of user",
          },
          dob: {
            type: "date",
            description: "Date of Birth of user",
          },
          about: {
            type: "string",
            description: "About of the user",
          },
          skills: {
            type: "array",
            items: {
              type: "string",
            },
            description: "Skills of the user",
          },
          isMailVerified: {
            type: "boolean",
            description: "Status of mail verification",
          },
        },
      },
    },
  },
};

const changePasswordInput = {
  type: "object",
  properties: {
    oldpassword: {
      type: "string",
      description: "Old password",
      required: "true",
    },
    newPassword: {
      type: "string",
      description: "New password",
      required: "true",
    },
    newCpassword: {
      type: "string",
      description: "Confirm password",
      required: "true",
    },
  },
};

const workExpProperties = {
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
};

const projectProperties = {
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
};

const eduProperties = {
  programName: {
    type: "string",
    description: "Name of the program",
  },
  programLevel: {
    type: "string",
    description: "Level of the program",
  },
  collegeName: {
    type: "string",
    description: "College Name",
  },
  collegeLocation: {
    type: "string",
    description: "Location of the college",
  },
  startDate: {
    type: "date",
    description: "Start date of the program",
  },
  endDate: {
    type: "date",
    description: "End date of the program",
  },
  isActive: {
    type: "boolean",
    description: "Is the program active?",
  },
  desc: {
    type: "string",
    description: "Description of the program",
  },
};

const getListPublicResponse = {
  type: "object",
  properties: {
    status: {
      type: "string",
      description: "status of users api",
    },
    message: {
      type: "string",
      description: "message get from backend",
    },
    data: {
      type: "array",
      items: {
        type: "object",
        properties: {
          _id: {
            type: "string",
            description: "id of user",
          },
          name: {
            type: "string",
            description: "Name of user",
          },
          email: {
            type: "string",
            description: "email of user",
          },
          dob: {
            type: "date",
            description: "Date of Birth of user",
          },
          about: {
            type: "string",
            description: "About of the user",
          },
          skills: {
            type: "array",
            items: {
              type: "string",
            },
            description: "Skills of the user",
          },
          Education: {
            type: "array",
            items: {
              type: "object",
              properties: { ...eduProperties },
            },
            description: "Education of the user",
          },
          Projects: {
            type: "array",
            items: {
              type: "object",
              properties: { ...projectProperties },
            },
            description: "Projects of the user",
          },
          WorkExperience: {
            type: "array",
            items: {
              type: "object",
              properties: { ...workExpProperties },
            },
            description: "Work experience of the user",
          },
        },
      },
    },
  },
};

const getUserByIdResponse = {
  type: "object",
  properties: {
    status: {
      type: "string",
      description: "status of users api",
    },
    message: {
      type: "string",
      description: "message get from backend",
    },
    data: {
      type: "array",
      items: {
        type: "object",
        properties: {
          _id: {
            type: "string",
            description: "id of user",
          },
          name: {
            type: "string",
            description: "Name of user",
          },
          email: {
            type: "string",
            description: "email of user",
          },
          dob: {
            type: "date",
            description: "Date of Birth of user",
          },
          about: {
            type: "string",
            description: "About of the user",
          },
          skills: {
            type: "array",
            items: {
              type: "string",
            },
            description: "Skills of the user",
          },
          Education: {
            type: "array",
            items: {
              type: "object",
              properties: {
                _id: {
                  type: "string",
                  description: "id of user",
                },
                ...eduProperties,
              },
            },
            description: "Education of the user",
          },
          Projects: {
            type: "array",
            items: {
              type: "object",
              properties: {
                _id: {
                  type: "string",
                  description: "id of user",
                },
                ...projectProperties,
              },
            },
            description: "Projects of the user",
          },
          WorkExperience: {
            type: "array",
            items: {
              type: "object",
              properties: {
                _id: {
                  type: "string",
                  description: "id of user",
                },
                ...workExpProperties,
              },
            },
            description: "Work experience of the user",
          },
        },
      },
    },
  },
};

const updateUserInput={
  type: "object",
  properties: {
    name: {
      type: "string",
      required: "true",
      description: "Name of the user",
    },
    phone: {
      type: "string",
      required: "true",
      description: "Phone number of user",
    },
    dob: {
      type: "date",
      required: "true",
      description: "Date of Birth of the user",
    },
    about: {
      type: "string",
      description: "About of the user",
    },
    skills: {
      type: "array",
      items: {
        type: "string",
      },
      description: "Skills of the user",
    },
  }
}

export {
  userInput,
  registerUsersResponse,
  loginInput,
  getUsersResponse,
  changePasswordInput,
  getListPublicResponse,
  getUserByIdResponse,
  updateUserInput
};
