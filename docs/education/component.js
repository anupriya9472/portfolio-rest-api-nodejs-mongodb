const educationInput = {
  type: "object",
  properties: {
    programName: {
      type: "string",
      required: "true",
      description: "Name of the program",
    },
    programLevel: {
      type: "string",
      required: "true",
      description: "Level of the program",
    },
    collegeName: {
      type: "string",
      required: "true",
      description: "College Name",
    },
    collegeLocation: {
      type: "string",
      description: "Location of the college",
    },
    startDate: {
      type: "date",
      required: "true",
      description: "Start date of the program",
    },
    endDate: {
      type: "date",
      description: "End date of the program",
    },
    isActive: {
      type: "boolean",
      default: "true",
      description: "Is the program active?",
    },
    desc: {
      type: "string",
      description: "Description of the program",
    },
  },
};

export { educationInput };
