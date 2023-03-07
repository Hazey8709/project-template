const express = require("express");
const todosRouter = require("../router/todosRouter");
const app = express();

//! middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//! CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Header",
        "Origin, X-requested-with, Content-Type, Accept, Authorization"
    );

    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    }
    next();
});

//! Service Status
//* localhost:4000/
app.get("/", (req, res) => {
    res.status(200).json({ message: "connected" });
    console.log("Connected!");
});

//!   Routers
app.use("/todos", todosRouter);

//! Error Handling
app.use((req, res, next) => {
    const error = new Error("NOT FOUND");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message,
            status: error.status,
            method: req.method,
        },
    });
});

module.exports = app;
