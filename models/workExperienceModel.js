import mongoose from "mongoose";

const WorkExperienceSchema = mongoose.Schema({
    jobTitle: {
        type: String,
        required: true
    },
    organizationName: {
        type: String,
        required: true
    },
    organizationLocation: {
        type: String
    },
    organizationWebsite: {
        type: String,
        required: true
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
    tasks: [],
    userID: {
        type: mongoose.Schema.Types.ObjectId
    }

});

//collection creation
const WorkExperience = mongoose.model('WorkExperience', WorkExperienceSchema);

export default WorkExperience;