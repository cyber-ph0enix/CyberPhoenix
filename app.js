const express = require("express");
const path = require("path");
const ejsMate = require("ejs-mate");
const mongoose = require("mongoose");
const Blog = require("./models/blog");
const Admin = require("./models/admin.js");
const wrapAsync = require("./utils/wrapAsync");
const ExpressError = require("./utils/ExpressError");
const { blogSchema } = require("./schema.js");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const session = require("express-session");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "public")));

const sessionOptions = {
    secret: "thisisasecretshh",
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 10 * 60 * 1000,
        maxAge: 10 * 60 * 1000,
        httpOnly: true,
    },
};
app.use(session(sessionOptions));

// using passport
app.use(passport.initialize());
passport.use(new LocalStrategy(Admin.authenticate()));
passport.serializeUser(Admin.serializeUser());
passport.deserializeUser(Admin.deserializeUser());

// creating connection with mongodb
const MONGO_URL = "mongodb://127.0.0.1:27017/cyber_phoenix";
main()
    .then(() => console.log("connection with db successful"))
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect(MONGO_URL);
}

// schema validation middleware
function validateBlogSchema(req, res, next) {
    const { error } = blogSchema.validate(req.body);
    if (error) throw new ExpressError(400, error);
    else next();
}

// index route
app.get("/", (req, res) => {
    res.render("cyber_phoenix/index.ejs");
});

// show all blogs route
app.get(
    "/blogs",
    wrapAsync(async (req, res) => {
        const allBlogs = await Blog.find({});
        res.render("cyber_phoenix/blogs.ejs", { allBlogs });
    })
);
// render new blog form
app.get("/blogs/new", (req, res) => {
    if (!req.isAuthenticated()) res.redirect("/");
    res.render("blogs/new.ejs");
});

// show blog
app.get(
    "/blogs/:id",
    wrapAsync(async (req, res, next) => {
        const { id } = req.params;
        const blog = await Blog.findById(id);

        res.render("blogs/show.ejs", { blog });
    })
);
// create new blog
app.post(
    "/blogs",
    validateBlogSchema,
    wrapAsync(async (req, res, next) => {
        const tags = req.body.blog.tags.split(",");
        const newBlog = new Blog(req.body.blog);
        newBlog.tags = tags;

        const result = await newBlog.save();
        console.log(result);
        res.send(result);
    })
);

// app.get("/test", async (req, res) => {
//     const fakeAdmin = new Admin({
//         email: "fakeadmin@gmail.com",
//         username: "cp-admin",
//     });

//     const registered = await Admin.register(fakeAdmin, "fakeadmin");
//     res.send(registered);
// });
app.get("/cp-admin", (req, res) => {
    res.render("admin/signin.ejs");
});
app.post(
    "/cp-admin",
    passport.authenticate("local", {
        failureRedirect: "/cp-admin",
    }),
    async (req, res) => {
        res.send("you're signed in");
    }
);

// about route
app.get("/about", (req, res) => {
    res.render("cyber_phoenix/about.ejs");
});

// events route
app.get("/events", (req, res) => {
    res.render("cyber_phoenix/events.ejs");
});

// page not found
app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page not found."));
});

// error handler
app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Sorry, something went wrong." } = err;
    res.status(statusCode).render("error.ejs", { statusCode, message });
});

app.listen(8080, () => console.log("app is listening to port 8080"));
