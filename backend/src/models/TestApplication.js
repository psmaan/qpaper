const mongoose =require("mongoose")

const SubjectSchema = new mongoose.Schema({

    studentId: {
        type: Number,
        required: true
    },
    studentName: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    }
})

module.exports= mongoose.model('Test',SubjectSchema);
