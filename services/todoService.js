const axios = require("axios");

require("dotenv").config();

const todoService = async () => {
    console.log("GET-All");
    return await axios.get(`${process.env.todoURL}`);
};

const todoServiceId = async (id) => {
    console.log("GET-ID");
    return await axios.get(`${process.env.todoURL}${id}`);
};

module.exports = {
    todoService,
    todoServiceId,
};
