var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");
var app = express();


// Use morgan logger for logging requests
app.use(logger("dev"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set cors
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



// use the api routes

let apiRoute = require ("./api/apiroute")
app.use('/api' , apiRoute);

// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));




// Connect to the Mongo DB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/devicesshops";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

  // Save database object from the callback for reuse.
  //db = client.db();
  console.log("Database connection ready");

  // Initialize the app.
  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
