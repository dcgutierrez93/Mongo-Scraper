// =============================================================================

// Dependencies

// =============================================================================
var express          = require("express");
var mongoose         = require("mongoose");
var expresHandlebars = require("express-handlebars");
var bodyParser       = require("body-parser");

// Setup Port
var PORT = process.env.PORT || 3000;

// Initiate Express app
var app = express();

// Setup express router
var router = express.Router();

// Require our routes file pass our router object
require("./config/routes")(router);

// Designate our public folder as a static directory
app.use(express.static(__dirname + "/public"));

// Connect Handlebars to our Express app
app.engine("handlebars", expressHandlebars({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Use bodyParser in our app
app.use(bodyParser.urlencoded({
  extended: false
}));

// Have every request go through our router middleware
app.use(router);

var db = process.env.MONGODB_URI || "mongodb://heroku_6krpvc5k:4q4dbnt7gpcocinughtrna1j49@ds153015.mlab.com:53015/heroku_6krpvc5k";

// Connect mongoose to our database
mongoose.connect(db, function(error) {
  // Log any errors connecting with mongoose
  if (error) {
    console.log(error);
  }
  // Or log a success message
  else {
    console.log("mongoose connection is successful");
  }
});

// Listen on the port
app.listen(PORT, function() {
  console.log("Listening on port:" + PORT);
});
