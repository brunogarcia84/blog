require("dotenv").config();

// IMPORT MODULES
const express = require("express");
const expressLayout = require("express-ejs-layouts");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const MongoStore = require("connect-mongo");

const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 5000;

// CONNECT TO DB
connectDB();

// MIDDLEWARES
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI,
    }),
    // cookie: { maxAge: new Date { Date.now() + (3600000) } } \\for the cookie expiration
  })
);

// TEMPLATE ENGINE
app.set("view engine", "ejs");
app.set("views", "views");
app.set("layout", "layouts/layout");
app.use(expressLayout);
app.use(express.static("public"));

// IMPORT PERSONAL MODULES
const indexRouter = require("./routes/indexRouter");
const aboutRouter = require("./routes/aboutRouter");
const singlePostRouter = require("./routes/singlePostRouter");
const adminRouter = require("./routes/adminRouter");
const dashboardRouter = require("./routes/dashboardRouter");

// USING PERSONAL MODULES
app.use("/", indexRouter);
app.use("/about", aboutRouter);
app.use("/singlePost", singlePostRouter);
app.use("/admin", adminRouter);
app.use("/dashboard", dashboardRouter);

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
