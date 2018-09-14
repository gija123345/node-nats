var express = require("express");
var bodyParser = require("body-parser");
var errorhandler = require('./handler.js');
var routes = require("./routes/routes.js");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

app.use(function errorHandler (err, req, res, next) {
  if (err) {
    errorhandler.handleError(err);
    res.status(500).send({ 'error': err.message, 'trace': err.stack });
  }
});

// Test Uncaught Exception
// console.log(a);

var server = app.listen(3000, function () {
    console.log("app running on port.", server.address().port);
});
