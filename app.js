require("dotenv").config();
const express = require("express");
const path = require("path");
const ejsMate = require("ejs-mate");
const mongoose = require("mongoose");
const Blog = require("./models/blog");
const Admin = require("./models/admin.js");
const Event = require("./models/event.js");
const wrapAsync = require("./utils/wrapAsync");
const ExpressError = require("./utils/ExpressError");
const { blogSchema } = require("./schema.js");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const methodOverride = require("method-override");
const { isAdmin } = require("./utils/middleware.js");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));

// creating connection with mongodb
const dbUrl = process.env.ATLAS_DB_URL;
main()
    .then(() => console.log("connection with db successful"))
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect(dbUrl);
}

const store = MongoStore.create({
    mongoUrl: dbUrl,
    crypto: {
        secret: process.env.SECRET,
    },
    touchAfter: 24 * 60 * 60,
});
store.on("error", (err) => {
    console.log("ERROR in mongo session store, ", err);
});
const sessionOptions = {
    store,
    secret: process.env.SECRET,
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
app.use(passport.session());
passport.use(new LocalStrategy(Admin.authenticate()));
passport.serializeUser(Admin.serializeUser());
passport.deserializeUser(Admin.deserializeUser());

app.use((req, res, next) => {
    res.locals.currUser = req.user;
    next();
});

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
        const allBlogs = await Blog.find({}).sort({ createdAt: -1 });
        res.render("cyber_phoenix/blogs.ejs", { allBlogs });
    })
);
// render new blog form
app.get("/blogs/new", isAdmin, (req, res) => {
    res.render("blogs/new.ejs");
});
// create new blog
app.post(
    "/blogs",
    isAdmin,
    validateBlogSchema,
    wrapAsync(async (req, res, next) => {
        const blog = req.body.blog;
        const tags = blog.tags.split(",");
        const newBlog = new Blog(blog);
        newBlog.tags = tags;

        await newBlog.save();
        res.redirect("/blogs");
    })
);
// render edit form
app.get(
    "/blogs/:id/edit",
    isAdmin,
    wrapAsync(async (req, res, next) => {
        let { id } = req.params;
        let blog = await Blog.findById(id);
        if (!blog) {
            next(new ExpressError(404, "Blog does not exist."));
        }

        res.render("blogs/edit.ejs", { blog });
    })
);
// update blog
app.put(
    "/blogs/:id",
    isAdmin,
    validateBlogSchema,
    wrapAsync(async (req, res) => {
        let { id } = req.params;
        const blog = req.body.blog;
        const tags = blog.tags.split(",");
        blog.tags = tags;

        await Blog.findByIdAndUpdate(id, blog);
        res.redirect(`/blogs/${id}`);
    })
);
// delete blog
app.delete(
    "/blogs/:id",
    isAdmin,
    wrapAsync(async (req, res) => {
        let { id } = req.params;
        let blog = await Blog.findByIdAndDelete(id);
        console.log(blog);
        res.redirect("/blogs");
    })
);

// show blog
app.get(
    "/blogs/:id",
    wrapAsync(async (req, res, next) => {
        const { id } = req.params;
        const blog = await Blog.findById(id);
        if (!blog) {
            next(new ExpressError(404, "Blog does not exist."));
        }

        res.render("blogs/show.ejs", { blog });
    })
);

app.get("/cp-admin", (req, res) => {
    res.render("admin/signin.ejs");
});
app.post(
    "/cp-admin",
    passport.authenticate("local", {
        failureRedirect: "/cp-admin",
    }),
    async (req, res) => {
        res.redirect("/blogs");
    }
);

// about route
app.get("/about", (req, res) => {
    res.render("cyber_phoenix/about.ejs");
});

// events route
app.get(
    "/events",
    wrapAsync(async (req, res) => {
        const events = await Event.find({}).sort({ date: -1 });
        res.render("cyber_phoenix/events.ejs", { events });
    })
);

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
