var express = require("express");
var bodyParser = require("body-parser");
var errorhandler = require('./handler.js');
var routes = require("./routes/routes.js");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

// Middle-ware for errorHandler
app.use(function errorHandler (err, req, res, next) {
  
  if (err) {

    let reqObj = fetchReq(req);

    errorhandler.handleError(err,reqObj);
    res.status(500).send({ 'error': err.message, 'trace': err.stack });
  }
});

function fetchReq(req) {

    return {
      "body": req.body,
      "cookies": req.cookies,
      "headers": req.headers,
      "files": req.files,
      "originalUrl": req.originalUrl,
      "params": req.params,
      "routePath": req.route.path,
      "routeMethods": req.route.methods,
      "signedCookies": req.signedCookies,
      "url": req.url
    };
}

// Test Uncaught Exception
// console.log(a);

var server = app.listen(3000, function () {
    console.log("app running on port.", server.address().port);
});
