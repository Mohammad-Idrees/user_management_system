const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");

//initialise app
const app = express();

//Templating engine
app.engine('hbs', exphbs( {extname: '.hbs' } ));
app.set('views', __dirname+'/views')
app.set('view engine', 'hbs');


//Static files
app.use(express.static(__dirname+'/public'));


//Parsing Middleware
//Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended:true }));

//Parse application/json
app.use(bodyParser.json());


//Frontend Router
app.use('/', require('./routes/user'));


module.exports = app