import mongoose from "mongoose";
import config from "../config.js";


/********************************
 ***** MongoDB connection *****
 ********************************/

mongoose.connect(config.DATABASE).then(() => {
    console.log('DB connected successfully');
}).catch((err) => {
    console.log('DB is not connected', err);
});
