const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    image: {
        type: String,
    },
    content: {
        type: [String],
        required: true,
    },
    tags: [String],
});

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
