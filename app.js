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

app.get("/about", (res, req) => {
    res.render("cyber_phoenix/aboutUs.ejs");
})

app.listen(8080, () => console.log("app is listening to port 8080"));
