const express = require("express");
const todosRouter = express.Router();
const { todoService, todoServiceId } = require("../services/todoService");

//! GET-ALL
//* http://www.localhost:4000/
todosRouter.get("/", (req, res, next) => {
    todoService()
        .then((result) => {
            res.status(500).json(result.data);
        })
        .catch((err) => {
            res.status(500).json({
                error: {
                    message: err.message,
                },
            });
        });
});

//! GET-ID
//* http://www.localhost:4000/:id
todosRouter.get("/:id", (req, res, next) => {
    todoServiceId(req.params.id)
        .then((result) => {
            res.status(200).json(result.data);
        })
        .catch((err) => {
            res.status(500).json({
                error: {
                    message: err.message,
                },
            });
        });
});

module.exports = todosRouter;
