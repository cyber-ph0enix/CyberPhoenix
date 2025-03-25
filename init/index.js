const mongoose = require("mongoose");
const data = require("./data");
const Blog = require("../models/blog");

// creating connection with mongodb
const MONGO_URL = "mongodb://127.0.0.1:27017/cyber_phoenix";
main()
    .then(() => console.log("connection with db successful"))
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Blog.deleteMany({});
    await Blog.insertMany(data);
};

initDB();
