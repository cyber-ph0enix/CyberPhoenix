const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    date: {
        type: Date,
        required: true,
    },
    keywords: {
        type: [String],
        default: [],
    },
    registerLink: {
        type: String,
        trim: true,
    },
});

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;
