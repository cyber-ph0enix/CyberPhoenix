const express = require("express");
const path = require("path");
const ejsMate = require("ejs-mate");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("cyber_phoenix/index.ejs");
});
app.get("/blogs", (req, res) => {
    let data = ["blog 1", "blog 2", "blog 3", "blog 4", "blog 5", "blog 6", "blog 7", "blog 8", "blog 9", "blog 10"];
    res.render("cyber_phoenix/blogs.ejs", {blogs: data});
});

app.listen(8080, () => console.log("app is listening to port 8080"));
