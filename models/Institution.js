const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    courseName: {
        type: String,
        required: true
    },
    fee: {
        type: Number
    },
    eligibility: {
        type: String,
        required: true
    }
});

const BranchSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    disciplines: {
        type: String,
        required: true
    }
});

const InstitutionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    image: {
        type: [String]
    },
    courses: [CourseSchema],
    branches: [BranchSchema],
    message: {
        type: String,
        required: true
    },
    Details: {
        type: String,
        required: true
    },
    featured: {
        type: Boolean,
        required: true
    }
});

const Institution = mongoose.model('Institution', InstitutionSchema);

module.exports = Institution;
