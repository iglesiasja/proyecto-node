const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");//para crear motores de plantilla

// Initializations
const app = express();

// settings
app.set("port", process.env.PORT || 4000);
app.set("views", path.join(__dirname, "views"));
app.engine(
    ".hbs",
    exphbs({
      defaultLayout: "main",
      layoutsDir: path.join(app.get("views"), "layouts"),
      partialsDir: path.join(app.get("views"), "partials"),
      extname: ".hbs"
    })
);

app.set("view engine", ".hbs"); //establecer motor de plantillas 

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