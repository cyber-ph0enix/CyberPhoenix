const express = require("express");
const path = require("path");
const ejsMate = require("ejs-mate");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "public")));

// creating connection with mongodb
// main()
//     .then(() => console.log("connection with db successful"))
//     .catch(err => console.log(err));

// async function main () {
//     await mongoose.connect("mongodb://127.0.0.1:27017/cyber_phoenix");
// }

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
