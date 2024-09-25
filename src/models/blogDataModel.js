const { default: mongoose } = require("mongoose");

const blogDataModel = new mongoose.Schema(

    {
        question: String,
        answer: String,
        practice_area: String,
        read_time: Number,
        asked_by: String,
        views: Number,
        date_posted: String,
    },
    {
        timestamps: true
    }
);

module.exports = blogDataModel