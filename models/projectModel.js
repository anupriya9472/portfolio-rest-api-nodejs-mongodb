import mongoose from "mongoose";

const ProjectSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    category: {
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
    desc: {
        type: String
    },
    technologies: [],
    userID: {
        type: mongoose.Schema.Types.ObjectId
    }
});

//collection creation
const Project = mongoose.model('Project', ProjectSchema);

export default Project;