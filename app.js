/** importing configration file */
import config from "./config.js";

/** node module defined here */
import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";
import passport from "passport";
import cors from "cors";
import * as swaggerUi from "swagger-ui-express";

/** importing swagger defination */
import swaggerDefinition from "./swaggerDefinition.js";

/** importing database connection*/ 
import "./core/conn.js";

/** importing all Routes */
import user_router from "./modules/users/user-Routes.js";
import edu_router from "./modules/educations/edu-routes.js";
import workExp_router from "./modules/workExperiences/workExp-Routes.js";
import project_router from "./modules/projects/project-routes.js";

/* importing response error handler */
import errorHandler from "./error-handler/error-handler.js";

/** importing the passport configration  */
import passportConfig from "./helper/passportConfig.js";

/**creating express server app for server */
const app = express();

/**setting port where the application will run */
const PORT = config.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: "secretcode",
    maxAge: 600000,
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
passportConfig(passport);

// Router setup
app.get("/", (req, res) => {
  res.redirect("/api-docs");
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDefinition));
app.use("/user", user_router);
app.use("/education", edu_router);
app.use("/workExperience", workExp_router);
app.use("/project", project_router);

// Error handling
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});


/** Response Error handling */
app.use(errorHandler.ErrorHandler);

/** Server is running here */
app.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
