import mongoose from "mongoose";

const EducationSchema = mongoose.Schema({
    programName: {
        type: String,
        required: true
    },
    programLevel: {
        type: String,
        required: true
    },
    collegeName: {
        type: String,
        required: true
    },
    collegeLocation: {
        type: String
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date
    },
    isActive: {
        type: Boolean,
        default: true
    },
    desc: {
        type: String
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId
    }
});

//collection creation
const Education = mongoose.model('Education', EducationSchema);

export default Education;