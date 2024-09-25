const { default: mongoose } = require("mongoose");

const lawyerDataMOdel = new mongoose.Schema(

    {
        name: String,
        img: String,
        about: String,
        practiceArea: String,
        location: String,
        status: {
            type: String,
            enum: ["approved", "pending", "rejected"],
            default: "pending",
        },
        
        rating: String,
        license: Object,
        experience: Array,
        education: Array,
        documents: Array,
        reviews: Array,
        awards: Array,
        email: String,
    },
    {
        timestamps: true
    }
);

module.exports = lawyerDataMOdel