const express = require("express");
const bodyParser = require("body-parser");

//initialise app
const app = express();

//Parsing Middleware
//Parse application/json
app.use(bodyParser.json());

//Backend Router
app.use('/users', require('./routes/user'));

module.exports = app