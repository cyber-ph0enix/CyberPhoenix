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
    res.render("cyber_phoenix/blogs.ejs");
});

app.get("/about", (req, res) => {
    res.render("cyber_phoenix/about.ejs");
});

app.get("/events", (req, res) => {
    res.render("cyber_phoenix/events.ejs");
});

app.listen(8080, () => console.log("app is listening to port 8080"));
