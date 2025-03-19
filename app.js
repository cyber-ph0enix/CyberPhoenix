const express = require("express");
const path = require("path");
const ejsMate = require("ejs-mate");
const mongoose = require("mongoose");
const Blog = require("./models/blog");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "public")));

// creating connection with mongodb
const MONGO_URL = "mongodb://127.0.0.1:27017/cyber_phoenix";
main()
    .then(() => console.log("connection with db successful"))
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect(MONGO_URL);
}

// index route
app.get("/", (req, res) => {
    res.render("cyber_phoenix/index.ejs");
});

// show all blogs route
app.get("/blogs", async (req, res) => {
    const allBlogs = await Blog.find({});
    res.render("cyber_phoenix/blogs.ejs", { allBlogs });
});
// render new blog form
app.get("/blogs/new", (req, res) => {
    res.render("blogs/new.ejs");
});
app.get("/blogs/show", (req, res) => {
    res.render("blogs/show.ejs");
});
// create new blog
app.post("/blogs", async (req, res) => {
    const tags = req.body.tags.split(",");
    const newBlog = new Blog(req.body);
    newBlog.tags = tags;
    
    const result = await newBlog.save();
    console.log(result);
    res.send(result);
});

// about route
app.get("/about", (req, res) => {
    res.render("cyber_phoenix/about.ejs");
});

// events route
app.get("/events", (req, res) => {
    res.render("cyber_phoenix/events.ejs");
});

app.listen(8080, () => console.log("app is listening to port 8080"));
