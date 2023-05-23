const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Databass Schema

const FeedbackSchema = new Schema({
    Feedbackname: { type: String, required: true },
    email2: { type: String, required: true },
    feedback: { type: String, required: true },
    
   

}, {
    timestamps: true,
});



const Feedback = mongoose.model('Feedback', FeedbackSchema);

module.exports = Feedback;