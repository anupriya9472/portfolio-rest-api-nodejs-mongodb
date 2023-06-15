import users from "./docs/users/index.js";
import eduPaths from "./docs/education/index.js";
import workExpPaths from "./docs/workExperiences/index.js";
import projectPaths from "./docs/projects/index.js";

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    version: "1.0.0",
    title: "Portfolio App",
    description: "Portfolio app ",
    contact: {
      name: "Anu Priya",
      email:"anu.priya.9472@gmail.com"
    },
  },
  servers: [
    {
      url: "/",
      description: "Version 1",
    },
  ],
  paths: {
    ...users,
    ...eduPaths,
    ...workExpPaths,
    ...projectPaths,
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
      api_key: {
        type: "apiKey",
        name: "apikey",
        in: "header",
      },
    },
  },
  security: [
    {
      bearerAuth: [],
      api_key: [],
    },
  ],
};
export default swaggerDefinition;
