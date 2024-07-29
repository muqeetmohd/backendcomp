const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(cookieParser(process.env.COOKIE_SECRET));

// Middlewares
app.use(express.json());
app.use(
    cors({
        origin: true,
        methods: ["GET,POST,DELETE,PUT,PATCH"],
        credentials: true,
    })
);

// Custom Middlewares
const {
    authenticateUser,
} = require("./Middleware/UserAuthenticationMiddleware");

// Routers
const UserRouter = require("./Router/UserRouter");
const AuthRouter = require("./Router/AuthRouter");

// Connecting routes
app.use("/api/v1/Users", authenticateUser, UserRouter);
app.use("/api/v1/Auth", AuthRouter);

module.exports = app;
