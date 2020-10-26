const express = require("express");
const path = require("path");


// Initializations
const app = express();

// settings
app.set("port", process.env.PORT || 4000);
app.set("views", path.join(__dirname, "views"));


app.set("view engine", ".ejs"); //establecer motor de plantillas 

// middlewares
app.use(express.urlencoded({ extended: false }));
// Global Variables
// routes
app.get ('/', function(req,res){
    res.render('index')
});
// static files
app.use(express.static(path.join(__dirname, "public")));

module.exports = app;