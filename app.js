const express = require("express");
const app_server = express();
const filecontroller = require("./controllers/filesystemController");


app_server.use('/',filecontroller);


module.exports = app_server;