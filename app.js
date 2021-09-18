'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
var Mongoose = require("mongoose");
var url = process.env.MONGO_URL ? process.env.MONGO_URL : "mongodb://localhost/mavericdb";

Mongoose.connect(url, function (err) { 
	if (!err) { 
		console.log("Connected to the DB"); 
	} else { 
		console.error("error "+ err.message); 
	} 
});

module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 3000;
  app.listen(port);

  if (swaggerExpress.runner.swagger.paths['/hello']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
  }
});
