var appRouter = function (app) {

  app.get("/", function(req, res) {
    res.status(200).send("Welcome to our restful API");
  });

  app.get("/divide/:numOne/:numTwo", function(req, res, next) {
    var numOne = parseInt(req.params.numOne);
    var numTwo = parseInt(req.params.numTwo);
    if ( numTwo === 0 ) {
      next(new Error("Can't divide by zero"));
    }
    else {
      res.status(200).send(numOne + ' / ' + numTwo + ' = ' + numOne/numTwo); 
    }
  });

  app.get("/divide", function(req, res, next) {
    console.log(numOne, numTwo);
  });
}

module.exports = appRouter;
