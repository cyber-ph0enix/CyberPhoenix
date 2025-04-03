const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    image: {
        trim: true,
        type: String,
    },
    content: {
        type: String,
        trim: true,
        required: true,
    },
    tags: [String],
});

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
